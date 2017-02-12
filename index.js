/* jshint node: true */
'use strict';

module.exports = {
  name: 'oss-components',

  included: function(app) {
    this._super.included(app);

    app.import('bower_components/bootstrap/dist/js/bootstrap.min.js');

    //
    // Summernote component dependencies
    //
    app.import('bower_components/summernote/dist/summernote.min.js');
    app.import('bower_components/summernote/dist/summernote.css');
    app.import('bower_components/summernote/dist/font/summernote.ttf', { destDir: 'assets/font' });
    app.import('bower_components/summernote/dist/font/summernote.eot', { destDir: 'assets/font' });
    app.import('bower_components/summernote/dist/font/summernote.woff', { destDir: 'assets/font' });

    //
    // Upfluence OSS framework dependencies
    //
    app.import('bower_components/upfluence-oss/fonts/GT-Eesti-Display-Medium.ttf', { destDir: 'assets/fonts' });
    app.import('bower_components/upfluence-oss/fonts/GT-Eesti-Display-Medium.eot', { destDir: 'assets/fonts' });
    app.import('bower_components/upfluence-oss/fonts/GT-Eesti-Display-Medium.woff', { destDir: 'assets/fonts' });
    app.import('bower_components/upfluence-oss/fonts/GT-Eesti-Text-Book.ttf', { destDir: 'assets/fonts' });
    app.import('bower_components/upfluence-oss/fonts/GT-Eesti-Text-Book.eot', { destDir: 'assets/fonts' });
    app.import('bower_components/upfluence-oss/fonts/GT-Eesti-Text-Book.woff', { destDir: 'assets/fonts' });
  },
};
