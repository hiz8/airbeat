const withOffline = require('next-offline');

const nextConfig = {
  webpack: cfg => {
    const originalEntry = cfg.entry;

    cfg.entry = async () => {
      const entries = await originalEntry();

      if (
        entries['main.js'] &&
        !entries['main.js'].includes('./lib/polyfills.ts')
      ) {
        entries['main.js'].unshift('./lib/polyfills.ts');
      }

      return entries;
    };

    return cfg;
  },
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

module.exports = withOffline(nextConfig);
