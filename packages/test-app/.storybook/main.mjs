import fs from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as remarkGfmModule from 'remark-gfm';

// Storybook loads this file through esbuild-register, so the default export can arrive wrapped once or twice
const remarkGfm = remarkGfmModule.default?.default ?? remarkGfmModule.default ?? remarkGfmModule;

const require = createRequire(import.meta.url);
const dirname = path.dirname(fileURLToPath(import.meta.url));
const ossRoot = path.dirname(require.resolve('@upfluence/oss-components/package.json'));

export default {
  framework: '@storybook/ember',

  staticDirs: ['../dist'],

  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../../oss-components/src/**/*.stories.@(js|jsx|ts|tsx)'
  ],

  previewHead: (head) => {
    const html = fs.readFileSync(path.resolve(dirname, '../dist/index.html'), 'utf8');
    const manifest = html.match(/<meta name="upfluence:asset-map"[^>]*>/)?.[0];
    if (!manifest) throw new Error('Build the Storybook test app before starting Storybook.');
    return `${head}\n${manifest}`;
  },

  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-docs',
      options: { mdxPluginOptions: { mdxCompileOptions: { remarkPlugins: [remarkGfm] } } }
    },
    '@storybook/addon-designs'
  ],

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
      use: [
        'style-loader',
        { loader: 'css-loader', options: { url: false } },
        { loader: 'less-loader', options: { lessOptions: { paths: [path.join(ossRoot, 'node_modules')] } } }
      ]
    });

    config.resolve.alias = { ...config.resolve.alias, 'test-app': path.resolve(dirname, '../app') };

    return config;
  }
};
