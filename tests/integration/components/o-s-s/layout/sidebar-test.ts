import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render, settled } from '@ember/test-helpers';
import { setupIntl } from 'ember-intl/test-support';

module('Integration | Component | o-s-s/layout/sidebar', function (hooks) {
  setupRenderingTest(hooks);
  setupIntl(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<OSS::Layout::Sidebar />`);

    assert.dom('.oss-sidebar-container').exists();
  });

  module('Home header', () => {
    test('for backward compatibility: it renders the legacy logo & homeURL behaviour when present', async function (assert) {
      this.logo = '/assets/images/brand-icon.svg';
      this.homeURL = '/home';

      await render(hbs`<OSS::Layout::Sidebar @logo={{this.logo}} @homeURL={{this.homeURL}} />`);

      assert.dom('.oss-sidebar-container .logo-container img').hasAttribute('src', '/assets/images/brand-icon.svg');
    });

    test('it properly renders the homeParameters when present', async function (assert) {
      this.homeParameters = {
        logo: '/assets/images/brand-icon.svg',
        url: '/home'
      };

      await render(hbs`<OSS::Layout::Sidebar @homeParameters={{this.homeParameters}} />`);

      assert.dom('.oss-sidebar-container .logo-container img').hasAttribute('src', '/assets/images/brand-icon.svg');
      assert.dom('.oss-sidebar-container .logo-container a').hasAttribute('href', '/home');
    });

    test('it properly renders the homeParameters.tooltip when present', async function (assert) {
      this.homeParameters = {
        logo: '/assets/images/brand-icon.svg',
        url: '/home',
        tooltip: 'Home'
      };

      await render(hbs`<OSS::Layout::Sidebar @homeParameters={{this.homeParameters}} />`);

      await assert.tooltip('.oss-sidebar-container .logo-container .oss-sidebar-item').hasTitle('Home');
    });
  });

  module('Named blocks', () => {
    test('The content named-block is properly displayed', async function (assert) {
      await render(
        hbs`
        <OSS::Layout::Sidebar>
          <:content>
            <p>This is the content</p>
          </:content>
        </OSS::Layout::Sidebar>`
      );
      assert.dom('.oss-sidebar-container__content').hasText('This is the content');
    });

    test('The footer named-block is properly displayed', async function (assert) {
      await render(
        hbs`
        <OSS::Layout::Sidebar>
          <:footer>
            footer content
          </:footer>
        </OSS::Layout::Sidebar>`
      );

      assert.dom('.oss-sidebar-container__footer').hasText('footer content');
    });
  });

  module('Extra attributes', () => {
    test('passing an extra class is applied to the component', async function (assert) {
      await render(hbs`<OSS::Layout::Sidebar class="my-extra-class" />`);
      assert.dom('.my-extra-class').exists();
    });

    test('passing data-control-name works', async function (assert) {
      await render(hbs`<OSS::Layout::Sidebar data-control-name="layout-sidebar" />`);
      assert.dom('.oss-sidebar-container').hasAttribute('data-control-name', 'layout-sidebar');
    });
  });

  module('Expandable behavior', (hooks) => {
    hooks.beforeEach(function () {
      this.homeParameters = {
        logo: '/assets/images/brand-icon.svg',
        url: '/home'
      };
    });

    test('the toggle button is not displayed when expandable is falsy', async function (assert) {
      await render(hbs`<OSS::Layout::Sidebar @homeParameters={{this.homeParameters}} />`);
      assert.dom('.oss-sidebar-container__expand').doesNotExist();
    });

    test('the toggle button is displayed when expandable is true', async function (assert) {
      await render(hbs`<OSS::Layout::Sidebar @homeParameters={{this.homeParameters}} @expandable={{true}} />`);
      assert.dom('.oss-sidebar-container__expand').exists();
      assert.dom('.oss-sidebar-container__expand').hasText(this.intl.t('oss-components.sidebar.collapse'));
    });

    test('the sidebar is expanded by default when expandable is true and there is no local storage item preventing it', async function (assert) {
      await render(hbs`<OSS::Layout::Sidebar @homeParameters={{this.homeParameters}} @expandable={{true}} />`);
      assert.dom('.oss-sidebar-container').hasClass('oss-sidebar-container--expanded');
    });

    test('the sidebar is collapsed by default when expandable is true and the local storage item is set to false', async function (assert) {
      window.localStorage.setItem('_upf.oss-layout-sidebar-expanded', 'false');
      await render(hbs`<OSS::Layout::Sidebar @homeParameters={{this.homeParameters}} @expandable={{true}} />`);
      assert.dom('.oss-sidebar-container').doesNotHaveClass('oss-sidebar-container--expanded');
      window.localStorage.removeItem('_upf.oss-layout-sidebar-expanded');
    });

    test('clicking the toggle button effectively toggles the expanded state of the sidebar', async function (assert) {
      await render(hbs`<OSS::Layout::Sidebar @homeParameters={{this.homeParameters}} @expandable={{true}} />`);

      assert.dom('.oss-sidebar-container').hasClass('oss-sidebar-container--expanded');

      await click('[data-control-name="sidebar-expanded-state-toggle"]');
      await settled();

      assert.dom('.oss-sidebar-container').doesNotHaveClass('oss-sidebar-container--expanded');
      assert.equal(window.localStorage.getItem('_upf.oss-layout-sidebar-expanded'), 'false');

      await click('[data-control-name="sidebar-expanded-state-toggle"]');

      assert.dom('.oss-sidebar-container').hasClass('oss-sidebar-container--expanded');
      assert.equal(window.localStorage.getItem('_upf.oss-layout-sidebar-expanded'), 'true');
    });
  });
});
