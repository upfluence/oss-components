'use strict';

const path = require('node:path');
const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');
const { injectAssetMap } = require('@upfluence/oss-components/build/classic-asset-map.cjs');
const ossRoot = path.dirname(require.resolve('@upfluence/oss-components/package.json'));
const fontAwesomeRoot = path.dirname(require.resolve('@fortawesome/fontawesome-pro/package.json'));

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    fingerprint: {
      ...(process.env.STORYBOOK ? { enabled: false } : {}),
      generateAssetMap: true,
      assetMapPath: 'assets/upfluence-asset-map.json',
      extensions: ['js', 'css', 'png', 'jpg', 'gif', 'svg'],
      prepend: process.env.CDN_URL || ''
    },
    lessOptions: { paths: [path.join(ossRoot, 'node_modules'), 'node_modules'] },
    autoImport: { watchDependencies: ['@upfluence/oss-components'] },
    'ember-cli-babel': { enableTypeScriptTransform: true },
    trees: {
      public: mergeTrees([
        'public',
        new Funnel(path.join(fontAwesomeRoot, 'webfonts'), {
          include: ['**/*.woff2'],
          destDir: 'webfonts'
        })
      ])
    }
  });

  return injectAssetMap(app.toTree(), {
    fingerprint: app.options.fingerprint,
    rootURL: app.project.config(app.env).rootURL
  });
};
