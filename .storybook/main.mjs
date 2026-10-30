import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '../');
const addon_path = path.join(root, 'addon');
const dummy_path = path.join(root, 'tests/dummy/app');

export default {
  framework: '@storybook/ember',

  staticDirs: ['../dist'],

  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../addon/components/**/*.stories.@(js|jsx|ts|tsx)',
    '../addon/modifiers/**/*.mdx',
    '../addon/modifiers/**/*.stories.@(js|jsx|ts|tsx)',
    '../addon/helpers/**/*.mdx',
    '../addon/helpers/**/*.stories.@(js|jsx|ts|tsx)',
    '../addon-test-support/**/*.mdx',
    '../app/styles/**/*.mdx'
  ],

  addons: ['@storybook/addon-links', '@storybook/addon-docs', '@storybook/addon-designs'],

  babel: async (config) => ({
    ...config,
    presets: [...(config.presets || []), ['@babel/preset-typescript', { allowDeclareFields: true }]],
    plugins: [
      ...(config.plugins || []),
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-transform-class-properties', { loose: true }]
    ]
  }),

  webpackFinal: async (config) => {
    config.resolve.fallback = { ...config.resolve.fallback, fs: false, child_process: false };

    config.module.rules.push({
      test: /\.less$/i,
      use: ['style-loader', { loader: 'css-loader', options: { url: false } }, 'less-loader']
    });

    config.resolve.alias = Object.assign(config.resolve.alias || {}, {
      '@upfluence/oss-components': path.resolve(addon_path),
      dummy: path.resolve(dummy_path)
    });

    return config;
  }
};
