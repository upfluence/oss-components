import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import sinon from 'sinon';

module('Integration | Helper | stop-propagation', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.nativeStopPropagation = Event.prototype.stopPropagation;
  });

  hooks.afterEach(function () {
    Event.prototype.stopPropagation = this.nativeStopPropagation;
  });

  test('it renders', async function (assert) {
    const stopPropagationSpy = sinon.spy();
    const onClickSpy = sinon.spy();
    Event.prototype.stopPropagation = stopPropagationSpy;
    this.onClick = onClickSpy;

    await render(hbs`<button {{on "click" (stop-propagation (fn this.onClick "foo"))}}>stop propagation</button>`);
    await click('button');

    assert.ok(stopPropagationSpy.called);
    assert.ok(onClickSpy.calledOnce);
    assert.strictEqual(onClickSpy.firstCall.args[0], 'foo');
    assert.ok(onClickSpy.firstCall.args[1] instanceof MouseEvent);
  });
});
