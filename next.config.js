/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const path = require('path')


module.exports = withPlugins([[withImages]], {
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
    ) => {
    config.resolve.modules.push(path.resolve('./'))
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }
    config.module.rules.push({
      test: /\.html$/i,
      use: [
        {
          loader: "html-loader",
        },
      ],
    })

    return config
  },
  target: "serverless",
  i18n: {
    locales: ['de', 'en'],
    defaultLocale: 'de'
  },
  distDir: 'build',
})
