import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import {
  PREVENT_COMPACT_NOTATION_ON_CENTS_BELOW,
  PREVENT_COMPACT_NOTATION_ON_RAW_BELOW
} from '@upfluence/oss-components/helpers/format-money';

module('Integration | Helper | format-money', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.amount = 1234.89;
    this.currency = 'USD';
  });

  module('Basic formatting', function () {
    test('Formats money when an amount and a currency are passed', async function (assert) {
      await render(hbs`<div>{{format-money this.amount this.currency}}</div>`);
      assert.dom('div').hasText('$1,234.89');
    });

    test('Divides amount by 100 when cents are passed', async function (assert) {
      this.format = 'cents';

      await render(hbs`<div>{{format-money this.amount this.currency this.format}}</div>`);
      assert.dom('div').hasText('$12.35');
    });
  });

  module('Compact formatting (K/M/B)', function (hooks) {
    hooks.beforeEach(function () {
      this.format = 'raw';
      this.compact = true;
    });

    test(`Below ${PREVENT_COMPACT_NOTATION_ON_RAW_BELOW} value, it renders complete number when compact is passed as true`, async function (assert) {
      this.amount = 834.89;

      await render(hbs`<div>{{format-money this.amount this.currency this.format this.compact}}</div>`);
      assert.dom('div').hasText('$834.89');
    });

    test('Applies a K notation to thousands when compact is passed as true', async function (assert) {
      await render(hbs`<div>{{format-money this.amount this.currency this.format this.compact}}</div>`);
      assert.dom('div').hasText('$1.2K');
    });

    test('Applies a M notation to millions when compact is passed as true', async function (assert) {
      this.amount = 1234567.89;

      await render(hbs`<div>{{format-money this.amount this.currency this.format this.compact}}</div>`);
      assert.dom('div').hasText('$1.2M');
    });

    test('Applies a B notation to billions when compact is passed as true', async function (assert) {
      this.amount = 1234567890.89;

      await render(hbs`<div>{{format-money this.amount this.currency this.format this.compact}}</div>`);
      assert.dom('div').hasText('$1.2B');
    });
  });

  module('Compact + cents formatting', function (hooks) {
    hooks.beforeEach(function () {
      this.format = 'cents';
      this.compact = true;
    });

    test(`Below ${PREVENT_COMPACT_NOTATION_ON_CENTS_BELOW} value, it applies a division by 100 when compact is passed as true`, async function (assert) {
      this.amount = 83489;

      await render(hbs`<div>{{format-money this.amount this.currency this.format this.compact}}</div>`);
      assert.dom('div').hasText('$834.89');
    });

    test('Applies a division by 100 and K notation to thousands when compact is passed as true', async function (assert) {
      this.amount = 123457;

      await render(hbs`<div>{{format-money this.amount this.currency this.format this.compact}}</div>`);
      assert.dom('div').hasText('$1.2K');
    });

    test('Applies a division by 100 and M notation to millions when compact is passed as true', async function (assert) {
      this.amount = 123457890;

      await render(hbs`<div>{{format-money this.amount this.currency this.format this.compact}}</div>`);
      assert.dom('div').hasText('$1.2M');
    });

    test('Applies a division by 100 and B notation to billions when compact is passed as true', async function (assert) {
      this.amount = 123457890123;

      await render(hbs`<div>{{format-money this.amount this.currency this.format this.compact}}</div>`);
      assert.dom('div').hasText('$1.2B');
    });
  });
});
