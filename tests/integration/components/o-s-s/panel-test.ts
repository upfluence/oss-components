import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';

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
  });

  test('it should render the content separator if the header exists', async function (assert) {
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

  test('it should render the footer separator if the content exists', async function (assert) {
    await render(hbs`
      <OSS::Panel>
        <:header>Header</:header>
        <:content>Content</:content>
        <:footer>Footer</:footer>
      </OSS::Panel>
    `);

    assert
      .dom('.oss-panel--footer .oss-panel--separator')
      .exists('Footer separator should be visible when the content is visible');
  });

  test('it should not render the content separator if the header does not exist', async function (assert) {
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

  test('it should not render the footer separator if the content does not exist', async function (assert) {
    await render(hbs`
      <OSS::Panel>
        <:footer>Footer</:footer>
      </OSS::Panel>
    `);

    assert
      .dom('.oss-panel--footer .oss-panel--separator')
      .doesNotExist('Footer separator should not be visible when the content is not visible');
  });

  test('If the header named-block is defined, it is properly rendered', async function (assert) {
    await render(hbs`
      <OSS::Panel>
        <:header>Header</:header>
      </OSS::Panel>
    `);

    assert.dom('.oss-panel--header').exists('The header named block should be visible');
  });

  test('If the content named-block is defined, it is properly rendered', async function (assert) {
    await render(hbs`
      <OSS::Panel>
        <:content>Content</:content>
      </OSS::Panel>
    `);

    assert.dom('.oss-panel--content').exists('The content named block should be visible');
  });

  test('If the footer named-block is defined, it is properly rendered', async function (assert) {
    await render(hbs`
      <OSS::Panel>
        <:footer>Footer</:footer>
      </OSS::Panel>
    `);

    assert.dom('.oss-panel--footer').exists('The footer named block should be visible');
  });
});
