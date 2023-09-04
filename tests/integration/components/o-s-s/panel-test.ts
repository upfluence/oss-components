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

    assert.dom('.oss-panel--separator').doesNotExist('Separator should not be visible when only "content" is present');
    assert.dom('.oss-panel--content').hasText('Content', 'Content should be visible');
    assert.dom('.oss-panel--footer').doesNotExist('Footer should not be visible');

    await render(hbs`
      <OSS::Panel>
        <:content>Content</:content>
        <:footer>Footer</:footer>
      </OSS::Panel>
    `);

    assert
      .dom('.oss-panel--separator')
      .exists('Separator should be visible when both "content" and "footer" are present');
    assert.dom('.oss-panel--content').hasText('Content', 'Content should be visible');
    assert.dom('.oss-panel--footer').hasText('Footer', 'Footer should be visible');

    await render(hbs`
      <OSS::Panel>
        <:footer>Footer</:footer>
      </OSS::Panel>
    `);

    assert.dom('.oss-panel--separator').doesNotExist('Separator should not be visible when only "footer" is present');
    assert.dom('.oss-panel--footer').hasText('Footer', 'Footer should be visible');
  });
});
