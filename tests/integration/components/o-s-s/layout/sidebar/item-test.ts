import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';

module('Integration | Component | oss/layout/sidebar/item', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<OSS::Layout::Sidebar::Item @icon="far fa-search"/>`);

    assert.dom('.oss-sidebar-item').exists();
  });

  test('it renders the icon when present', async function (assert) {
    await render(hbs`<OSS::Layout::Sidebar::Item @icon="fal fa-search"/>`);

    assert.dom('.oss-sidebar-item .oss-sidebar-item__icon i').hasClass('fa-search');
  });

  test('it does not render the icon div when no icon is provided', async function (assert) {
    await render(hbs`<OSS::Layout::Sidebar::Item />`);

    assert.dom('.oss-sidebar-item .oss-sidebar-item__icon').doesNotExist();
    assert.dom('.oss-sidebar-item__label--no-icon').exists();
  });

  test('it renders the icon named block instead of the icon argument when present', async function (assert) {
    await render(
      hbs`<OSS::Layout::Sidebar::Item @icon="fal fa-search"><:icon><OSS::Icon @icon="fa-ship" class="custom-icon" /></:icon></OSS::Layout::Sidebar::Item>`
    );
    assert.dom('.oss-sidebar-item .oss-sidebar-item__icon .custom-icon').exists();
    assert.dom('.oss-sidebar-item .custom-icon').hasClass('fa-ship');
  });

  module('Arguments', () => {
    test('Default value for locked is false', async function (assert) {
      await render(hbs`<OSS::Layout::Sidebar::Item @icon="far fa-search"/>`);
      assert.dom('.oss-sidebar-item__lock').doesNotExist();
    });

    test('When locked is true', async function (assert) {
      await render(hbs`<OSS::Layout::Sidebar::Item @icon="far fa-search" @locked={{true}}/>`);
      assert.dom('.oss-sidebar-item__lock').exists();
    });

    test('Default value for hasNotification is false', async function (assert) {
      await render(hbs`<OSS::Layout::Sidebar::Item @icon="far fa-search"/>`);
      assert.dom('.oss-sidebar-item__notification').doesNotExist();
    });

    test('When hasNotification is true', async function (assert) {
      await render(hbs`<OSS::Layout::Sidebar::Item @icon="far fa-search" @hasNotifications={{true}}/>`);
      assert.dom('.oss-sidebar-item__notification').exists();
    });

    module('Expanded state', () => {
      test('the wrapper container is applied', async function (assert) {
        await render(hbs`<OSS::Layout::Sidebar::Item @expanded={{true}} @icon="far fa-search" @label="Label"/>`);
        assert.dom('.oss-sidebar-item').hasClass('oss-sidebar-item--expanded');
      });

      test('the label is displayed', async function (assert) {
        await render(hbs`<OSS::Layout::Sidebar::Item @expanded={{true}} @icon="far fa-search" @label="Label"/>`);
        assert.dom('.oss-sidebar-item__label').exists();
        assert.dom('.oss-sidebar-item__label').hasText('Label');
      });
    });
  });

  module('Actions', function (hooks) {
    hooks.beforeEach(function () {
      this.defaultAction = sinon.spy();
      this.lockedAction = sinon.spy();
      this.action = sinon.spy();
    });

    test('on click, it redirect to the @link attribute', async function (assert) {
      const router = this.owner.lookup('service:router');
      await render(
        hbs`<OSS::Layout::Sidebar::Item @icon="far fa-search" @link="index" @lockedAction={{this.lockedAction}}/>`
      );

      assert.equal(router.currentRouteName, null);
      await click('.oss-sidebar-item');
      assert.equal(router.currentRouteName, 'index');
    });

    test('When locked is true lockedAction is triggered', async function (assert) {
      await render(
        hbs`<OSS::Layout::Sidebar::Item @icon="far fa-search" @locked={{true}} @defaultAction={{this.defaultAction}} @lockedAction={{this.lockedAction}}/>`
      );
      await click('.oss-sidebar-item');

      assert.ok(this.defaultAction.notCalled);
      assert.ok(this.lockedAction.calledOnce);
    });

    test('on click, when item is not locked, the action is called ', async function (assert) {
      await render(
        hbs`<OSS::Layout::Sidebar::Item @icon="far fa-search" @locked={{false}} @defaultAction={{this.defaultAction}} @lockedAction={{this.lockedAction}} @action={{this.action}}/>`
      );
      await click('.oss-sidebar-item');

      assert.ok(this.defaultAction.notCalled);
      assert.ok(this.action.calledOnce);
    });
  });

  module('Extra attributes', () => {
    test('passing an extra class is applied to the component', async function (assert) {
      await render(hbs`<OSS::Layout::Sidebar::Item @icon="far fa-search" class="my-extra-class"/>`);
      assert.dom('.my-extra-class').exists();
    });

    test('passing data-control-name works', async function (assert) {
      await render(hbs`<OSS::Layout::Sidebar::Item @icon="far fa-search" data-control-name="layout-sidebar"/>`);
      let inputWrapper: Element | null = find('.oss-sidebar-item');
      assert.equal(inputWrapper?.getAttribute('data-control-name'), 'layout-sidebar');
    });
  });
});
