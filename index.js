/* global require module */
/* jshint node: true */
'use strict';

const mergeTrees = require('broccoli-merge-trees');
const Funnel = require('broccoli-funnel');

module.exports = {
  name: 'oss-components',

  isDevelopingAddon: function () {
    return true;
  },

  _registerLessDependencies(app) {
    let lessOptions = app.options.lessOptions || {};

    if (!lessOptions.paths) {
      lessOptions.paths = [];
    }

    lessOptions.paths.push(
      'node_modules/@fortawesome/fontawesome-free/less',
      'node_modules/bootstrap/less',
      'node_modules/upfluence-oss/less'
    );

    app.options.lessOptions = lessOptions;
  },

  included: function (app) {
    this._super.included.apply(this, app);

    this._registerLessDependencies(app);

    this.import('node_modules/bootstrap/dist/js/bootstrap.min.js');
    this.import('node_modules/countdown.js/lib/countdown.js');
    this.import('node_modules/ion-rangeslider/js/ion.rangeSlider.min.js');
    this.import('node_modules/ion-rangeslider/css/ion.rangeSlider.min.css');
  },

  treeForPublic() {
    let publicTree = this._super.treeForPublic.apply(this, arguments);
    let trees = [];

    if (publicTree) {
      trees.push(publicTree);
    }

    let publicAssets = ['images', 'fonts', 'upf-icons'];
    publicAssets.forEach((assetType) => {
      trees.push(
        new Funnel(`node_modules/upfluence-oss/${assetType}/`, {
          srcDir: '/',
          destDir: `assets/${assetType}`
        })
      );
    });

    trees.push(
      new Funnel('node_modules/@fortawesome/fontawesome-free/webfonts/', {
        srcDir: '/',
        include: ['**/*.woff', '**/*.woff2', '**/*.eot', '**/*.ttf'],
        destDir: 'fonts'
      })
    );

    return mergeTrees(trees);
  }
};
