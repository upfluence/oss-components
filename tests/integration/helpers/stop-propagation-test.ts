import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';

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

    await render(hbs`{{! @glint-nocheck }}<button {{on "click" (stop-propagation (fn this.onClick "foo"))}}>stop propagation</button>`);
    await click('button');
    assert.expect(3);
  });
});
