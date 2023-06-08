import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | o-s-s/content-panel', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<OSS::ContentPanel/>`);

    assert.dom('.oss-content-panel').exists();
  });

  test('The content named-block is properly displayed', async function (assert) {
    await render(
      hbs`
      <OSS::ContentPanel>
        <p>This is the content</p>
      </OSS::ContentPanel>`
    );

    assert.dom('.oss-content-panel').hasText('This is the content');
  });
});
