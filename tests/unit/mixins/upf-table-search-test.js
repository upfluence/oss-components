import EmberObject from '@ember/object';
import UpfTableSearchMixin from 'upfluence-oss-components/mixins/upf-table-search';
import { module, test } from 'qunit';

module('Unit | Mixin | upf table search', function() {
  // Replace this with your real tests.
  test('it works', function(assert) {
    let UpfTableSearchObject = EmberObject.extend(UpfTableSearchMixin);
    let subject = UpfTableSearchObject.create();
    assert.ok(subject);
  });
});
