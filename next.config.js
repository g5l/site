/* eslint-disable */
const path = require('path')
const dotEnvResult = require('dotenv').config()

if (dotEnvResult.error) {
  throw dotEnvResult.error
}

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
    config.resolve.alias['assets'] = path.join(__dirname, 'assets');

    return config;
  },
  devIndicators: {
    autoPrerender: false,
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
  }
};