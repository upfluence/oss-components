'use strict';

module.exports = async function () {
  return {
    packageManager: 'pnpm',
    command: 'ember test --silent -r dot',
    scenarios: [
      {
        name: 'ember-lts-3.28',
        npm: {
          devDependencies: {
            'ember-source': '~3.28.8'
          }
        }
      },
      {
        name: 'ember-4.12',
        npm: {
          devDependencies: {
            'ember-source': '~4.12.3',
            'ember-cli': '~4.12.3'
          }
        }
      }
    ]
  };
};
