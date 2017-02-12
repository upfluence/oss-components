/* jshint node: true */
'use strict';

module.exports = {
  name: 'oss-components',

  included: function(app) {
    this._super.included(app);

    app.import('bower_components/upfluence-oss/fonts/GT-Eesti-Display-Medium.ttf', { destDir: 'assets/fonts' });
    app.import('bower_components/upfluence-oss/fonts/GT-Eesti-Display-Medium.eot', { destDir: 'assets/fonts' });
    app.import('bower_components/upfluence-oss/fonts/GT-Eesti-Display-Medium.woff', { destDir: 'assets/fonts' });
    app.import('bower_components/upfluence-oss/fonts/GT-Eesti-Text-Book.ttf', { destDir: 'assets/fonts' });
    app.import('bower_components/upfluence-oss/fonts/GT-Eesti-Text-Book.eot', { destDir: 'assets/fonts' });
    app.import('bower_components/upfluence-oss/fonts/GT-Eesti-Text-Book.woff', { destDir: 'assets/fonts' });
  },
};
