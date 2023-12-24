import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';

module('Integration | Component | oss/layout/sidebar/item', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<OSS::Layout::Sidebar::Item @icon="far fa-search" />`);

    assert.dom('.oss-sidebar-item').exists();
  });

  test('it renders the icon when present', async function (assert) {
    await render(hbs`<OSS::Layout::Sidebar::Item @icon="fal fa-search" />`);

    assert.dom('.oss-sidebar-item .oss-sidebar-item--icon i').hasClass('fa-search');
  });

  module('Arguments', () => {
    test('Default value for locked is false', async function (assert) {
      await render(hbs`<OSS::Layout::Sidebar::Item @icon="far fa-search"/>`);
      assert.dom('.oss-sidebar-item--locked').doesNotExist();
    });

    test('When locked is true', async function (assert) {
      await render(hbs`<OSS::Layout::Sidebar::Item @icon="far fa-search" @locked={{true}}/>`);
      assert.dom('.oss-sidebar-item--locked').exists();
    });

    test('Default value for hasNotification is false', async function (assert) {
      await render(hbs`<OSS::Layout::Sidebar::Item @icon="far fa-search"/>`);
      assert.dom('.oss-sidebar-item--notification').doesNotExist();
    });

    test('When hasNotification is true', async function (assert) {
      await render(hbs`<OSS::Layout::Sidebar::Item @icon="far fa-search" @hasNotifications={{true}}/>`);
      assert.dom('.oss-sidebar-item--notification').exists();
    });
  });

  module('Actions', function (hooks) {
    hooks.beforeEach(function () {
      this.defaultAction = sinon.spy();
      this.lockedAction = sinon.spy();
    });

    test('OnClick defaultAction is triggered', async function (assert) {
      await render(
        hbs`<OSS::Layout::Sidebar::Item @icon="far fa-search" @defaultAction={{this.defaultAction}} @lockedAction={{this.lockedAction}}/>`
      );
      await click('.oss-sidebar-item');

      assert.ok(this.defaultAction.calledOnce);
      assert.ok(this.lockedAction.notCalled);
    });

    test('When locked is true lockedAction is triggered', async function (assert) {
      await render(
        hbs`<OSS::Layout::Sidebar::Item @icon="far fa-search" @locked={{true}} @defaultAction={{this.defaultAction}} @lockedAction={{this.lockedAction}}/>`
      );
      await click('.oss-sidebar-item');

      assert.ok(this.defaultAction.notCalled);
      assert.ok(this.lockedAction.calledOnce);
    });
  });

  module('Extra attributes', () => {
    test('passing an extra class is applied to the component', async function (assert) {
      await render(hbs`<OSS::Layout::Sidebar::Item @icon="far fa-search" class="my-extra-class" />`);
      assert.dom('.my-extra-class').exists();
    });

    test('passing data-control-name works', async function (assert) {
      await render(hbs`<OSS::Layout::Sidebar::Item @icon="far fa-search" data-control-name="layout-sidebar" />`);
      let inputWrapper: Element | null = find('.oss-sidebar-item');
      assert.equal(inputWrapper?.getAttribute('data-control-name'), 'layout-sidebar');
    });
  });
});
