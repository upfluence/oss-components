import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | stop-propagation', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.nativeStopPropagation = Event.prototype.stopPropagation;
  });

  hooks.afterEach(function () {
    Event.prototype.stopPropagation = this.nativeStopPropagation;
  });

  test('it renders', async function (assert) {
    Event.prototype.stopPropagation = () => {
      assert.ok(true);
    };

    this.onClick = (arg: string, event: Event) => {
      assert.equal(arg, 'foo');
      assert.ok(event instanceof MouseEvent)
    };

    await render(hbs`<button {{on "click" (stop-propagation (fn this.onClick "foo"))}}>stop propagation</button>`);
    await click('button');
    assert.expect(3);
  });
});
