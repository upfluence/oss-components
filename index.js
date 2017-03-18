/* jshint node: true */
'use strict';

var mergeTrees = require('broccoli-merge-trees');
var Funnel = require('broccoli-funnel');

module.exports = {
  name: 'oss-components',

  included: function(app) {
    this._super.included(app);

    app.import('bower_components/bootstrap/dist/js/bootstrap.min.js');
    app.import('bower_components/summernote/dist/summernote.min.js');
    app.import('bower_components/summernote/dist/summernote.css');
    app.import('bower_components/summernote/dist/font/summernote.ttf', { destDir: 'assets/font' });
    app.import('bower_components/summernote/dist/font/summernote.eot', { destDir: 'assets/font' });
    app.import('bower_components/summernote/dist/font/summernote.woff', { destDir: 'assets/font' });
    app.import('bower_components/money-formatter/dist/money-formatter.min.js');
    app.import('bower_components/countdown.js/lib/countdown.js');
  },

  treeForPublic: function() {
    const publicTree = this._super.treeForPublic.apply(this, arguments);
    var trees = [];

    if (publicTree) {
      trees.push(publicTree);
    }

    const publicAssets = ['images', 'fonts', 'upf-icons'];
    publicAssets.forEach( (assetType) => {
      trees.push(
        new Funnel(
          `${this.app.bowerDirectory}/upfluence-oss/${assetType}/`,
          {
            srcDir: '/',
            destDir: `assets/${assetType}`,
          }
        )
      );
    })

    return mergeTrees(trees);
  }
};
