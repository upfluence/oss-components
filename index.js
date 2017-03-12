/* jshint node: true */
'use strict';

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

    //
    // Upfluence OSS framework dependencies
    //
    app.import('bower_components/upfluence-oss/fonts/GT-Eesti-Display-Medium.ttf', { destDir: 'assets/fonts' });
    app.import('bower_components/upfluence-oss/fonts/GT-Eesti-Display-Medium.eot', { destDir: 'assets/fonts' });
    app.import('bower_components/upfluence-oss/fonts/GT-Eesti-Display-Medium.woff', { destDir: 'assets/fonts' });
    app.import('bower_components/upfluence-oss/images/upfluence-air-light-blue.png', { destDir: 'assets/images' });
  },
};
