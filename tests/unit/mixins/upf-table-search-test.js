import Ember from 'ember';
import UpfTableSearchMixin from 'upfluence-oss-components/mixins/upf-table-search';
import { module, test } from 'qunit';

module('Unit | Mixin | upf table search');

// Replace this with your real tests.
test('it works', function(assert) {
  let UpfTableSearchObject = Ember.Object.extend(UpfTableSearchMixin);
  let subject = UpfTableSearchObject.create();
  assert.ok(subject);
});
