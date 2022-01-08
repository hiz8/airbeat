const withOffline = require('next-offline');
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  generateInDevMode: true,
  workboxOpts: {
    runtimeCaching: [
      {
        urlPattern: '/',
        handler: 'NetworkFirst',
        options: {
          cacheName: 'html-cache',
        },
      },
      {
        urlPattern: /.*\.(?:png|jpg|jpeg|svg|gif)/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'image-cache',
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
      {
        urlPattern: /.*\.(?:ttf|woff|woff2)/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'font-cache',
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
};

module.exports = withVanillaExtract(withOffline(nextConfig));
