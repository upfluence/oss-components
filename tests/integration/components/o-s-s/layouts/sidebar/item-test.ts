import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | oss/layouts/sidebar/item', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.onChange = () => {};
    await render(hbs`<OSS::Layouts::Sidebar::Item />`);

    assert.dom('.oss-sidebar-item--containers').exists();
  });

  test('it renders the icon when present', async function (assert) {
    await render(hbs`<OSS::Layouts::Sidebar::Item @icon="fal fa-search" />`);

    assert.dom('.oss-sidebar-item--containers span').hasClass('fa-search');
  });

  module('Arguments', () => {
    test('Default value for locked is false', async function (assert) {
      await render(hbs`<OSS::Layouts::Sidebar::Item/>`);
      assert.dom('.oss-sidebar-item--locked').doesNotExist();
    });

    test('When locked is true', async function (assert) {
      await render(hbs`<OSS::Layouts::Sidebar::Item  @locked={{true}}/>`);
      assert.dom('.oss-sidebar-item--locked').exists();
    });

    test('Default value for hasNotification is false', async function (assert) {
      await render(hbs`<OSS::Layouts::Sidebar::Item/>`);
      assert.dom('.oss-sidebar-item--notification').doesNotExist();
    });

    test('When hasNotification is true', async function (assert) {
      await render(hbs`<OSS::Layouts::Sidebar::Item  @hasNotifications={{true}}/>`);
      assert.dom('.oss-sidebar-item--notification').exists();
    });
  });

  // has notification
  // class exists

  // isLocked
  // has class

  module('Extra attributes', () => {
    test('passing an extra class is applied to the component', async function (assert) {
      await render(hbs`<OSS::Layouts::Sidebar::Item class="my-extra-class" />`);
      assert.dom('.my-extra-class').exists();
    });

    test('passing data-control-name works', async function (assert) {
      await render(hbs`<OSS::Layouts::Sidebar::Item data-control-name="layout-sidebar" />`);
      let inputWrapper: Element | null = find('.oss-sidebar-item--containers');
      assert.equal(inputWrapper?.getAttribute('data-control-name'), 'layout-sidebar');
    });
  });
});
