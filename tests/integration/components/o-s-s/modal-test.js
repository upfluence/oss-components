import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, triggerKeyEvent } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | o-s-s/modal', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <OSS::Modal @title="Test Modal">
        <div class="modal-body">
          Foo
        </div>

        <div class="modal-footer">
          Bar
        </div>
      </OSS::Modal>
    `);

    assert.equal(this.element.querySelector('.modal-title').textContent.trim(), 'Test Modal');
  });

  module('available options', function () {
    module('centered', function () {
      test('it should set the centered class on the modal dialog', async function (assert) {
        this.modalOptions = { centered: true };
        await render(hbs`
          <OSS::Modal @title="Test Modal" @options={{this.modalOptions}}>
            <div class="modal-body">
              Foo
            </div>

            <div class="modal-footer">
              Bar
            </div>
          </OSS::Modal>
        `);

        assert.dom('.modal-dialog').hasClass('modal-dialog--centered');
      });
    });

    module('additional classes on the modal-dialog', function () {
      test('it should add the passed class on the modal dialog', async function (assert) {
        this.modalOptions = { modalClass: 'foobar' };
        await render(hbs`
          <OSS::Modal @title="Test Modal" @options={{this.modalOptions}}>
            <div class="modal-body">
              Foo
            </div>

            <div class="modal-footer">
              Bar
            </div>
          </OSS::Modal>
        `);

        assert.dom('.modal-dialog').hasClass('foobar');
      });
    });

    module('borderless header', function () {
      test('it should add the good class on the modal dialog', async function (assert) {
        this.modalOptions = { borderlessHeader: true };
        await render(hbs`
          <OSS::Modal @title="Test Modal" @options={{this.modalOptions}}>
            <div class="modal-body">
              Foo
            </div>

            <div class="modal-footer">
              Bar
            </div>
          </OSS::Modal>
        `);

        assert.dom('.modal-dialog .modal-header').hasClass('modal-header__borderless');
      });
    });

    module('no header', function () {
      test('no header container is present', async function (assert) {
        this.modalOptions = { header: false };
        await render(hbs`
          <OSS::Modal @options={{this.modalOptions}}>
            <div class="modal-body">
              Foo
            </div>

            <div class="modal-footer">
              Bar
            </div>
          </OSS::Modal>
        `);

        assert.dom('.modal-dialog .modal-header').doesNotExist();
      });
    });
  });

  module('keyboard shortcut', function () {
    test('it closes the modal on Escape key', async function (assert) {
      this.display = true;
      this.onClose = () => {
        this.set('display', false);
      };

      await render(hbs`
        {{#if this.display}}
          <OSS::Modal @onClose={{this.onClose}}>
            <div class="modal-body">
              Foo
            </div>

            <div class="modal-footer">
              Bar
            </div>
          </OSS::Modal>
        {{/if}}
      `);

      assert.dom('.modal-dialog').exists();

      await triggerKeyEvent('.modal', 'keydown', 'Escape');

      assert.dom('.modal-dialog').doesNotExist();
    });
  });
});
