import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | format-money', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.amount = 1234;
    this.currency = 'USD';
  });

  module('Basic formatting', function () {
    test('Formats money when an amount and a currency are passed', async function (assert) {
      await render(hbs`<div>{{format-money this.amount this.currency}}</div>`);
      assert.dom('div').hasText('$1,234');
    });

    test('Divides amount by 100 when cents are passed', async function (assert) {
      this.format = 'cents';

      await render(hbs`<div>{{format-money this.amount this.currency this.format}}</div>`);
      assert.dom('div').hasText('$12.34');
    });
  });

  module('Compact formatting (K/M/B)', function () {
    test('Applies a K notation to thousands when compact is passed as true', async function (assert) {
      this.format = 'raw';
      this.compact = true;

      await render(hbs`<div>{{format-money this.amount this.currency this.format this.compact}}</div>`);
      assert.dom('div').hasText('$1.2K');
    });

    test('Applies a M notation to millions when compact is passed as true', async function (assert) {
      this.amount = 1234567;
      this.format = 'raw';
      this.compact = true;

      await render(hbs`<div>{{format-money this.amount this.currency this.format this.compact}}</div>`);
      assert.dom('div').hasText('$1.2M');
    });

    test('Applies a B notation to billions when compact is passed as true', async function (assert) {
      this.amount = 1234567890;
      this.format = 'raw';
      this.compact = true;

      await render(hbs`<div>{{format-money this.amount this.currency this.format this.compact}}</div>`);
      assert.dom('div').hasText('$1.2B');
    });
  });

  module('Compact + cents formatting', function () {
    test('Applies a division by 100 and K notation to thousands when compact is passed as true', async function (assert) {
      this.amount = 123457;
      this.format = 'cents';
      this.compact = true;

      await render(hbs`<div>{{format-money this.amount this.currency this.format this.compact}}</div>`);
      assert.dom('div').hasText('$1.2K');
    });

    test('Applies a division by 100 and K notation to millions when compact is passed as true', async function (assert) {
      this.amount = 123457890;
      this.format = 'cents';
      this.compact = true;

      await render(hbs`<div>{{format-money this.amount this.currency this.format this.compact}}</div>`);
      assert.dom('div').hasText('$1.2M');
    });

    test('Applies a division by 100 and K notation to billions when compact is passed as true', async function (assert) {
      this.amount = 123457890123;
      this.format = 'cents';
      this.compact = true;

      await render(hbs`<div>{{format-money this.amount this.currency this.format this.compact}}</div>`);
      assert.dom('div').hasText('$1.2B');
    });
  });
});
