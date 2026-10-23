const path = require('node:path');
const fs = require('node:fs');

module.exports = {
  core: { builder: 'webpack5' },
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../../oss-components/src/**/*.stories.mdx',
    '../../oss-components/src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  previewHead: (head) => {
    const html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf8');
    const manifest = html.match(/<meta name="upfluence:asset-map"[^>]*>/)?.[0];
    if (!manifest) throw new Error('Build the Storybook test app before starting Storybook.');
    return `${head}\n${manifest}`;
  },
  addons: [
    '@storybook/addon-links',
    'storybook-addon-designs',
    {
      name: '@storybook/addon-essentials',
      options: { backgrounds: false }
    }
  ],
  webpackFinal: async (config) => {
    config.resolve.fallback = { ...config.resolve.fallback, fs: false, child_process: false };
    config.module.rules.push({
      test: /\.less$/i,
      use: [
        'style-loader',
        { loader: 'css-loader', options: { url: false } },
        {
          loader: 'less-loader',
          options: {
            lessOptions: {
              paths: [
                path.join(path.dirname(require.resolve('@upfluence/oss-components/package.json')), 'node_modules')
              ]
            }
          }
        }
      ]
    });
    config.resolve.alias = { ...config.resolve.alias, 'test-app': path.resolve(__dirname, '../app') };
    return config;
  }
};
