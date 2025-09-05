import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { find, render, settled, triggerEvent, waitUntil } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { later } from '@ember/runloop';
import sinon from 'sinon';

module('Integration | Component | o-s-s/layout/sidebar/group', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.items = [
      {
        icon: 'far fa-search',
        link: '/search',
        active: false,
        hasNotifications: false,
        label: 'Search'
      },
      {
        icon: 'far fa-user',
        link: '/profile',
        active: true,
        hasNotifications: true,
        label: 'Profile'
      }
    ];
  });

  async function renderComponent() {
    await render(
      hbs`
        <div class="fx-row fx-malign-space-between">
          <OSS::Layout::Sidebar::Group @icon="fa-screen-users" @label="Apps" @expanded={{this.expanded}} @items={{this.items}} />
          <OSS::Icon @icon="fa-ship" class="side-icon" />
        </div>
      `
    );
  }

  module('@expanded is falsy', function (hooks) {
    hooks.beforeEach(function () {
      this.expanded = false;
    });

    test('the container has the right class applied', async function (assert) {
      await renderComponent();
      assert.dom('.oss-sidebar-group').hasNoClass('oss-sidebar-group--expanded');
    });

    test('the group label is not displayed, nor the items container', async function (assert) {
      await renderComponent();
      assert.dom('.oss-sidebar-group > .oss-sidebar-item .oss-sidebar-item__label').doesNotExist();
      assert
        .dom('.oss-sidebar-group .oss-sidebar-group__items-container')
        .hasNoClass('oss-sidebar-group__items-container--visible');
      assert.dom('.oss-sidebar-group .oss-sidebar-group__items-container .oss-sidebar-item').exists({ count: 2 });
      assert
        .dom(
          '.oss-sidebar-group .oss-sidebar-group__items-container .oss-sidebar-item:first-child .oss-sidebar-item__label'
        )
        .hasText('Search');
      assert
        .dom(
          '.oss-sidebar-group .oss-sidebar-group__items-container .oss-sidebar-item:last-child .oss-sidebar-item__label'
        )
        .hasText('Profile');
    });

    test('the group items container is displayed on hover of the group item', async function (assert) {
      await renderComponent();

      assert.dom('.oss-sidebar-group').hasNoClass('oss-sidebar-group--hovered');

      await triggerEvent('.oss-sidebar-group > .oss-sidebar-item', 'mouseenter');

      assert.dom('.oss-sidebar-group').hasClass('oss-sidebar-group--hovered');
      assert
        .dom('.oss-sidebar-group .oss-sidebar-group__items-container')
        .hasClass('oss-sidebar-group__items-container--visible');
      assert
        .dom(
          '.oss-sidebar-group .oss-sidebar-group__items-container .oss-sidebar-item:first-child .oss-sidebar-item__label'
        )
        .hasText('Search');
      assert
        .dom(
          '.oss-sidebar-group .oss-sidebar-group__items-container .oss-sidebar-item:last-child .oss-sidebar-item__label'
        )
        .hasText('Profile');
    });

    test('the group has a notification dot as one of its items has one', async function (assert) {
      await renderComponent();
      assert.dom('.oss-sidebar-group > .oss-sidebar-item .oss-sidebar-item__notification').exists();
    });

    test('the group items container is hidden after a slight delay when the mouse leaves both the group item and the items container', async function (assert) {
      const clock = sinon.useFakeTimers({
        shouldAdvanceTime: true
      });

      await renderComponent();

      await triggerEvent('.oss-sidebar-group > .oss-sidebar-item', 'mouseenter');

      assert.dom('.oss-sidebar-group').hasClass('oss-sidebar-group--hovered');
      assert
        .dom('.oss-sidebar-group .oss-sidebar-group__items-container')
        .hasClass('oss-sidebar-group__items-container--visible');

      triggerEvent('.oss-sidebar-group > .oss-sidebar-item', 'mouseleave');

      assert
        .dom('.oss-sidebar-group .oss-sidebar-group__items-container')
        .hasClass('oss-sidebar-group__items-container--visible');

      await clock.tickAsync(500);

      assert
        .dom('.oss-sidebar-group .oss-sidebar-group__items-container')
        .hasNoClass('oss-sidebar-group__items-container--visible');

      clock.restore();
    });
  });

  module('@expanded is truthy', function (hooks) {
    hooks.beforeEach(function () {
      this.expanded = true;
    });

    test('the container has the right class applied', async function (assert) {
      await renderComponent();
      assert.dom('.oss-sidebar-group').hasClass('oss-sidebar-group--expanded');
    });

    test('the group label is displayed, along with all the items directly', async function (assert) {
      await renderComponent();

      assert.dom('.oss-sidebar-group > .oss-sidebar-item').hasClass('oss-sidebar-item--group-header');
      assert.dom('.oss-sidebar-group > .oss-sidebar-item .oss-sidebar-item__label').hasText('Apps');
      assert
        .dom('.oss-sidebar-group .oss-sidebar-group__items-container')
        .hasClass('oss-sidebar-group__items-container--visible');
      assert.dom('.oss-sidebar-group .oss-sidebar-group__items-container .oss-sidebar-item').exists({ count: 2 });
      assert
        .dom(
          '.oss-sidebar-group .oss-sidebar-group__items-container .oss-sidebar-item:first-child .oss-sidebar-item__label'
        )
        .hasText('Search');
      assert
        .dom(
          '.oss-sidebar-group .oss-sidebar-group__items-container .oss-sidebar-item:last-child .oss-sidebar-item__label'
        )
        .hasText('Profile');
    });

    test('the group itself has no notification dot as they are displayed on the children', async function (assert) {
      await renderComponent();
      assert.dom('.oss-sidebar-group > .oss-sidebar-item .oss-sidebar-item__notification').doesNotExist();
    });
  });
});
