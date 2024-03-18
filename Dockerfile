ARG NODE_VERSION="16-alpine@sha256:710a2c192ca426e03e4f3ec1869e5c29db855eb6969b74e6c50fd270ffccd3f1"

# Install dependencies only when needed
FROM node:${NODE_VERSION} AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY yarn.lock .yarnrc.yml ./
COPY .yarn .yarn
ENV YARN_IGNORE_NODE 1
RUN yarn fetch

# Rebuild the source code only when needed
FROM node:${NODE_VERSION} AS builder
WORKDIR /app

ENV NEXT_PUBLIC_MATOMO_URL="https://matomo.fabrique.social.gouv.fr"
ENV NEXT_PUBLIC_MATOMO_SITE_ID="70"

ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN yarn build
RUN yarn workspaces focus --production && yarn cache clean

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
ENV YARN_IGNORE_NODE 1
CMD ["yarn", "start"]
