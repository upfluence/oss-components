import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Test Support | Custom Assertions | hasHtmlText', function (hooks) {
  setupRenderingTest(hooks);

  module('hasHtmlText()', () => {
    test('it strips HTML tags and compares the visible text', async function (assert) {
      await render(hbs`<div class="target">Hello world</div>`);

      assert.hasHtmlText('.target', 'Hello <strong>world</strong>');
    });

    test('it decodes HTML entities', async function (assert) {
      await render(hbs`<div class="target">Cool! Plan</div>`);

      assert.hasHtmlText('.target', '<span>Cool!</span> <em>Plan</em>');
    });

    test('it works with a plain string (no tags)', async function (assert) {
      await render(hbs`<div class="target">Simple label</div>`);

      assert.hasHtmlText('.target', 'Simple label');
    });

    test('it handles null and undefined values as empty text', async function (assert) {
      await render(hbs`<div class="target"></div>`);

      assert.hasHtmlText('.target', '');
      assert.hasHtmlText('.target', null);
      assert.hasHtmlText('.target', undefined);
    });
  });
});
