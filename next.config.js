// @ts-check
/** @type {import('next').NextConfig} */

/* eslint-disable */
const path = require('path');
const dotEnvResult = require('dotenv').config();

if (dotEnvResult.error) {
  throw dotEnvResult.error;
}

const nextConfig = {
  compiler: {
    styledComponents: true
  },
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: {not: /url/},
        use: ['@svgr/webpack'],
      },
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    // fileLoaderRule.exclude = /\.svg$/i;

    config.resolve.alias['images'] = path.join(__dirname, 'public');
    config.resolve.alias['icons'] = path.join(__dirname, 'icons');
    config.resolve.alias['components'] = path.join(__dirname, 'components');
    config.resolve.alias['assets'] = path.join(__dirname, 'assets');

    config.resolve.extensions.push('.ts', '.tsx');

    return config;
  },
  devIndicators: {
    autoPrerender: false,
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
  }
};

module.exports = nextConfig;