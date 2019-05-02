const withTypescript = require('@zeit/next-typescript');
const withOffline = require('next-offline');

const nextConfig = {
  generateInDevMode: true,
  workboxOpts: {
    globPatterns: ['static/**/*'],
    globDirectory: '.',
    importWorkboxFrom: 'cdn',
    skipWaiting: true,
    clientsClaim: true,
    runtimeCaching: [
      {
        urlPattern: '/',
        handler: 'networkFirst',
        options: {
          cacheName: 'html-cache',
        },
      },
      {
        urlPattern: /.*\.(?:png|jpg|jpeg|svg|gif)/,
        handler: 'cacheFirst',
        options: {
          cacheName: 'image-cache',
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
      {
        urlPattern: /.*\.(?:ttf|woff|woff2)/,
        handler: 'cacheFirst',
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

module.exports = withTypescript(withOffline(nextConfig));
