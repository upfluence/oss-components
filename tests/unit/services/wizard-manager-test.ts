import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | wizard-manager', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let service = this.owner.lookup('service:wizard-manager');
    assert.ok(service);
  });
});
