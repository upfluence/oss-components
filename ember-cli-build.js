/*jshint node:true*/
/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    snippetPaths: ['tests/dummy/app/snippets'],
    lessOptions: {
      paths: [
        'bower_components/bootstrap/less',
        'bower_components/upfluence-oss/less',
      ]
    }
  });

  app.import('bower_components/upfluence-oss/fonts/GT-Eesti-Display-Medium.ttf', { destDir: 'assets/fonts' });
  app.import('bower_components/upfluence-oss/fonts/GT-Eesti-Display-Medium.eot', { destDir: 'assets/fonts' });
  app.import('bower_components/upfluence-oss/fonts/GT-Eesti-Display-Medium.woff', { destDir: 'assets/fonts' });
  app.import('bower_components/upfluence-oss/fonts/GT-Eesti-Text-Book.ttf', { destDir: 'assets/fonts' });
  app.import('bower_components/upfluence-oss/fonts/GT-Eesti-Text-Book.eot', { destDir: 'assets/fonts' });
  app.import('bower_components/upfluence-oss/fonts/GT-Eesti-Text-Book.woff', { destDir: 'assets/fonts' });

  return app.toTree();
};
