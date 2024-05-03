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

  test('it renders', async function (assert) {
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

  test('The dialog displays the main action button', async function (assert) {
    await render(
      hbs`<OSS::Dialog @title={{this.title}} @mainAction={{this.mainAction}} @secondaryAction={{this.secondaryAction}} />`
    );

    assert.dom('.oss-dialog__footer .upf-btn--alert').hasText(this.mainAction.label);
  });

  test('The dialog displays the secondary action button', async function (assert) {
    await render(
      hbs`<OSS::Dialog @title={{this.title}} @mainAction={{this.mainAction}} @secondaryAction={{this.secondaryAction}} />`
    );

    assert.dom('.oss-dialog__footer .upf-btn--default').hasText(this.secondaryAction.label);
  });

  test('The dialog calls the main action when the main action button is clicked', async function (assert) {
    await render(
      hbs`<OSS::Dialog @title={{this.title}} @mainAction={{this.mainAction}} @secondaryAction={{this.secondaryAction}} />`
    );

    await click('.oss-dialog--footer .upf-btn--alert');
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
