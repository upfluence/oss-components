import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, setupOnerror, click, findAll, typeIn, triggerKeyEvent, triggerEvent } from '@ember/test-helpers';
import sinon from 'sinon';

module('Integration | Component | o-s-s/currency-input', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.onChange = sinon.stub();
  });

  test('it renders', async function (assert) {
    this.value = 0;
    this.currency = '';
    await render(hbs`<OSS::CurrencyInput @onChange={{this.onChange}} />`);

    assert.dom('.currency-input-container').exists();
  });

  test('The passed @value parameter is properly displayed in the input', async function (assert) {
    await render(hbs`<OSS::CurrencyInput @value="12341234" @onChange={{this.onChange}} />`);

    assert.dom('input').hasValue('12341234');
  });

  test('It properly loads the correct currency when the @currency parameter is defined', async function (assert) {
    await render(hbs`<OSS::CurrencyInput @currency="EUR" @onChange={{this.onChange}} />`);

    assert.dom('.currency-selector').hasText('€');
  });

  test('It displays an error message below the component if @errorMessage is passed', async function (assert) {
    await render(hbs`<OSS::CurrencyInput @onChange={{this.onChange}} @errorMessage="This is an error message" />`);
    assert.dom('.currency-input-container').containsText('This is an error message');
  });

  test('It displays an red border around the component if @errorMessage exists', async function (assert) {
    await render(hbs`<OSS::CurrencyInput @onChange={{this.onChange}} @errorMessage="This is an error message" />`);
    assert.dom('.currency-input-container').hasStyle({ borderColor: 'rgb(27, 30, 33)' });
  });

  module('Currency selector', () => {
    test('Clicking on the currency symbol button opens the currency selector', async function (assert) {
      await render(hbs`<OSS::CurrencyInput @currency="" @value="" @onChange={{this.onChange}} />`);
      await click('.currency-selector');
      assert.dom('.upf-infinite-select').exists();
    });

    test('Selecting a new currency in the Currency selector triggers the onChange method', async function (assert) {
      this.currency = '';
      await render(hbs`<OSS::CurrencyInput @currency={{this.currency}} @value="" @onChange={{this.onChange}} />`);
      await click('.currency-selector');
      await click('.upf-infinite-select__item:nth-child(5)');
      assert.true(this.onChange.calledOnceWithExactly('AUD', 0));
    });

    test('Selecting a new currency in the selector triggers the onChange method', async function (assert) {
      this.currency = '';
      await render(
        hbs`<OSS::CurrencyInput @onlyCurrency={{true}} @currency={{this.currency}} @value="" @onChange={{this.onChange}} />`
      );
      await click('.currency-selector');
      await click('.upf-infinite-select__item:nth-child(5)');
      assert.true(this.onChange.calledOnceWithExactly('AUD', 0));
    });

    test('Typing in the search input filters the results', async function (assert) {
      await render(hbs`<OSS::CurrencyInput @currency="" @value="" @onChange={{this.onChange}} />`);
      await click('.currency-selector');
      assert.dom('.upf-infinite-select').exists();
      await typeIn('.upf-infinite-select input', 'usd');
      const clickableRows = findAll('.upf-infinite-select__item');
      assert.equal(clickableRows.length, 1);
      assert.dom(clickableRows[0]).hasText('$ USD');
    });

    test('Searching by currency symbol works', async function (assert) {
      await render(hbs`<OSS::CurrencyInput @currency="" @value="" @onChange={{this.onChange}} />`);
      await click('.currency-selector');
      assert.dom('.upf-infinite-select').exists();
      await typeIn('.upf-infinite-select input', '€');
      const clickableRows = findAll('.upf-infinite-select__item');
      assert.equal(clickableRows.length, 1);
      assert.dom(clickableRows[0]).hasText('€ EUR');
    });

    test('The passed @currency parameter changes are properly tracked in the input', async function (assert) {
      this.currency = 'USD';
      await render(hbs`<OSS::CurrencyInput @currency={{this.currency}} @value="" @onChange={{this.onChange}} />`);
      assert.dom('.currency-selector').hasText('$');
      this.set('currency', 'EUR');
      assert.dom('.currency-selector').hasText('€');
    });

    test('The currency selection is disabled if @allowCurrencyUpdate is falsy', async function (assert) {
      this.currency = 'USD';
      await render(
        hbs`<OSS::CurrencyInput @currency={{this.currency}} @value="" @onChange={{this.onChange}} @allowCurrencyUpdate={{false}} />`
      );
      assert.dom('.currency-selector .far.fa-chevron-down').doesNotExist();
      await click('.currency-selector');
      assert.dom('.upf-infinite-select').doesNotExist();
    });

    test('Passing the @allowedCurrencies parameter overwrites the selectable options', async function (assert) {
      this.allowedCurrencies = [
        { code: 'USD', symbol: '$' },
        { code: 'EUR', symbol: '€' }
      ];
      await render(hbs`<OSS::CurrencyInput @currency={{this.currency}} @value="" @onChange={{this.onChange}}
                                         @allowedCurrencies={{this.allowedCurrencies}} />`);
      await click('.currency-selector');
      const clickableRows = findAll('.upf-infinite-select__item');
      assert.equal(clickableRows.length, 2);
    });
  });

  module('Currency Input', () => {
    test('Typing numbers in the currency input triggers the onChange method', async function (assert) {
      await render(hbs`<OSS::CurrencyInput @currency="" @value="" @onChange={{this.onChange}} />`);
      await typeIn('input', '8');
      assert.ok(this.onChange.calledOnce);
      assert.dom('input').hasValue('08');
    });

    test('Typing non-numeric characters does not apply changes', async function (assert) {
      await render(hbs`<OSS::CurrencyInput @currency="" @value="" @onChange={{this.onChange}} />`);
      await typeIn('input', '8');
      assert.ok(this.onChange.calledOnce);
      // @ts-ignore
      await triggerKeyEvent('input', 'keydown', 'A', { code: 'a' });
      assert.dom('input').hasValue('08');
    });

    test('Placeholder is correctly displayed when provided', async function (assert) {
      await render(
        hbs`<OSS::CurrencyInput @currency="" @value="" @placeholder="foobar" @onChange={{this.onChange}} />`
      );
      assert.dom('input').hasAttribute('placeholder', 'foobar');
    });
  });

  test('When @onlyCurrency is truthy, only the currency is displayed', async function (assert) {
    await render(hbs`<OSS::CurrencyInput @currency="USD" @onlyCurrency={{true}} @onChange={{this.onChange}} />`);
    assert.dom('.currency-input-container').exists();
    assert.dom('.currency-selector').hasText('$ USD');
    assert.dom('.currency-input input').doesNotExist();
  });

  module('When the paste event is received', function (hooks) {
    hooks.beforeEach(function () {
      this.value = '1234567890';
    });

    test('The value stored in the clipboard is inserted in the input', async function (assert) {
      await render(hbs`<OSS::CurrencyInput @onChange={{this.onChange}} @value={{this.value}} />`);
      assert.dom('input').hasValue('1234567890');
      await triggerEvent('input', 'paste', {
        clipboardData: {
          getData: sinon.stub().returns('123')
        }
      });

      assert.dom('input').hasValue('1234567890123');
    });

    test('The non-numeric characters are escaped', async function (assert) {
      await render(hbs`<OSS::CurrencyInput @onChange={{this.onChange}} @value={{this.value}} />`);
      assert.dom('input').hasValue('1234567890');
      await triggerEvent('input', 'paste', {
        clipboardData: {
          getData: sinon.stub().returns('1withletter0')
        }
      });

      assert.dom('input').hasValue('123456789010');
    });

    test('When selection is applied, it replaces the selection', async function (assert) {
      await render(hbs`<OSS::CurrencyInput @onChange={{this.onChange}} @value={{this.value}} />`);
      assert.dom('input').hasValue('1234567890');
      let input = document.querySelector('input.ember-text-field') as HTMLInputElement;
      input.setSelectionRange(4, 6);
      await triggerEvent('input', 'paste', {
        clipboardData: {
          getData: sinon.stub().returns('0')
        }
      });

      assert.dom('input').hasValue('123407890');
    });
  });

  test('It throws an error if @onChange is not passed', async function (assert) {
    setupOnerror((err: any) => {
      assert.equal(
        err.message,
        'Assertion Failed: [component][OSS::CurrencyInput] The parameter @onChange of type function is mandatory'
      );
    });
    await render(hbs`<OSS::CurrencyInput />`);
  });
});
