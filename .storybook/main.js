const path = require('path')

module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    webpackFinal: async (config) => {
        config.resolve.modules = [path.resolve(__dirname, '..'), 'node_modules']
        config.resolve.extensions.push('.jsx')

        return config
    },
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
}
