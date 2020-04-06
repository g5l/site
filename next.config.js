/* eslint-disable */
const path = require('path')

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });

    config.resolve.alias['images'] = path.join(__dirname, 'public');
    config.resolve.alias['icons'] = path.join(__dirname, 'icons');
    config.resolve.alias['components'] = path.join(__dirname, 'components');

    return config;
  },
  devIndicators: {
    autoPrerender: false,
  },
};