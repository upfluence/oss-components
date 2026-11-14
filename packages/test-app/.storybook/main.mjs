import { locateEmbroiderWorkingDir } from '@embroider/core';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import remarkGfm from 'remark-gfm';

import { assetMapMeta } from '../vite-asset-map.mjs';

const appRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const appHeadContent = [
  assetMapMeta(),
  '<link rel="stylesheet" href="/@embroider/virtual/vendor.css" />',
  '<link rel="stylesheet" href="https://uweb.s3.us-east-1.amazonaws.com/fa-current/css/all.min.css" />',
  '<link rel="stylesheet" href="/app/styles/app.less" />',
  '<script src="/@embroider/virtual/vendor.js"></script>',
  '</head>'
].join('');

// ember-storybook drops Embroider's content-for plugin, so the preview gets the app's head here: the config the app
// reads at boot, the asset map, and Embroider's vendor and app assets. As a `pre` hook, `vite build` bundles them.
function appHead() {
  return {
    name: 'test-app:head',
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        const contentFor = JSON.parse(
          fs.readFileSync(path.join(locateEmbroiderWorkingDir(appRoot), 'content-for.json'), 'utf8')
        );
        return html.replace('</head>', `${contentFor['/index.html'].head}${appHeadContent}`);
      }
    }
  };
}

// The stories colocated in the addon import `storybook/test`. Under Embroider an addon may only import its dependencies
// and peerDependencies, so the import is resolved here, from the test-app. A `resolve.alias` would cover the build but
// not Vite's dependency scan.
function storybookTestFromTestApp() {
  const file = fileURLToPath(import.meta.resolve('storybook/test'));

  return {
    name: 'test-app:storybook-test',
    enforce: 'pre',
    resolveId: (source) => (source === 'storybook/test' ? file : null)
  };
}

export default {
  framework: 'ember-storybook',

  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../../oss-components/src/**/*.stories.@(js|jsx|ts|tsx)'
  ],

  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-docs',
      options: { mdxPluginOptions: { mdxCompileOptions: { remarkPlugins: [remarkGfm] } } }
    },
    '@storybook/addon-designs'
  ],

  viteFinal: async (config) => {
    const { mergeConfig } = await import('vite');
    const resolveStorybookTest = storybookTestFromTestApp();

    return mergeConfig(
      { ...config, plugins: [resolveStorybookTest, ...config.plugins] },
      { optimizeDeps: { rolldownOptions: { plugins: [resolveStorybookTest] } }, plugins: [appHead()] }
    );
  }
};
