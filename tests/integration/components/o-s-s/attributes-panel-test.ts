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
    this.isSaveDisabled = undefined;
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

  module('for view mode', () => {
    test('it renders the view-mode named block', async function (assert) {
      await renderComponent();
      assert.dom('.attributes-panel__container.attributes-panel__container--view').exists();
      assert.dom('.custom-view-mode').hasText('View mode');
    });

    test('it renders edition button', async function (assert) {
      await renderComponent();
      assert.dom('[data-control-name="attributes-panel-mode-switch-button"]').exists();
    });

    module('when clicking on edit button', () => {
      test('it changes to edition mode container', async function (assert) {
        await renderComponent();
        await click('[data-control-name="attributes-panel-mode-switch-button"]');

        assert.dom('.attributes-panel__container.attributes-panel__container--view').doesNotExist();
        assert.dom('.attributes-panel__container.attributes-panel__container--edition').exists();
      });

      test('it calls the @onEdit', async function (assert) {
        await renderComponent();
        await click('[data-control-name="attributes-panel-mode-switch-button"]');

        assert.true(this.onEdit.calledOnceWithExactly());
      });
    });

    async function renderComponent() {
      await render(hbs`
        <OSS::AttributesPanel @icon={{this.icon}} @title={{this.title}} @onSave={{this.onSave}} @onEdit={{this.onEdit}}>
          <:view-mode>
            <div class="custom-view-mode">View mode</div>
          </:view-mode>
        </OSS::AttributesPanel>
      `);
    }
  });

  module('for edition mode', () => {
    test('it renders the view-mode named block', async function (assert) {
      await renderComponentAndClickOnEdit();
      assert.dom('.attributes-panel__container.attributes-panel__container--edition').exists();
      assert.dom('.custom-edition-mode').hasText('Edition mode');
    });

    test("it doesn't renders edition button", async function (assert) {
      await renderComponentAndClickOnEdit();
      assert.dom('[data-control-name="attributes-panel-mode-switch-button"]').doesNotExist();
    });

    test("it doesn't renders contextual-action named block", async function (assert) {
      await renderComponentAndClickOnEdit();
      assert.dom('.custom-contextual-action').doesNotExist();
    });

    test('it renders the save and cancel button', async function (assert) {
      await renderComponentAndClickOnEdit();
      assert.dom('[data-control-name="attributes-panel-cancel-button"]').exists();
      assert.dom('[data-control-name="attributes-panel-save-button"]').exists();
    });

    module('when clicking on cancel button', () => {
      test('it switches to view mode', async function (assert) {
        await renderComponentAndClickOnEdit();

        await click('[data-control-name="attributes-panel-cancel-button"]');
        assert.dom('.attributes-panel__container.attributes-panel__container--view').exists();
        assert.dom('.attributes-panel__container.attributes-panel__container--edition').doesNotExist();
      });

      test('it calls the @onCancel', async function (assert) {
        await renderComponentAndClickOnEdit();

        await click('[data-control-name="attributes-panel-cancel-button"]');
        assert.true(this.onCancel.calledOnceWithExactly());
      });
    });

    module('when clicking on save button', () => {
      test('it switches to view mode', async function (assert) {
        this.onSave.resolves();
        await renderComponentAndClickOnEdit();

        await click('[data-control-name="attributes-panel-save-button"]');
        assert.dom('.attributes-panel__container.attributes-panel__container--view').exists();
        assert.dom('.attributes-panel__container.attributes-panel__container--edition').doesNotExist();
      });

      test("it doesn't switch to the view mode", async function (assert) {
        this.onSave.rejects();
        await renderComponentAndClickOnEdit();

        await click('[data-control-name="attributes-panel-save-button"]');
        assert.dom('.attributes-panel__container.attributes-panel__container--view').doesNotExist();
        assert.dom('.attributes-panel__container.attributes-panel__container--edition').exists();
      });

      test('it render a loading state', async function (assert) {
        this.onSave.returns(new Promise(() => {}));
        await renderComponentAndClickOnEdit();

        await click('[data-control-name="attributes-panel-save-button"]');
        assert.dom('[data-control-name="attributes-panel-save-button"] .fa-circle-notch').exists();
      });

      test('it calls the @onSave', async function (assert) {
        this.onSave.resolves();
        await renderComponentAndClickOnEdit();

        await click('[data-control-name="attributes-panel-save-button"]');
        assert.true(this.onSave.calledOnceWithExactly());
      });
    });

    module('when @isSaveDisabled', () => {
      test('is undefined, the save button is not disabled', async function (assert) {
        await renderComponentAndClickOnEdit();
        assert.dom('[data-control-name="attributes-panel-save-button"]').isNotDisabled();
      });

      test('is true, the save button is disabled', async function (assert) {
        this.isSaveDisabled = true;
        await renderComponentAndClickOnEdit();
        assert.dom('[data-control-name="attributes-panel-save-button"]').isDisabled();
      });

      test('is false, the save button is not disabled', async function (assert) {
        this.isSaveDisabled = false;
        await renderComponentAndClickOnEdit();
        assert.dom('[data-control-name="attributes-panel-save-button"]').isNotDisabled();
      });
    });

    async function renderComponentAndClickOnEdit() {
      await render(hbs`
        <OSS::AttributesPanel @icon={{this.icon}} @title={{this.title}} @onSave={{this.onSave}} @onEdit={{this.onEdit}}
                              @onCancel={{this.onCancel}} @isSaveDisabled={{this.isSaveDisabled}}>
          <:contextual-action><div class="custom-contextual-action"></div></:contextual-action>
          <:edition-mode>
            <div class="custom-edition-mode">Edition mode</div>
          </:edition-mode>
        </OSS::AttributesPanel>
      `);
      await click('[data-control-name="attributes-panel-mode-switch-button"]');
    }
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
