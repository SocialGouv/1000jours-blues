const securityHeaders = [
  {
    key: 'x-content-type-options',
    value: 'nosniff'
  },
  {
    key: 'x-frame-options',
    value: 'deny'
  },
  {
    key: 'x-frame-options',
    value: '1; mode=block'
  }
]

module.exports = {
  webpack: function (config) {
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: "js-yaml-loader",
    });
    return config;
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
};
