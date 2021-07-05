'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    lessoptions: {
      paths: [
        'node_modules/upfluence-oss-components/app/styles',
      ]
    }
  });

  return app.toTree();
};
