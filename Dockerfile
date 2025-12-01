ARG NODE_VERSION="24-alpine"

# Install dependencies only when needed
FROM node:${NODE_VERSION} AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Enable pnpm via corepack and pin pnpm 10.x
RUN corepack enable && corepack prepare pnpm@10.0.0 --activate

# Copy only the lockfile and npm config needed for dependency resolution
# Keeping package.json out of this stage ensures cache invalidation only
# when dependencies (lockfile) or registry config change.
COPY pnpm-lock.yaml .npmrc ./

# Pre-fetch all dependencies into the pnpm store based on the lockfile.
# This stage depends only on the lockfile + .npmrc, so it is highly cacheable.
RUN pnpm fetch

# Rebuild the source code only when needed
FROM node:${NODE_VERSION} AS builder
WORKDIR /app

ENV NEXT_PUBLIC_MATOMO_URL="https://matomo.fabrique.social.gouv.fr"
ENV NEXT_PUBLIC_MATOMO_SITE_ID="70"

ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

# Enable pnpm in the builder as well
RUN corepack enable && corepack prepare pnpm@10.0.0 --activate

# Copy manifests and reuse the cached pnpm store from the deps stage
COPY package.json pnpm-lock.yaml .npmrc ./
COPY --from=deps /root/.local/share/pnpm /root/.local/share/pnpm

# Install dependencies fully offline using the pre-fetched store
RUN pnpm install --frozen-lockfile --offline

# Now copy the full source and build
COPY . .
RUN pnpm build

# Production image, copy all the files and run next
FROM node:${NODE_VERSION} AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# You only need to copy next.config.js if you are NOT using the default configuration
# COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER 1001

EXPOSE 3000

ENV NEXT_TELEMETRY_DISABLED 1

# Enable pnpm via corepack in the runtime image
RUN corepack enable && corepack prepare pnpm@10.0.0 --activate

CMD ["pnpm", "start"]
