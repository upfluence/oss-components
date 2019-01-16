'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    snippetPaths: ['tests/dummy/app/snippets'],
    tests: false,

    lessOptions: {
      paths: [
        'bower_components/bootstrap/less',
        'bower_components/upfluence-oss/less',
      ]
    },

    fingerprint: {
      generateAssetMap: true,
      fingerprintAssetMap: true,
      enabled: true,
      extensions: [
        'json', 'js', 'css', 'png', 'jpg', 'gif', 'map', 'ico', 'svg'
      ]
    }
  });

  return app.toTree();
};
