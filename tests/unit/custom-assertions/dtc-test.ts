import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Test Support | Custom Assertions | dtc', function (hooks) {
  setupRenderingTest(hooks);

  module('.exists()', () => {
    test('it passes when the data-control-name element exists', async function (assert) {
      await render(hbs`<div data-control-name="my-dtc-selector"></div>`);

      assert.dtc('my-dtc-selector').exists();
    });
  });

  module('.doesNotExist()', () => {
    test('it passes when the data-control-name element does not exist', async function (assert) {
      await render(hbs`<div></div>`);

      assert.dtc('my-dtc-selector').doesNotExist();
    });

    test('it uses strict matching by default', async function (assert) {
      await render(hbs`<div data-control-name="list-item-1"></div>`);

      assert.dtc('list-item').doesNotExist();
    });
  });

  module('options.strict', () => {
    test('it supports loose matching when strict is false', async function (assert) {
      await render(hbs`<div data-control-name="list-item-1"></div>`);

      assert.dtc('list-item', { strict: false }).exists();
    });

    test('it supports explicit strict matching when strict is true', async function (assert) {
      await render(hbs`<div data-control-name="list-item-1"></div>`);

      assert.dtc('list-item-1', { strict: true }).exists();
      assert.dtc('list-item', { strict: true }).doesNotExist();
    });
  });

  module('.hasClass()', () => {
    test('it supports hasClass from assert.dom', async function (assert) {
      await render(hbs`<div data-control-name="my-dtc-selector" class="alpha beta"></div>`);

      assert.dtc('my-dtc-selector').hasClass('alpha');
    });
  });

  module('.hasText()', () => {
    test('it supports hasText from assert.dom', async function (assert) {
      await render(hbs`<div data-control-name="my-dtc-selector">Hello DTC</div>`);

      assert.dtc('my-dtc-selector').hasText('Hello DTC');
    });
  });

  module('.hasStyle()', () => {
    test('it supports hasStyle from assert.dom', async function (assert) {
      await render(hbs`<div data-control-name="my-dtc-selector" style="display: block;"></div>`);

      assert.dtc('my-dtc-selector').hasStyle({
        display: 'block'
      });
    });
  });

  module('.hasAttribute()', () => {
    test('it supports hasAttribute from assert.dom', async function (assert) {
      await render(hbs`<div data-control-name="my-dtc-selector" data-state="active"></div>`);

      assert.dtc('my-dtc-selector').hasAttribute('data-state', 'active');
    });
  });
});
