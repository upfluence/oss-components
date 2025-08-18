/* jshint node: true */
'use strict';

const mergeTrees = require('broccoli-merge-trees');
const Funnel = require('broccoli-funnel');
const cacheKeyForTree = require('calculate-cache-key-for-tree');
const path = require('path');
const { name, version } = require('./package');

const faPath = path.dirname(require.resolve('@fortawesome/fontawesome-pro/package.json'));

module.exports = {
  name,
  version,

  isDevelopingAddon: function () {
    return true;
  },

  options: {
    autoImport: {
      exclude: ['@storybook/addon-actions']
    }
  },

  included(parent) {
    this._super.included.apply(this, arguments);

    if (parent.project.pkg.name === name) {
      this.options.babel.plugins.push(...require('ember-cli-code-coverage').buildBabelPlugin());
    }
  },

  treeForPublic() {
    const publicTree = this._super.treeForPublic.apply(this, arguments);
    const trees = [];

    if (publicTree) {
      trees.push(publicTree);
    }

    const publicAssets = ['images', 'fonts', 'icons'];
    const srcAssetsPath =
      this.parent.pkg['name'] === '@upfluence/oss-components' ? '' : 'node_modules/@upfluence/oss-components/';
    publicAssets.forEach((assetType) => {
      trees.push(
        new Funnel(`${srcAssetsPath}public/assets/${assetType}`, {
          srcDir: '/',
          destDir: `assets/${assetType}`
        })
      );
    });

    trees.push(
      new Funnel(`${faPath}/webfonts/`, {
        srcDir: '/',
        include: [
          '**/fa-brand-*.woff2',
          '**/fa-duotone-*.woff2',
          '**/fa-light-*.woff2',
          '**/fa-regular-*.woff2',
          '**/fa-solid-*.woff2'
        ],
        destDir: '/webfonts'
      })
    );

    return mergeTrees(trees);
  },

  cacheKeyForTree(treeType) {
    return cacheKeyForTree(treeType, this, this.pkg);
  }
};
