import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, triggerEvent, waitFor, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import sinon from 'sinon';

module('Integration | Component | o-s-s/copy', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<OSS::Copy />`);

    assert.dom('.upf-btn--default').exists();
  });

  test('the tooltip has correct wording', async function (assert) {
    await render(hbs`<OSS::Copy />`);

    await triggerEvent('.upf-btn--default', 'mouseover');
    await waitFor('.tooltip');

    assert.dom('.tooltip .tooltip-inner').hasText('Copy');
  });

  module('when clicking', function (hooks) {
    hooks.beforeEach(function () {
      this.writeTextStub = sinon.stub(navigator.clipboard, 'writeText').resolves();
    });
    hooks.afterEach(function () {
      sinon.restore();
    });

    test('the tooltip has correct wording', async function (assert) {
      await render(hbs`<OSS::Copy @value="test" />`);

      await click('.upf-btn--default');
      await triggerEvent('.upf-btn--default', 'mouseover');
      await waitFor('.tooltip');

      assert.dom('.tooltip .tooltip-inner').hasText('Copied!');
    });

    test('the tooltip has correct color', async function (assert) {
      await render(hbs`<OSS::Copy @value="test" />`);

      await click('.upf-btn--default');
      await triggerEvent('.upf-btn--default', 'mouseover');
      await waitFor('.tooltip');

      assert.dom('.upf-btn--default').hasClass('copy-success');
    });

    test('the clipboard writeText method is called', async function (assert) {
      this.textForCopy = 'test';
      await render(hbs`<OSS::Copy @value={{this.textForCopy}} />`);

      await click('.upf-btn--default');
      await triggerEvent('.upf-btn--default', 'mouseover');
      await waitFor('.tooltip');

      assert.true(this.writeTextStub.calledOnceWithExactly(this.textForCopy));
    });
  });
});
