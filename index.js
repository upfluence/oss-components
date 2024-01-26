/* jshint node: true */
'use strict';

const mergeTrees = require('broccoli-merge-trees');
const Funnel = require('broccoli-funnel');
const cacheKeyForTree = require('calculate-cache-key-for-tree');
const path = require('path');
const { name, version } = require('./package');

const faPath = path.dirname(require.resolve('@fortawesome/fontawesome-pro/package.json'));
const bootstrapPath = path.dirname(require.resolve('bootstrap/package.json'));
const rangesliderPath = path.dirname(require.resolve('ion-rangeslider/package.json'));

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

  included() {
    this._super.included.apply(this, arguments);

    this.import(`${bootstrapPath}/dist/js/bootstrap.min.js`);
    this.import(`${rangesliderPath}/js/ion.rangeSlider.min.js`);
    this.import(`${rangesliderPath}/css/ion.rangeSlider.min.css`);
  },

  treeForPublic() {
    const publicTree = this._super.treeForPublic.apply(this, arguments);
    const trees = [];

    if (publicTree) {
      trees.push(publicTree);
    }

    const publicAssets = ['images', 'fonts', 'upf-icons'];
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
        include: ['**/*.woff', '**/*.woff2', '**/*.eot', '**/*.ttf', '**/*.svg'],
        destDir: '/webfonts'
      })
    );

    return mergeTrees(trees);
  },

  cacheKeyForTree(treeType) {
    return cacheKeyForTree(treeType, this, this.pkg);
  }
};
