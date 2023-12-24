import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import sinon from 'sinon';

module('Integration | Component | o-s-s/copy', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`{{! @glint-nocheck }}<OSS::Copy />`);

    assert.dom('.upf-btn--default').exists();
  });

  test('it renders when inline value is specified', async function (assert) {
    await render(hbs`{{! @glint-nocheck }}<OSS::Copy @inline={{true}} />`);
    assert.dom('.oss-copy--inline').exists();
  });

  test('the tooltip has correct wording', async function (assert) {
    await render(hbs`{{! @glint-nocheck }}<OSS::Copy />`);

    await assert.tooltip('.upf-btn--default').hasTitle('Copy');
  });

  module('when clicking', function (hooks) {
    hooks.beforeEach(function () {
      this.toastService = this.owner.lookup('service:toast');
    });

    hooks.afterEach(function () {
      sinon.restore();
    });

    test('the info toast is rendered', async function (assert) {
      sinon.stub(navigator.clipboard, 'writeText').resolves();
      const toastInfoStub = sinon.stub(this.toastService, 'info').resolves();

      await render(hbs`<OSS::Copy @value="test" />`);
      await click('.upf-btn--default');

      assert.true(toastInfoStub.calledOnceWithExactly('Successfully copied to your clipboard.', 'Copied to clipboard'));
    });

    test('the error toast is rendered', async function (assert) {
      sinon.stub(navigator.clipboard, 'writeText').rejects();
      const toastErrorStub = sinon.stub(this.toastService, 'error').resolves();

      await render(hbs`<OSS::Copy @value="test" />`);
      await click('.upf-btn--default');

      assert.true(toastErrorStub.calledOnceWithExactly('Failed to copy to your clipboard. Please try again.', 'Error'));
    });

    test('the clipboard writeText method is called', async function (assert) {
      const writeTextStub = sinon.stub(navigator.clipboard, 'writeText').resolves();
      sinon.stub(this.toastService, 'info').resolves();
      this.textForCopy = 'test';

      await render(hbs`{{! @glint-nocheck }}<OSS::Copy @value={{this.textForCopy}} />`);
      await click('.upf-btn--default');

      assert.true(writeTextStub.calledOnceWithExactly(this.textForCopy));
    });
  });
});
