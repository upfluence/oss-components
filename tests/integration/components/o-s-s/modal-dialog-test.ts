import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, setupOnerror, triggerKeyEvent } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import sinon from 'sinon';
import click from '@ember/test-helpers/dom/click';

module('Integration | Component | o-s-s/modal-dialog', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.closeModal = sinon.stub();
  });

  test('it renders', async function (assert) {
    await render(
      hbs`<OSS::ModalDialog @title="Example modal" @subtitle="subtitle" @close={{this.closeModal}} @size="md" />`
    );
    assert.dom('.oss-modal-dialog').exists();
  });

  test('The component throws an error if the title parameter is not passed', async function (assert) {
    setupOnerror((err: any) => {
      assert.equal(err.message, '[component][OSS::ModalDialog] The title parameter is mandatory');
    });

    await render(hbs`<OSS::ModalDialog @close={{this.closeModal}} />`);
  });

  test('The component throws an error if the close parameter is not passed', async function (assert) {
    setupOnerror((err: any) => {
      assert.equal(err.message, '[component][OSS::ModalDialog] The close function is mandatory');
    });

    await render(hbs`<OSS::ModalDialog @title="Test" />`);
  });

  test('On escape button the modal is closed', async function (assert) {
    await render(
      hbs`<OSS::ModalDialog @title="Example modal" @subtitle="subtitle" @close={{this.closeModal}} @size="md" />`
    );

    await triggerKeyEvent('.oss-modal-dialog', 'keyup', 27);
    assert.ok(this.closeModal.calledOnce);
  });

  test('The cross button at the top right of the modal closes the modal', async function (assert) {
    await render(
      hbs`<OSS::ModalDialog @title="Example modal" @subtitle="subtitle" @close={{this.closeModal}} @size="md" />`
    );

    await click('.fa-close');
    assert.ok(this.closeModal.calledOnce);
  });

  test('The title parameter is properly displayed', async function (assert) {
    await render(
      hbs`<OSS::ModalDialog @title="Example modal" @subtitle="subtitle" @close={{this.closeModal}} @size="md" />`
    );

    assert.dom('.oss-modal-dialog .title').hasText('Example modal');
  });

  test('The subtitle parameter is properly displayed', async function (assert) {
    await render(
      hbs`<OSS::ModalDialog @title="Example modal" @subtitle="Subtitle" @close={{this.closeModal}} @size="md" />`
    );

    assert.dom('.oss-modal-dialog .subtitle').hasText('Subtitle');
  });

  test('The content named-block is properly displayed', async function (assert) {
    await render(
      hbs`
      <OSS::ModalDialog @title="Example modal" @subtitle="subtitle" @close={{this.closeModal}} @size="md">
        <:content>
          <p>This is the content</p>
        </:content>
      </OSS::ModalDialog>`
    );

    assert.dom('.oss-modal-dialog--content').hasText('This is the content');
  });

  test('The footer named-block is properly displayed', async function (assert) {
    await render(
      hbs`
      <OSS::ModalDialog @title="Example modal" @subtitle="subtitle" @close={{this.closeModal}} @size="md">
        <:footer>
          footer content
        </:footer>
      </OSS::ModalDialog>`
    );

    assert.dom('.oss-modal-dialog footer').hasText('footer content');
  });
});
