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
    app.import('bower_components/upfluence-oss/images/upfluence-fire-white.png', { destDir: 'assets/images' });
    app.import('bower_components/upfluence-oss/images/air-1-white.png', { destDir: 'assets/images' });
    app.import('bower_components/upfluence-oss/images/earth-1-white.png', { destDir: 'assets/images' });
    app.import('bower_components/upfluence-oss/images/earth-3-white.png', { destDir: 'assets/images' });
    app.import('bower_components/upfluence-oss/images/fire-2-white.png', { destDir: 'assets/images' });
    app.import('bower_components/upfluence-oss/images/spirit-2-white.png', { destDir: 'assets/images' });
    app.import('bower_components/upfluence-oss/images/spirit-3-white.png', { destDir: 'assets/images' });
    app.import('bower_components/upfluence-oss/images/water-1-white.png', { destDir: 'assets/images' });
    app.import('bower_components/upfluence-oss/images/water-2-white.png', { destDir: 'assets/images' });
    app.import('bower_components/upfluence-oss/images/water-3-white.png', { destDir: 'assets/images' });
    app.import('bower_components/upfluence-oss/upf-icons/reply.svg', { destDir: 'assets/upf-icons' });
    app.import('bower_components/upfluence-oss/upf-icons/envelope.svg', { destDir: 'assets/upf-icons' });
    app.import('bower_components/upfluence-oss/upf-icons/envelope-open.svg', { destDir: 'assets/upf-icons' });
    app.import('bower_components/upfluence-oss/upf-icons/paper-plane.svg', { destDir: 'assets/upf-icons' });
    app.import('bower_components/upfluence-oss/upf-icons/clock.svg', { destDir: 'assets/upf-icons' });
    app.import('bower_components/upfluence-oss/upf-icons/exclamation-mark.svg', { destDir: 'assets/upf-icons' });
  },
};
