import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import * as remarkGfmModule from 'remark-gfm';

const require = createRequire(import.meta.url);

// Storybook loads this file through esbuild-register, so the default export can arrive wrapped once or twice
const remarkGfm = remarkGfmModule.default?.default ?? remarkGfmModule.default ?? remarkGfmModule;

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

  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-docs',
      options: { mdxPluginOptions: { mdxCompileOptions: { remarkPlugins: [remarkGfm] } } }
    },
    '@storybook/addon-designs'
  ],

  // Ember 7 has no `Ember` global nor AMD bundle: templates are compiled to template factories and @ember/* resolves to ember-source's own modules
  babel: async (config) => ({
    ...config,
    presets: [...(config.presets || []), ['@babel/preset-typescript', { allowDeclareFields: true }]],
    plugins: [
      ...(config.plugins || []).filter(
        (plugin) => !/babel-plugin-(htmlbars-inline-precompile|ember-modules-api-polyfill)/.test([plugin].flat()[0])
      ),
      [
        require.resolve('babel-plugin-ember-template-compilation'),
        {
          compiler: require('ember-source/ember-template-compiler/index.js'),
          enableLegacyModules: [
            'ember-cli-htmlbars',
            'ember-cli-htmlbars-inline-precompile',
            'htmlbars-inline-precompile'
          ]
        }
      ],
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

    config.externals = [
      ...[config.externals || []].flat(),
      ({ request }, callback) =>
        /^(@ember\/|@glimmer\/tracking$|ember-source\/)/.test(request)
          ? callback(null, `var window.require(${JSON.stringify(request)})`)
          : callback()
    ];

    config.resolve.alias = Object.assign(config.resolve.alias || {}, {
      '@upfluence/oss-components': path.resolve(addon_path),
      dummy: path.resolve(dummy_path)
    });

    return config;
  }
};
