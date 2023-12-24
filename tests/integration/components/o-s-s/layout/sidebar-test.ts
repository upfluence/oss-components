import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';

module('Integration | Component | o-s-s/layout/sidebar', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<OSS::Layout::Sidebar />`);

    assert.dom('.oss-sidebar--containers').exists();
  });

  test('it renders the logo when present', async function (assert) {
    this.logo = '/toto.png';

    await render(
      hbs`
      <OSS::Layout::Sidebar @logo={{this.logo}}/>`
    );

    assert.equal(
      document.querySelector('.oss-sidebar--containers .logo-container img')?.getAttribute('src'),
      '/toto.png'
    );
  });

  module('Named block', () => {
    test('The content named-block is properly displayed', async function (assert) {
      await render(
        hbs`
        <OSS::Layout::Sidebar>
          <:content>
            <p>This is the content</p>
          </:content>
        </OSS::Layout::Sidebar>`
      );
      assert.dom('.oss-sidebar--content').hasText('This is the content');
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

      assert.dom('.oss-sidebar--footer').hasText('footer content');
    });
  });

  module('Extra attributes', () => {
    test('passing an extra class is applied to the component', async function (assert) {
      await render(hbs`<OSS::Layout::Sidebar class="my-extra-class" />`);
      assert.dom('.my-extra-class').exists();
    });

    test('passing data-control-name works', async function (assert) {
      await render(hbs`<OSS::Layout::Sidebar data-control-name="layout-sidebar" />`);
      let inputWrapper: Element | null = find('.oss-sidebar--containers');
      assert.equal(inputWrapper?.getAttribute('data-control-name'), 'layout-sidebar');
    });
  });
});
