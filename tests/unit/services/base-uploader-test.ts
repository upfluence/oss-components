import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | base-uploader', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let service = this.owner.lookup('service:base-uploader');
    assert.ok(service);
  });
});

