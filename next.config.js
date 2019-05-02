const withTypescript = require('@zeit/next-typescript');
const withOffline = require('next-offline');

const nextConfig = {
  generateInDevMode: true,
};

module.exports = withTypescript(withOffline(nextConfig));
