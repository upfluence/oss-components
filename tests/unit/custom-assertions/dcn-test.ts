import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Test Support | Custom Assertions | dcn', function (hooks) {
  setupRenderingTest(hooks);

  module('.exists()', () => {
    test('it passes when the data-control-name element exists', async function (assert) {
      await render(hbs`<div data-control-name="my-dcn-selector"></div>`);

      assert.dcn('my-dcn-selector').exists();
    });
  });

  module('.doesNotExist()', () => {
    test('it passes when the data-control-name element does not exist', async function (assert) {
      await render(hbs`<div></div>`);

      assert.dcn('my-dcn-selector').doesNotExist();
    });

    test('it uses strict matching by default', async function (assert) {
      await render(hbs`<div data-control-name="list-item-1"></div>`);

      assert.dcn('list-item').doesNotExist();
    });
  });

  module('options.strict', () => {
    test('it supports loose matching when strict is false', async function (assert) {
      await render(hbs`<div data-control-name="list-item-1"></div>`);

      assert.dcn('list-item', { strict: false }).exists();
    });

    test('it supports explicit strict matching when strict is true', async function (assert) {
      await render(hbs`<div data-control-name="list-item-1"></div>`);

      assert.dcn('list-item-1', { strict: true }).exists();
      assert.dcn('list-item', { strict: true }).doesNotExist();
    });
  });
});
