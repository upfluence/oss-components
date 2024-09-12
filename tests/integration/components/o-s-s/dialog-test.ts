import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render, setupOnerror } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';

module('Integration | Component | o-s-s/dialog', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.title = 'Dialog title';
    this.mainAction = {
      label: 'Main action',
      action: sinon.stub()
    };
    this.secondaryAction = {
      label: 'Secondary action',
      action: sinon.stub()
    };
  });

  test('It renders', async function (assert) {
    await render(
      hbs`<OSS::Dialog @title={{this.title}} @mainAction={{this.mainAction}} @secondaryAction={{this.secondaryAction}} />`
    );

    assert.dom('.oss-dialog').exists();
  });

  test('The dialog title is correctly displayed', async function (assert) {
    await render(
      hbs`<OSS::Dialog @title={{this.title}} @mainAction={{this.mainAction}} @secondaryAction={{this.secondaryAction}} />`
    );

    assert.dom('.oss-dialog__header').hasText(this.title);
  });

  module('For @skin', () => {
    test('When the value is undefined, the default skin is displayed', async function (assert) {
      await render(
        hbs`<OSS::Dialog @title={{this.title}} @mainAction={{this.mainAction}} @secondaryAction={{this.secondaryAction}} />`
      );

      assert.dom('.oss-dialog__footer .upf-btn--alert').exists();
      assert.dom('.oss-dialog__header .upf-badge--alert').exists();
    });

    test('When the value is "alert", the corresponding skin is displayed', async function (assert) {
      await render(
        hbs`<OSS::Dialog @title={{this.title}} @skin="alert" @mainAction={{this.mainAction}} @secondaryAction={{this.secondaryAction}} />`
      );

      assert.dom('.oss-dialog__footer .upf-btn--alert').exists();
      assert.dom('.oss-dialog__header .upf-badge--alert').exists();
    });

    test('When the value is "error", the corresponding skin is displayed', async function (assert) {
      await render(
        hbs`<OSS::Dialog @title={{this.title}} @skin="error" @mainAction={{this.mainAction}} @secondaryAction={{this.secondaryAction}} />`
      );

      assert.dom('.oss-dialog__footer .upf-btn--destructive').exists();
      assert.dom('.oss-dialog__header .upf-badge--error').exists();
    });

    test('When the value is "primary", the corresponding skin is displayed', async function (assert) {
      await render(
        hbs`<OSS::Dialog @title={{this.title}} @skin="primary" @mainAction={{this.mainAction}} @secondaryAction={{this.secondaryAction}} />`
      );

      assert.dom('.oss-dialog__footer .upf-btn--primary').exists();
      assert.dom('.oss-dialog__header .upf-badge--primary').exists();
    });
  });

  module('For @icon', () => {
    test('When the value is undefined, the default icon is displayed', async function (assert) {
      await render(
        hbs`<OSS::Dialog @title={{this.title}} @mainAction={{this.mainAction}} @secondaryAction={{this.secondaryAction}} />`
      );

      assert.dom('.oss-dialog__header .upf-badge--alert .fa-warning').exists();
    });

    test('When the value is defined, the corresponding icon is displayed', async function (assert) {
      await render(
        hbs`<OSS::Dialog @title={{this.title}} @icon="fa-otter" @mainAction={{this.mainAction}} @secondaryAction={{this.secondaryAction}} />`
      );

      assert.dom('.oss-dialog__header .upf-badge--alert .fa-otter').exists();
    });
  });

  test('The main action button label is displayed', async function (assert) {
    await render(
      hbs`<OSS::Dialog @title={{this.title}} @mainAction={{this.mainAction}} @secondaryAction={{this.secondaryAction}} />`
    );

    assert.dom('.oss-dialog__footer .upf-btn--alert').hasText(this.mainAction.label);
  });

  test('The secondary action button label is displayed', async function (assert) {
    await render(
      hbs`<OSS::Dialog @title={{this.title}} @mainAction={{this.mainAction}} @secondaryAction={{this.secondaryAction}} />`
    );

    assert.dom('.oss-dialog__footer .upf-btn--default').hasText(this.secondaryAction.label);
  });

  test('When clicking on the main action button, the main action is called', async function (assert) {
    await render(
      hbs`<OSS::Dialog @title={{this.title}} @mainAction={{this.mainAction}} @secondaryAction={{this.secondaryAction}} />`
    );

    await click('.oss-dialog__footer .upf-btn--alert');
    assert.true(this.mainAction.action.calledOnce);
  });

  test('When clicking on the secondary action button, the secondary action is called', async function (assert) {
    await render(
      hbs`<OSS::Dialog @title={{this.title}} @mainAction={{this.mainAction}} @secondaryAction={{this.secondaryAction}} />`
    );

    await click('.oss-dialog__footer .upf-btn--default');
    assert.true(this.secondaryAction.action.calledOnce);
  });

  module('Error management', function () {
    test('The component throws an error if the @title parameter is not passed', async function (assert) {
      setupOnerror((err: any) => {
        assert.equal(err.message, 'Assertion Failed: [component][OSS::Dialog] The title parameter is mandatory');
      });

      await render(hbs`<OSS::Dialog @mainAction={{this.mainAction}} @secondaryAction={{this.secondaryAction}} />`);
    });

    test('The component throws an error if the @mainAction parameter is not passed', async function (assert) {
      setupOnerror((err: any) => {
        assert.equal(err.message, 'Assertion Failed: [component][OSS::Dialog] The mainAction parameter is mandatory');
      });

      await render(hbs`<OSS::Dialog @title={{this.title}} @secondaryAction={{this.secondaryAction}} />`);
    });

    test('The component throws an error if the @secondaryAction parameter is not passed', async function (assert) {
      setupOnerror((err: any) => {
        assert.equal(
          err.message,
          'Assertion Failed: [component][OSS::Dialog] The secondaryAction parameter is mandatory'
        );
      });

      await render(hbs`<OSS::Dialog @title={{this.title}} @mainAction={{this.mainAction}} />`);
    });
  });
});
