module.exports = {
  globDirectory: 'public/',
  globPatterns: ['**/*.{webmanifest,ttf,woff,woff2,png,svg,js,css,html}'],
  swDest: 'dist/public/sw.js',
  ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
  navigateFallback: '/index.html',
};
