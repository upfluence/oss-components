const path = require('path');
const root = path.join(__dirname, '../');
const node_modules = path.join(root, 'node_modules');

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../addon/components/**/*.stories.mdx",
    "../addon/components/**/*.stories.@(js|jsx|ts|tsx)",
    "../addon/modifiers/**/*.stories.mdx",
    "../addon/modifiers/**/*.stories.@(js|jsx|ts|tsx)",
    "./oss/less/**/*.stories.mdx",
    "./oss/less/**/*.stories.@(js|jsx|ts|tsx)"
  ],

  addons: [
    "@storybook/addon-links",
    {
      name: "@storybook/addon-essentials",
      options: {
        backgrounds: false
      }
    }
  ],

  webpackFinal: async (config, { configType }) => {
    config.node = {fs: 'empty', child_process: 'empty'};

    config.module.rules.push({
      test: /\.less$/i,
      use: [
        'style-loader',
        'css-loader',
        'less-loader',
      ]
    });

    config.resolve.alias = Object.assign(config.resolve.alias, {
      'upfluence-oss.less': path.resolve(root, '.storybook/oss/less/upfluence-oss.less'),
      'bootstrap.less': path.resolve(node_modules, 'bootstrap/less/bootstrap')
    });

    return config;
  }
}
