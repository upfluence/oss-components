/* global module require __dirname */
const path = require('path');
const root = path.join(__dirname, '../');
const node_modules = path.join(root, 'node_modules');
const addon_path = path.join(root, 'addon');
const dummy_path = path.join(root, 'tests/dummy/app');

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../addon/components/**/*.stories.mdx',
    '../addon/components/**/*.stories.@(js|jsx|ts|tsx)',
    '../addon/modifiers/**/*.stories.mdx',
    '../addon/modifiers/**/*.stories.@(js|jsx|ts|tsx)',
    '../addon/helpers/**/*.stories.mdx',
    '../addon/helpers/**/*.stories.@(js|jsx|ts|tsx)',
    '../addon-test-support/**/*.stories.mdx',
    '../app/styles/**/*.stories.mdx'
  ],

  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false
      }
    }
  ],

  webpackFinal: async (config) => {
    config.node = { fs: 'empty', child_process: 'empty' };

    config.module.rules.push({
      test: /\.less$/i,
      use: ['style-loader', { loader: 'css-loader', options: { url: false } }, 'less-loader']
    });

    config.resolve.alias = Object.assign(config.resolve.alias, {
      '@upfluence/oss-components': path.resolve(addon_path),
      dummy: path.resolve(dummy_path)
    });

    return config;
  }
};
