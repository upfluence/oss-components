'use strict';

module.exports = async function () {
  return {
    packageManager: 'pnpm',
    command: 'pnpm -w test',
    scenarios: [
      { name: 'ember-lts-3.28', npm: { devDependencies: { 'ember-source': '~3.28.8', 'ember-cli': '~3.28.6' } } },
      { name: 'ember-4.12', npm: { devDependencies: { 'ember-source': '~4.12.3', 'ember-cli': '~4.12.3' } } }
    ]
  };
};
