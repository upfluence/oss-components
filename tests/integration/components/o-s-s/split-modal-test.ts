import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, triggerKeyEvent, click, resetOnerror } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import sinon from 'sinon';
import setupOnerror from '@ember/test-helpers/setup-onerror';

module('Integration | Component | o-s-s/split-modal', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.closeModal = sinon.stub();
  });

  hooks.afterEach(() => {
    resetOnerror();
  });

  test('it renders', async function (assert) {
    this.set('closeModal', sinon.stub());
    await render(hbs`<OSS::SplitModal @close={{this.closeModal}} />`);
    assert.dom('.split-modal').exists();
  });

  test('The cross button at the top right of the modal closes the modal', async function (assert) {
    await render(hbs`<OSS::SplitModal @close={{this.closeModal}} />`);

    await click('.fa-times');
    assert.ok(this.closeModal.calledOnce);
  });

  test('The content named-block is properly displayed', async function (assert) {
    await render(
      hbs`
      <OSS::SplitModal @close={{this.closeModal}}>
        <:content>
          <p>This is the content</p>
        </:content>
      </OSS::SplitModal>`
    );

    assert.dom('.oss-modal-dialog--content').hasText('This is the content');
  });

  test('The footer named-block is properly displayed', async function (assert) {
    await render(
      hbs`
      <OSS::SplitModal @close={{this.closeModal}}>
        <:footer>
          footer content
        </:footer>
      </OSS::SplitModal>`
    );

    assert.dom('.oss-modal-dialog footer').hasText('footer content');
  });

  test('The preview named-block is properly displayed', async function (assert) {
    await render(
      hbs`
      <OSS::SplitModal @close={{this.closeModal}}>
        <:preview>
          preview content
        </:preview>
      </OSS::SplitModal>`
    );

    assert.dom('.split-modal__preview').hasText('preview content');
  });

  test('When the escape button is triggered, the modal is closed', async function (assert) {
    await render(hbs`<OSS::SplitModal @close={{this.closeModal}}></OSS::SplitModal>`);
    await triggerKeyEvent('.oss-modal-dialog', 'keyup', 27);
    assert.true(this.closeModal.calledOnce);
  });

  module('Error management', function () {
    test('The component throws an error if the close parameter is not passed', async function (assert) {
      setupOnerror((err: any) => {
        assert.equal(err.message, 'Assertion Failed: [component][OSS::SplitModal] The close function is mandatory');
      });

      await render(hbs`<OSS::SplitModal />`);
    });
  });
});
