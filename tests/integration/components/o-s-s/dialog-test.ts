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

  test('The dialog displays the title', async function (assert) {
    await render(
      hbs`<OSS::Dialog @title={{this.title}} @mainAction={{this.mainAction}} @secondaryAction={{this.secondaryAction}} />`
    );

    assert.dom('.oss-dialog__header').hasText(this.title);
  });

  module('For @skin', () => {
    test('When the value is undefined, skins are correct', async function (assert) {
      await render(
        hbs`<OSS::Dialog @title={{this.title}} @mainAction={{this.mainAction}} @secondaryAction={{this.secondaryAction}} />`
      );

      assert.dom('.oss-dialog__footer .upf-btn--alert').exists();
      assert.dom('.oss-dialog__header .upf-badge--alert').exists();
    });

    test('When the value is alert, skins are correct', async function (assert) {
      await render(
        hbs`<OSS::Dialog @title={{this.title}} @skin="alert" @mainAction={{this.mainAction}} @secondaryAction={{this.secondaryAction}} />`
      );

      assert.dom('.oss-dialog__footer .upf-btn--alert').exists();
      assert.dom('.oss-dialog__header .upf-badge--alert').exists();
    });

    test('When the value is error, skins are correct', async function (assert) {
      await render(
        hbs`<OSS::Dialog @title={{this.title}} @skin="error" @mainAction={{this.mainAction}} @secondaryAction={{this.secondaryAction}} />`
      );

      assert.dom('.oss-dialog__footer .upf-btn--destructive').exists();
      assert.dom('.oss-dialog__header .upf-badge--error').exists();
    });

    test('When the value is primary, skins are correct', async function (assert) {
      await render(
        hbs`<OSS::Dialog @title={{this.title}} @skin="primary" @mainAction={{this.mainAction}} @secondaryAction={{this.secondaryAction}} />`
      );

      assert.dom('.oss-dialog__footer .upf-btn--primary').exists();
      assert.dom('.oss-dialog__header .upf-badge--primary').exists();
    });
  });

  module('For @icon', () => {
    test('When the value is undefined, icon is correct', async function (assert) {
      await render(
        hbs`<OSS::Dialog @title={{this.title}} @mainAction={{this.mainAction}} @secondaryAction={{this.secondaryAction}} />`
      );

      assert.dom('.oss-dialog__header .upf-badge--alert .fa-warning').exists();
    });

    test('When the value is defined, icon is correct', async function (assert) {
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

  test('The dialog calls the main action when the main action button is clicked', async function (assert) {
    await render(
      hbs`<OSS::Dialog @title={{this.title}} @mainAction={{this.mainAction}} @secondaryAction={{this.secondaryAction}} />`
    );

    await click('.oss-dialog__footer .upf-btn--alert');
    assert.true(this.mainAction.action.calledOnce);
  });

  test('The dialog calls the secondary action when the secondary action button is clicked', async function (assert) {
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
