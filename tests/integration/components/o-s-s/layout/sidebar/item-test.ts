import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';

module('Integration | Component | oss/layout/sidebar/item', function (hooks) {
  setupRenderingTest(hooks);

  test('when the component is rendered, it displays the sidebar item container', async function (assert) {
    await render(hbs`<OSS::Layout::Sidebar::Item @icon="far fa-search"/>`);

    assert.dom('.oss-sidebar-item').exists();
  });

  test('when an icon is provided, it renders the icon', async function (assert) {
    await render(hbs`<OSS::Layout::Sidebar::Item @icon="fal fa-search"/>`);

    assert.dom('.oss-sidebar-item .oss-sidebar-item__icon i').hasClass('fa-search');
  });

  test('when no icon is provided, it does not render the icon container', async function (assert) {
    await render(hbs`<OSS::Layout::Sidebar::Item />`);

    assert.dom('.oss-sidebar-item .oss-sidebar-item__icon').doesNotExist();
    assert.dom('.oss-sidebar-item__label--no-icon').exists();
  });

  test('when an icon named block is provided, it renders it instead of the icon argument', async function (assert) {
    await render(
      hbs`<OSS::Layout::Sidebar::Item @icon="fal fa-search"><:icon><OSS::Icon @icon="fa-ship" class="custom-icon" /></:icon></OSS::Layout::Sidebar::Item>`
    );
    assert.dom('.oss-sidebar-item .oss-sidebar-item__icon .custom-icon').exists();
    assert.dom('.oss-sidebar-item .custom-icon').hasClass('fa-ship');
  });

  module('Arguments', () => {
    test('when locked is not provided, it defaults to unlocked', async function (assert) {
      await render(hbs`<OSS::Layout::Sidebar::Item @icon="far fa-search"/>`);
      assert.dom('.oss-sidebar-item__lock').doesNotExist();
    });

    test('when locked is true, it displays the lock icon', async function (assert) {
      await render(hbs`<OSS::Layout::Sidebar::Item @icon="far fa-search" @locked={{true}}/>`);
      assert.dom('.oss-sidebar-item__lock').exists();
    });

    test('when hasNotifications is not provided, it does not display a notification dot', async function (assert) {
      await render(hbs`<OSS::Layout::Sidebar::Item @icon="far fa-search"/>`);
      assert.dom('.oss-sidebar-item__notification').doesNotExist();
    });

    test('when hasNotifications is true, it displays a notification dot', async function (assert) {
      await render(hbs`<OSS::Layout::Sidebar::Item @icon="far fa-search" @hasNotifications={{true}}/>`);
      assert.dom('.oss-sidebar-item__notification').exists();
    });

    test('when active is not provided, it does not apply the active class', async function (assert) {
      await render(hbs`<OSS::Layout::Sidebar::Item @icon="far fa-search"/>`);
      assert.dom('.oss-sidebar-item').doesNotHaveClass('active');
    });

    test('when active is true, it applies the active class', async function (assert) {
      await render(hbs`<OSS::Layout::Sidebar::Item @icon="far fa-search" @active={{true}}/>`);
      assert.dom('.oss-sidebar-item').hasClass('active');
    });

    module('Expanded state', () => {
      test('when expanded is true, it applies the expanded class on the wrapper', async function (assert) {
        await render(hbs`<OSS::Layout::Sidebar::Item @expanded={{true}} @icon="far fa-search" @label="Label"/>`);
        assert.dom('.oss-sidebar-item').hasClass('oss-sidebar-item--expanded');
      });

      test('when expanded is true, it displays the label', async function (assert) {
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

    test('when the item is clicked with a link, it redirects to the linked route', async function (assert) {
      const router = this.owner.lookup('service:router');
      await render(
        hbs`<OSS::Layout::Sidebar::Item @icon="far fa-search" @link="index" @lockedAction={{this.lockedAction}}/>`
      );

      assert.equal(router.currentRouteName, null);
      await click('.oss-sidebar-item');
      assert.equal(router.currentRouteName, 'index');
    });

    test('when locked is true and the item is clicked, it triggers lockedAction', async function (assert) {
      await render(
        hbs`<OSS::Layout::Sidebar::Item @icon="far fa-search" @locked={{true}} @defaultAction={{this.defaultAction}} @lockedAction={{this.lockedAction}}/>`
      );
      await click('.oss-sidebar-item');

      assert.ok(this.defaultAction.notCalled);
      assert.ok(this.lockedAction.calledOnce);
    });

    test('when the item is not locked and clicked, it triggers action', async function (assert) {
      await render(
        hbs`<OSS::Layout::Sidebar::Item @icon="far fa-search" @locked={{false}} @defaultAction={{this.defaultAction}} @lockedAction={{this.lockedAction}} @action={{this.action}}/>`
      );
      await click('.oss-sidebar-item');

      assert.ok(this.defaultAction.notCalled);
      assert.ok(this.action.calledOnce);
    });
  });

  module('Extra attributes', () => {
    test('when an extra class is passed, it applies it to the component', async function (assert) {
      await render(hbs`<OSS::Layout::Sidebar::Item @icon="far fa-search" class="my-extra-class"/>`);
      assert.dom('.my-extra-class').exists();
    });

    test('when data-control-name is passed, it forwards the attribute to the root element', async function (assert) {
      await render(hbs`<OSS::Layout::Sidebar::Item @icon="far fa-search" data-control-name="layout-sidebar"/>`);
      let inputWrapper: Element | null = find('.oss-sidebar-item');
      assert.equal(inputWrapper?.getAttribute('data-control-name'), 'layout-sidebar');
    });
  });
});
