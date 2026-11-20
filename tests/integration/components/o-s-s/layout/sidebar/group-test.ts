import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, find, render, triggerEvent } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
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
          <OSS::Layout::Sidebar::Group @icon="fa-screen-users" @label="Apps" @expanded={{this.expanded}} @items={{this.items}} @collapsible={{this.collapsible}} />
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

      await triggerEvent('.oss-sidebar-group > div .oss-sidebar-item', 'mouseenter');

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
      assert.dom('.oss-sidebar-group > div .oss-sidebar-item .oss-sidebar-item__notification').exists();
    });

    test('the group items container is hidden after a slight delay when the mouse leaves both the group item and the items container', async function (assert) {
      const clock = sinon.useFakeTimers({
        shouldAdvanceTime: true
      });

      await renderComponent();

      await triggerEvent('.oss-sidebar-group > div .oss-sidebar-item', 'mouseenter');

      assert.dom('.oss-sidebar-group').hasClass('oss-sidebar-group--hovered');
      assert
        .dom('.oss-sidebar-group .oss-sidebar-group__items-container')
        .hasClass('oss-sidebar-group__items-container--visible');

      triggerEvent('.oss-sidebar-group > div .oss-sidebar-item', 'mouseleave');

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

      assert.dom('.oss-sidebar-group > div .oss-sidebar-item').hasClass('oss-sidebar-item--group-header');
      assert.dom('.oss-sidebar-group > div .oss-sidebar-item .oss-sidebar-item__label').hasText('Apps');
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

  module('@collapsible is true', function (hooks) {
    hooks.beforeEach(function () {
      this.collapsible = true;
    });

    test('the group header includes a collapse icon', async function (assert) {
      await renderComponent();

      assert.dom('.oss-sidebar-group__collapse-trigger').exists();
    });

    test('clicking the collapse icon toggles the related state', async function (assert) {
      await renderComponent();

      assert.dom('.oss-sidebar-group').doesNotHaveClass('oss-sidebar-group--collapsed');
      await click('.oss-sidebar-group__collapse-trigger');
      assert.dom('.oss-sidebar-group').hasClass('oss-sidebar-group--collapsed');
    });
  });

  module('@items is empty', function (hooks) {
    hooks.beforeEach(function () {
      this.items = [];
      this.expanded = true;
    });

    test('the group renders without items', async function (assert) {
      await renderComponent();
      assert.dom('.oss-sidebar-group').exists();
      assert.dom('.oss-sidebar-group__items-container').doesNotExist();
    });

    test('the group has no notification dot', async function (assert) {
      await renderComponent();
      assert.dom('.oss-sidebar-group .oss-sidebar-item__notification').doesNotExist();
    });

    test('hovering the group does not display an empty popup', async function (assert) {
      this.expanded = false;
      await renderComponent();

      await triggerEvent('.oss-sidebar-group > div .oss-sidebar-item', 'mouseenter');
      assert.dom('.oss-sidebar-group__items-container').doesNotExist();
    });
  });

  module('icon named-block', function () {
    test('it renders the icon named block instead of the icon argument when present', async function (assert) {
      await render(hbs`
        <OSS::Layout::Sidebar::Group @icon="fa-screen-users" @label="Apps" @expanded={{this.expanded}} @items={{this.items}} @collapsible={{this.collapsible}}
        >
          <:icon>
            <OSS::Icon @icon="fa-ship" class="custom-icon" />
          </:icon>
        </OSS::Layout::Sidebar::Group>`);
      assert.dom('.oss-sidebar-group > div .oss-sidebar-item .oss-sidebar-item__icon i').hasClass('fa-ship');
    });
  });

  module('an item has a tag', function (hooks) {
    hooks.beforeEach(function () {
      this.expanded = true;
      this.items = [
        {
          icon: 'far fa-search',
          link: '/search',
          active: false,
          hasNotifications: false,
          label: 'Search',
          tag: { label: 'New', skin: 'chat-gpt', plain: true }
        }
      ];
    });

    test('the tag is propagated to the underlying item', async function (assert) {
      await renderComponent();

      assert.dom('.oss-sidebar-group .oss-sidebar-group__items-container .oss-sidebar-item__tag').hasText('New');
      assert
        .dom('.oss-sidebar-group .oss-sidebar-group__items-container .oss-sidebar-item__tag')
        .hasClass('upf-tag--chat-gpt');
      assert
        .dom('.oss-sidebar-group .oss-sidebar-group__items-container .oss-sidebar-item__tag')
        .hasClass('upf-tag--plain');
    });
  });

  module('group header has a tag', function (hooks) {
    const header = '.oss-sidebar-group > .oss-sidebar-group__title-container';
    const tag = `${header} .oss-sidebar-item__tag`;

    hooks.beforeEach(function () {
      this.expanded = true;
      this.groupTag = { label: '9+', skin: 'danger', plain: true };
    });

    test('the tag is displayed on the group header when expanded', async function (assert) {
      await render(hbs`
        <OSS::Layout::Sidebar::Group
          @icon="fa-screen-users"
          @label="Apps"
          @expanded={{this.expanded}}
          @items={{this.items}}
          @tag={{this.groupTag}}
        />
      `);

      assert.dom(tag).hasText('9+').hasClass('upf-tag--critical').hasStyle({ opacity: '1' });

      const badge = find(tag) as HTMLElement;
      const label = find(`${header} .oss-sidebar-item__label`) as HTMLElement;
      assert.strictEqual(
        badge.offsetLeft - label.offsetLeft - label.offsetWidth,
        6,
        'the badge follows the group label'
      );
      assert.true(
        Math.abs(badge.offsetTop + badge.offsetHeight / 2 - label.offsetTop - label.offsetHeight / 2) <= 1,
        'the badge is vertically centered with the label'
      );
    });

    test('the tag is displayed on the group header when collapsed', async function (assert) {
      this.expanded = false;
      await render(hbs`
        <OSS::Layout::Sidebar::Group
          @icon="fa-screen-users"
          @label="Apps"
          @expanded={{this.expanded}}
          @items={{this.items}}
          @tag={{this.groupTag}}
        />
      `);

      assert.dom(tag).hasText('9+').hasStyle({ opacity: '1', position: 'absolute', right: '3px', top: '2px' });
    });

    test('when the group has no header tag, the item tag is still displayed', async function (assert) {
      this.items[0].tag = { label: 'New', skin: 'chat-gpt', plain: true };

      await render(hbs`
        <OSS::Layout::Sidebar::Group
          @icon="fa-screen-users"
          @label="Apps"
          @expanded={{this.expanded}}
          @items={{this.items}}
        />
      `);

      assert.dom(tag).doesNotExist();
      assert
        .dom('.oss-sidebar-group__items-container .oss-sidebar-item__tag')
        .hasText('New')
        .hasStyle({ opacity: '1' });
    });
  });
});
