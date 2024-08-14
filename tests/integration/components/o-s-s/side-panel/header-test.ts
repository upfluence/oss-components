import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import sinon from 'sinon';

module('Integration | Component | o-s-s/side-panel/header', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.onClose = sinon.stub();
  });

  test('it renders', async function (assert) {
    await render(hbs`<OSS::SidePanel::Header @title="Sidepanel header" @onClose={{this.onClose}} />`);
    assert.dom('.oss-side-panel__header__content').exists();
  });

  test('Clicking on the close button closes the side panel', async function (assert) {
    await render(hbs`<OSS::SidePanel::Header @title="Sidepanel header" @onClose={{this.onClose}} />`);
    assert.dom('.fa-xmark').exists();
    await click('.fa-xmark');
    assert.ok(this.onClose.calledOnce, 'Clicked on the close button so the side panel closes.');
  });

  module('Return arrow button', function () {
    hooks.beforeEach(function () {
      this.onReturn = sinon.stub();
    });

    test('When @onReturn is truthy, it displays the return arrow button', async function (assert) {
      await render(
        hbs`<OSS::SidePanel::Header @title="Sidepanel header" @onClose={{this.onClose}} @onReturn={{this.onReturn}} />`
      );
      assert.dom('.fa-arrow-left').exists();
    });

    test('When @onReturn is falsy, it does not display the return arrow button', async function (assert) {
      await render(hbs`<OSS::SidePanel::Header @title="Sidepanel header" @onClose={{this.onClose}} />`);
      assert.dom('.fa-arrow-left').doesNotExist();
    });

    test('When the return button is clicked, @onReturn is called once', async function (assert) {
      await render(
        hbs`<OSS::SidePanel::Header @title="Sidepanel header" @onClose={{this.onClose}} @onReturn={{this.onReturn}} />`
      );
      await click('.fa-arrow-left');
      assert.ok(this.onReturn.calledOnce, 'Clicked on the return button so the side panel closes.');
    });
  });
});
