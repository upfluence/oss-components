import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, setupOnerror } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import sinon from 'sinon';

module('Integration | Component | o-s-s/attributes-panel', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.icon = 'fa-laptop-code';
    this.title = 'Title';
    this.onSave = sinon.stub();
    this.onCancel = sinon.stub();
    this.onEdit = sinon.stub();
  });

  test('it renders', async function (assert) {
    await render(hbs`<OSS::AttributesPanel @icon={{this.icon}} @title={{this.title}} @onSave={{this.onSave}} />`);
    assert.dom('.attributes-panel').exists();
  });

  test('it renders the icon', async function (assert) {
    await render(hbs`<OSS::AttributesPanel @icon={{this.icon}} @title={{this.title}} @onSave={{this.onSave}} />`);
    assert.dom('.attributes-panel .fa-laptop-code').exists();
  });

  test('it renders the title', async function (assert) {
    await render(hbs`<OSS::AttributesPanel @icon={{this.icon}} @title={{this.title}} @onSave={{this.onSave}} />`);
    assert.dom('.attributes-panel span').hasText('Title');
  });

  test('it renders the contextual-action named block', async function (assert) {
    await render(hbs`
      <OSS::AttributesPanel @icon={{this.icon}} @title={{this.title}} @onSave={{this.onSave}}>
        <:contextual-action>
          <OSS::Button @icon="fa-plus" @square={{true}} />
        </:contextual-action>
      </OSS::AttributesPanel>
    `);
    assert.dom('.attributes-panel .fa-plus').exists();
  });

  module('for view mode', (hooks) => {
    hooks.beforeEach(async function () {
      await render(hbs`
        <OSS::AttributesPanel @icon={{this.icon}} @title={{this.title}} @onSave={{this.onSave}} @onEdit={{this.onEdit}}>
          <:view-mode>
            <div class="custom-view-mode">View mode</div>
          </:view-mode>
        </OSS::AttributesPanel>
      `);
    });

    test('it renders the view-mode named block', function (assert) {
      assert.dom('.attributes-panel__container.attributes-panel__container--view').exists();
      assert.dom('.custom-view-mode').hasText('View mode');
    });

    test('it renders edition button', function (assert) {
      assert.dom('[data-control-name="attributes-panel-mode-switch-button"]').exists();
    });

    module('when clicking on edit button', (hooks) => {
      hooks.beforeEach(async function () {
        await click('[data-control-name="attributes-panel-mode-switch-button"]');
      });

      test('it changes to edition mode container', function (assert) {
        assert.dom('.attributes-panel__container.attributes-panel__container--view').doesNotExist();
        assert.dom('.attributes-panel__container.attributes-panel__container--edition').exists();
      });

      test('it calls the @onEdit', function (assert) {
        assert.true(this.onEdit.calledOnceWithExactly());
      });
    });
  });

  module('for edition mode', (hooks) => {
    hooks.beforeEach(async function () {
      await render(hbs`
        <OSS::AttributesPanel @icon={{this.icon}} @title={{this.title}} @onSave={{this.onSave}} @onEdit={{this.onEdit}}
                              @onCancel={{this.onCancel}}>
          <:contextual-action><div class="custom-contextual-action"></div></:contextual-action>
          <:edition-mode>
            <div class="custom-edition-mode">Edition mode</div>
          </:edition-mode>
        </OSS::AttributesPanel>
      `);
      await click('[data-control-name="attributes-panel-mode-switch-button"]');
    });

    test('it renders the view-mode named block', function (assert) {
      assert.dom('.attributes-panel__container.attributes-panel__container--edition').exists();
      assert.dom('.custom-edition-mode').hasText('Edition mode');
    });

    test("it doesn't renders edition button", function (assert) {
      assert.dom('[data-control-name="attributes-panel-mode-switch-button"]').doesNotExist();
    });

    test("it doesn't renders contextual-action named block", function (assert) {
      assert.dom('.custom-contextual-action').doesNotExist();
    });

    test('it renders the save and cancel button', function (assert) {
      assert.dom('[data-control-name="attributes-panel-cancel-button"]').exists();
      assert.dom('[data-control-name="attributes-panel-save-button"]').exists();
    });

    module('when clicking on cancel button', (hooks) => {
      hooks.beforeEach(async function () {
        await click('[data-control-name="attributes-panel-cancel-button"]');
      });

      test('it switches to view mode', function (assert) {
        assert.dom('.attributes-panel__container.attributes-panel__container--view').exists();
        assert.dom('.attributes-panel__container.attributes-panel__container--edition').doesNotExist();
      });

      test('it calls the @onCancel', function (assert) {
        assert.true(this.onCancel.calledOnceWithExactly());
      });
    });

    module('when clicking on save button', () => {
      test('it switches to view mode', async function (assert) {
        this.onSave.resolves();
        await click('[data-control-name="attributes-panel-save-button"]');
        assert.dom('.attributes-panel__container.attributes-panel__container--view').exists();
        assert.dom('.attributes-panel__container.attributes-panel__container--edition').doesNotExist();
      });

      test("it doesn't switch to the view mode", async function (assert) {
        this.onSave.rejects();
        await click('[data-control-name="attributes-panel-save-button"]');
        assert.dom('.attributes-panel__container.attributes-panel__container--view').doesNotExist();
        assert.dom('.attributes-panel__container.attributes-panel__container--edition').exists();
      });

      test('it render a loading state', async function (assert) {
        this.onSave.returns(new Promise(() => {}));
        await click('[data-control-name="attributes-panel-save-button"]');
        assert.dom('[data-control-name="attributes-panel-save-button"] .fa-circle-notch').exists();
      });

      test('it calls the @onSave', async function (assert) {
        this.onSave.resolves();
        await click('[data-control-name="attributes-panel-save-button"]');
        assert.true(this.onSave.calledOnceWithExactly());
      });
    });
  });

  test('it throws an error if @title is missing', async function (assert) {
    setupOnerror((error: Error) => {
      assert.equal(
        error.message,
        'Assertion Failed: [component][OSS::AttributesPanel] The @title parameter is mandatory'
      );
    });
    await render(hbs`<OSS::AttributesPanel @onSave={{this.onSave}} />`);
  });

  test('it throws an error if @onSave is missing', async function (assert) {
    setupOnerror((error: Error) => {
      assert.equal(
        error.message,
        'Assertion Failed: [component][OSS::AttributesPanel] The @onSave parameter is mandatory'
      );
    });
    await render(hbs`<OSS::AttributesPanel @title={{this.title}} />`);
  });
});
