import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, setupOnerror, settled, click, findAll, typeIn, triggerKeyEvent } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import sinon from 'sinon';

module('Integration | Component | o-s-s/currency-input', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.onChange = () => {};
    this.value = 0;
    this.currency = '';
    await render(hbs`<OSS::CurrencyInput @onChange={{this.onChange}} />`);

    assert.dom('.currency-input-container').exists();
  });

  test('The passed @value parameter is properly displayed in the input', async function (assert) {
    this.onChange = () => {};
    await render(hbs`<OSS::CurrencyInput @value="12341234" @onChange={{this.onChange}} />`);

    assert.dom('input').hasValue('12341234');
  });

  test('It properly loads the correct currency when the @currency parameter is defined', async function (assert) {
    this.onChange = () => {};
    await render(hbs`<OSS::CurrencyInput @currency="EUR" @onChange={{this.onChange}} />`);

    assert.dom('.currency-selector').hasText('€');
  });

  test('It throws an error if @onChange is not passed', async function (assert) {
    setupOnerror((err: any) => {
      assert.equal(
        err.message,
        'Assertion Failed: [component][OSS::CurrencyInput] The parameter @onChange of type function is mandatory'
      );
    });
    this.onChange = () => {};
    await render(hbs`<OSS::CurrencyInput />`);
    await settled();
  });

  module('Currency selector', () => {
    test('Clicking on the currency symbol button opens the currency selector', async function (assert) {
      this.onChange = () => {};
      await render(hbs`<OSS::CurrencyInput @currency="" @value="" @onChange={{this.onChange}} />`);
      await click('.currency-selector');
      assert.dom('.upf-infinite-select').exists();
    });
    test('Selecting a new currency in the Currency selector triggers the onChange method', async function (assert) {
      this.currency = '';
      this.onChange = (currency: string, _: number) => {
        assert.equal(currency, 'AUD');
        this.set('currency', currency);
      }
      sinon.spy(this.onChange);
      await render(hbs`<OSS::CurrencyInput @currency={{this.currency}} @value="" @onChange={{this.onChange}} />`);
      await click('.currency-selector');
      const clickableRows = findAll('.upf-infinite-select__item');
      await click(clickableRows[4]);
      assert.dom('.currency-selector').hasText('A$');
    });
    test('Typing in the search input filters the results', async function (assert) {
      this.onChange = sinon.spy();
      await render(hbs`<OSS::CurrencyInput @currency="" @value="" @onChange={{this.onChange}} />`);
      await click('.currency-selector');
      assert.dom('.upf-infinite-select').exists();
      await typeIn('.upf-infinite-select input', 'usd');
      const clickableRows = findAll('.upf-infinite-select__item');
      assert.equal(clickableRows.length, 1);
      assert.dom(clickableRows[0]).hasText('$ USD');
    });
    test('Searching by currency symbol works', async function (assert) {
      this.onChange = sinon.spy();
      await render(hbs`<OSS::CurrencyInput @currency="" @value="" @onChange={{this.onChange}} />`);
      await click('.currency-selector');
      assert.dom('.upf-infinite-select').exists();
      await typeIn('.upf-infinite-select input', '€');
      const clickableRows = findAll('.upf-infinite-select__item');
      assert.equal(clickableRows.length, 1);
      assert.dom(clickableRows[0]).hasText('€ EUR');
    });
    test('The passed @currency parameter changes are properly tracked in the input', async function (assert) {
      this.onChange = () => {};
      this.currency = 'USD';
      await render(hbs`<OSS::CurrencyInput @currency={{this.currency}} @value="" @onChange={{this.onChange}} />`);
      assert.dom('.currency-selector').hasText('$');
      this.set('currency', 'EUR')
      assert.dom('.currency-selector').hasText('€');
    });
  });

  module('Currency Input', () => {
    test('Typing numbers in the currency input triggers the onChange method', async function (assert) {
      this.onChange = sinon.spy();
      await render(hbs`<OSS::CurrencyInput @currency="" @value="" @onChange={{this.onChange}} />`);
      await typeIn('input', '8');
      assert.ok(this.onChange.calledOnce);
      assert.dom('input').hasValue('08');
    });

    test('Typing non-numeric characters does not apply changes', async function (assert) {
      this.onChange = sinon.spy();
      await render(hbs`<OSS::CurrencyInput @currency="" @value="" @onChange={{this.onChange}} />`);
      await typeIn('input', '8');
      assert.ok(this.onChange.calledOnce);
      // @ts-ignore
      await triggerKeyEvent('input', 'keydown', 'A', { code: 'a' });
      assert.dom('input').hasValue('08');
    });
  });
});
