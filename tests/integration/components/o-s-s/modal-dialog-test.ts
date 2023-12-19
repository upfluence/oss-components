import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, setupOnerror, triggerKeyEvent, waitFor } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import sinon from 'sinon';
import click from '@ember/test-helpers/dom/click';
import EmberObject from '@ember/object';

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

    await click('.fa-times');
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

  test('The illustration named-block is properly displayed', async function (assert) {
    await render(
      hbs`
      <OSS::ModalDialog @title="Example modal" @subtitle="subtitle" @close={{this.closeModal}} @size="md">
        <:illustration>
          <p class="illustration-container">Illustration</p>
        </:illustration>
      </OSS::ModalDialog>`
    );

    assert.dom('.illustration-container').exists();
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

  module('Queue management - if the @enqueue param is truthy', () => {
    module('When rendering two modals', () => {
      test('The second modal is not displayed', async function (assert) {
        await render(
          hbs`<OSS::ModalDialog @title="MODAL A" @subtitle="subtitle" @close={{this.closeModal}} @enqueue={{true}}
                              data-control-name="modal-a" />
              <OSS::ModalDialog @title="MODAL B" @subtitle="subtitle" @close={{this.closeModal}} @enqueue={{true}}
                              data-control-name="modal-b" />`
        );
        assert.dom('[data-control-name="modal-a"]').exists();
        assert.dom('[data-control-name="modal-b"]').doesNotExist();
      });

      test('When Modal A is closed, Modal B is displayed', async function (assert) {
        this.helper = EmberObject.create({
          displayModalA: true
        });
        await render(
          hbs`
          {{#if this.helper.displayModalA}}
            <OSS::ModalDialog @title="MODAL A" @subtitle="subtitle" @close={{this.closeModal}} @enqueue={{true}}
                              data-control-name="modal-a" />
          {{/if}}
          <OSS::ModalDialog @title="MODAL B" @subtitle="subtitle" @close={{this.closeModal}} @enqueue={{true}}
                            data-control-name="modal-b" />`
        );
        assert.dom('[data-control-name="modal-a"]').exists();
        assert.dom('[data-control-name="modal-b"]').doesNotExist();
        await click('.fa-times');
        assert.ok(this.closeModal.calledOnce);
        this.helper.set('displayModalA', false);
        await waitFor('[data-control-name="modal-b"]', { timeout: 1000 });
        assert.dom('[data-control-name="modal-a"]').doesNotExist();
        assert.dom('[data-control-name="modal-b"]').exists();
      });
    });

    module('When rendering multiple modals', () => {
      test('Only the first modal is displayed', async function (assert) {
        await render(
          hbs`<OSS::ModalDialog @title="MODAL C" @subtitle="subtitle" @close={{this.closeModal}} @enqueue={{true}}
                              data-control-name="modal-c" />
              <OSS::ModalDialog @title="MODAL B" @subtitle="subtitle" @close={{this.closeModal}} @enqueue={{true}}
                                data-control-name="modal-b" />
              <OSS::ModalDialog @title="MODAL A" @subtitle="subtitle" @close={{this.closeModal}} @enqueue={{true}}
                                data-control-name="modal-a" />`
        );
        assert.dom('[data-control-name="modal-c"]').exists();
        assert.dom('[data-control-name="modal-a"]').doesNotExist();
        assert.dom('[data-control-name="modal-b"]').doesNotExist();
      });

      test('Open & close modal flow check', async function (assert) {
        this.helper = EmberObject.create({
          displayModalA: true,
          displayModalB: true,
          displayModalC: true
        });
        await render(
          hbs`
            {{#if this.helper.displayModalA}}
              <OSS::ModalDialog @title="MODAL A" @subtitle="subtitle" @close={{this.closeModal}} @enqueue={{true}}
                                data-control-name="modal-a" />
            {{/if}}
            {{#if this.helper.displayModalB}}
              <OSS::ModalDialog @title="MODAL B" @subtitle="subtitle" @close={{this.closeModal}} @enqueue={{true}}
                                data-control-name="modal-b" />
            {{/if}}
            {{#if this.helper.displayModalC}}
              <OSS::ModalDialog @title="MODAL C" @subtitle="subtitle" @close={{this.closeModal}} @enqueue={{true}}
                                data-control-name="modal-c" />
            {{/if}}
          `
        );
        assert.dom('[data-control-name="modal-a"]').exists();
        assert.dom('[data-control-name="modal-b"]').doesNotExist();
        assert.dom('[data-control-name="modal-c"]').doesNotExist();

        await click('.fa-times');
        assert.ok(this.closeModal.calledOnce);
        this.helper.set('displayModalA', false);
        assert.false(this.helper.displayModalA);

        await waitFor('[data-control-name="modal-b"]', { timeout: 1000 });
        assert.dom('[data-control-name="modal-a"]').doesNotExist();
        assert.dom('[data-control-name="modal-b"]').exists();
        assert.dom('[data-control-name="modal-c"]').doesNotExist();

        await click('.fa-times');
        assert.ok(this.closeModal.calledTwice);
        this.helper.set('displayModalB', false);
        assert.false(this.helper.displayModalB);

        await waitFor('[data-control-name="modal-c"]', { timeout: 1000 });
        assert.dom('[data-control-name="modal-a"]').doesNotExist();
        assert.dom('[data-control-name="modal-b"]').doesNotExist();
        assert.dom('[data-control-name="modal-c"]').exists();
      });
    });
  });

  test('If the enqueue parameter is falsy, rendering multiple modals opens all of them', async function (assert) {
    await render(
      hbs`<OSS::ModalDialog @title="MODAL A" @subtitle="subtitle" @close={{this.closeModal}}
                            data-control-name="modal-a" />
          <OSS::ModalDialog @title="MODAL B" @subtitle="subtitle" @close={{this.closeModal}}
                            data-control-name="modal-b" />`
    );
    assert.dom('[data-control-name="modal-a"]').exists();
    assert.dom('[data-control-name="modal-b"]').exists();
  });

  module('Error management', function () {
    test('The component throws an error if the title parameter is not passed', async function (assert) {
      setupOnerror((err: any) => {
        assert.equal(err.message, 'Assertion Failed: [component][OSS::ModalDialog] The title parameter is mandatory');
      });

      await render(hbs`<OSS::ModalDialog @close={{this.closeModal}}></OSS::ModalDialog>`);
    });

    test('The component throws an error if the close parameter is not passed', async function (assert) {
      setupOnerror((err: any) => {
        assert.equal(err.message, 'Assertion Failed: [component][OSS::ModalDialog] The close function is mandatory');
      });

      await render(hbs`<OSS::ModalDialog @title="Test"></OSS::ModalDialog>`);
    });
  });
});
