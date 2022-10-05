/* jshint node: true */
'use strict';

const mergeTrees = require('broccoli-merge-trees');
const Funnel = require('broccoli-funnel');
const fs = require('fs');
const cacheKeyForTree = require('calculate-cache-key-for-tree');
const { name, version } = require('./package');

let faPath = 'node_modules/@fortawesome/fontawesome-pro';

if (!fs.existsSync(faPath)) {
  faPath = 'node_modules/@fortawesome/fontawesome-free';
}

module.exports = {
  name,
  version,

  isDevelopingAddon: function () {
    return true;
  },

  _registerLessDependencies(app) {
    let lessOptions = app.options.lessOptions || {};

    if (!lessOptions.paths) {
      lessOptions.paths = [];
    }

    lessOptions.paths.push('node_modules/bootstrap/less');

    app.options.lessOptions = lessOptions;
  },

  included: function (app) {
    this._super.included.apply(this, app);

    this._registerLessDependencies(app);

    this.import('node_modules/bootstrap/dist/js/bootstrap.min.js');
    this.import('node_modules/countdown.js/lib/countdown.js');
    this.import('node_modules/ion-rangeslider/js/ion.rangeSlider.min.js');
    this.import('node_modules/ion-rangeslider/css/ion.rangeSlider.min.css');

    this.import(`${faPath}/css/all.css`);
    this.import(`${faPath}/css/v4-shims.min.css`);
  },

  treeForPublic() {
    console.log('=====>', 'treeForPublic oss-components')
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
