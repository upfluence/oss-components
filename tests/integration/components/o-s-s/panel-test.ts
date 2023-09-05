import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | o-s-s/panel', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <OSS::Panel>
        <:content>Content</:content>
      </OSS::Panel>
    `);
    assert.dom('.oss-panel').exists();
    assert.dom('.oss-panel--content').hasText('Content', 'Content should be visible');
    assert.dom('.oss-panel--footer').doesNotExist('Footer should not be visible');
    assert.dom('.oss-panel--header').doesNotExist('Header should not be visible');
  });
  test('it should render content separator if header exists', async function (assert) {
    await render(hbs`
      <OSS::Panel>
        <:header>Header</:header>
        <:content>Content</:content>
      </OSS::Panel>
    `);
    assert
      .dom('.oss-panel--content .oss-panel--separator')
      .exists('Content separator should be visible when header is visible');
  });
  test('it should render footer separator if content exists', async function (assert) {
    await render(hbs`
      <OSS::Panel>
        <:header>Header</:header>
        <:content>Content</:content>
        <:footer>Footer</:footer>
      </OSS::Panel>
    `);
    assert
      .dom('.oss-panel--footer .oss-panel--separator')
      .exists('Footer separator should be visible when content is visible');
  });
  test('it should not render content separator if header does not exist', async function (assert) {
    await render(hbs`
      <OSS::Panel>
        <:content>Content</:content>
        <:footer>Footer</:footer>
      </OSS::Panel>
    `);
    assert
      .dom('.oss-panel--content .oss-panel--separator')
      .doesNotExist('Content separator should not be visible when header is not visible');
  });
  test('it should not render footer separator if content does not exist', async function (assert) {
    await render(hbs`
      <OSS::Panel>
        <:footer>Footer</:footer>
      </OSS::Panel>
    `);
    assert
      .dom('.oss-panel--footer .oss-panel--separator')
      .doesNotExist('Footer separator should not be visible when content is not visible');
  });
});
