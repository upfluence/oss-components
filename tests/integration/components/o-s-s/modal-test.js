import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
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
        await render(hbs`
          <OSS::Modal @title="Test Modal" @options={{hash centered=true}}>
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
        await render(hbs`
          <OSS::Modal @title="Test Modal" @options={{hash modalClass="foobar"}}>
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
        await render(hbs`
          <OSS::Modal @title="Test Modal" @options={{hash borderlessHeader=true}}>
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
  });
});
