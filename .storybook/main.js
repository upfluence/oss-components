/* global module require __dirname */
const path = require('path');
const root = path.join(__dirname, '../');
const node_modules = path.join(root, 'node_modules');
const namedBlockPolyfill = require('ember-named-blocks-polyfill/lib/named-blocks-polyfill-plugin');
d.
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

  emberOptions: {
    polyfills: [namedBlockPolyfill]
  },

  webpackFinal: async (config) => {
    config.node = { fs: 'empty', child_process: 'empty' };

    config.module.rules.push({
      test: /\.less$/i,
      use: ['style-loader', 'css-loader', 'less-loader']
    });

    config.resolve.alias = Object.assign(config.resolve.alias, {
      'bootstrap.less': path.resolve(node_modules, 'bootstrap/less/bootstrap')
    });

    return config;
  }
};
