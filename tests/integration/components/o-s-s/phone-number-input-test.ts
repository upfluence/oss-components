import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, setupOnerror, triggerKeyEvent } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import click from '@ember/test-helpers/dom/click';
import sinon from 'sinon';
import findAll from '@ember/test-helpers/dom/find-all';
import typeIn from '@ember/test-helpers/dom/type-in';
import settled from '@ember/test-helpers/settled';

module('Integration | Component | o-s-s/phone-number', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.onChange = () => {};
    await render(hbs`<OSS::PhoneNumberInput @prefix="" @number="" @onChange={{this.onChange}} />`);

    assert.dom('.phone-number-container').exists();
  });

  test('The passed @number parameter is properly displayed in the input', async function (assert) {
    this.onChange = () => {};
    await render(hbs`<OSS::PhoneNumberInput @prefix="" @number="12341234" @onChange={{this.onChange}} />`);

    assert.dom('input').hasValue('12341234');
  });

  test('It properly loads the correct country when the @prefix parameter is defined', async function (assert) {
    this.onChange = () => {};
    await render(hbs`<OSS::PhoneNumberInput @prefix="+33" @number="" @onChange={{this.onChange}} />`);

    assert.dom('.country-selector .fflag.fflag-FR').exists();
  });

  test('It throws an error if @prefix is not passed', async function (assert) {
    setupOnerror((err: any) => {
      assert.equal(
        err.message,
        'Assertion Failed: [component][OSS::PhoneNumberInput] The parameter @prefix of type string is mandatory'
      );
    });
    this.onChange = () => {};
    await render(hbs`<OSS::PhoneNumberInput @number="" @onChange={{this.onChange}} />`);
    await settled();
  });

  test('It throws an error if @number is not passed', async function (assert) {
    setupOnerror((err: any) => {
      assert.equal(
        err.message,
        'Assertion Failed: [component][OSS::PhoneNumberInput] The parameter @number of type string is mandatory'
      );
    });
    this.onChange = () => {};
    await render(hbs`<OSS::PhoneNumberInput @prefix="" @onChange={{this.onChange}} />`);
    await settled();
  });

  test('It throws an error if @onChange is not passed', async function (assert) {
    setupOnerror((err: any) => {
      assert.equal(
        err.message,
        'Assertion Failed: [component][OSS::PhoneNumberInput] The parameter @onChange of type function is mandatory'
      );
    });
    this.onChange = () => {};
    await render(hbs`<OSS::PhoneNumberInput @number="" @prefix="" />`);
    await settled();
  });

  module('Country selector', () => {
    test('Clicking on the Flag button opens the country selector', async function (assert) {
      this.onChange = () => {};
      await render(hbs`<OSS::PhoneNumberInput @prefix="" @number="" @onChange={{this.onChange}} />`);

      await click('.country-selector');
      assert.dom('.upf-infinite-select').exists();
    });

    test('Selecting a new country in the Country selector triggers the onChange method', async function (assert) {
      this.onChange = sinon.spy();
      await render(hbs`<OSS::PhoneNumberInput @prefix="" @number="" @onChange={{this.onChange}} />`);

      await click('.country-selector');
      const clickableRows = findAll('.upf-infinite-select__item');
      await click(clickableRows[4]);
      assert.ok(this.onChange.calledOnce);
      assert.dom('.country-selector .fflag.fflag-CH').exists();
    });

    test('Typing in the search input filters the results', async function (assert) {
      this.onChange = sinon.spy();
      await render(hbs`<OSS::PhoneNumberInput @prefix="" @number="" @onChange={{this.onChange}} />`);

      await click('.country-selector');
      assert.dom('.upf-infinite-select').exists();
      await typeIn('.upf-infinite-select input', 'fran');
      const clickableRows = findAll('.upf-infinite-select__item');
      assert.equal(clickableRows.length, 1);
      assert.dom(clickableRows[0]).hasText('France (+33)');
    });

    test('Searching by Country Code Prefix works', async function (assert) {
      this.onChange = sinon.spy();
      await render(hbs`<OSS::PhoneNumberInput @prefix="" @number="" @onChange={{this.onChange}} />`);

      await click('.country-selector');
      assert.dom('.upf-infinite-select').exists();
      await typeIn('.upf-infinite-select input', '33');
      const clickableRows = findAll('.upf-infinite-select__item');
      assert.equal(clickableRows.length, 2);
      assert.dom(clickableRows[0]).hasText('France (+33)');
    });
  });

  module('Phone Number Input', () => {
    test('Typing numbers in the Phone input triggers the onChange method', async function (assert) {
      this.onChange = sinon.spy();
      await render(hbs`<OSS::PhoneNumberInput @prefix="" @number="" @onChange={{this.onChange}} />`);
      await typeIn('input', '8');
      assert.ok(this.onChange.calledOnce);
      assert.dom('input').hasValue('8');
    });

    test('Typing non-numeric characters does not apply changes', async function (assert) {
      this.onChange = sinon.spy();
      await render(hbs`<OSS::PhoneNumberInput @prefix="" @number="" @onChange={{this.onChange}} />`);
      await typeIn('input', '8');
      assert.ok(this.onChange.calledOnce);
      // @ts-ignore
      await triggerKeyEvent('input', 'keydown', 'A', { code: 'a' });
      assert.dom('input').hasValue('8');
    });

    test('it displays an error if the number contains a + symbol', async function (assert) {
      this.prefix = '+1';
      this.number = '';

      this.onChange = (prefix: string, number: number) => {
        this.set('prefix', prefix);
        this.set('number', number);
      };
      this.onValidation = sinon.spy();

      await render(
        hbs`<OSS::PhoneNumberInput @prefix={{this.prefix}} @number={{this.number}} @onChange={{this.onChange}} @validates={{this.onValidation}} />`
      );
      await typeIn('input', '+1');
      await settled();

      assert.ok(this.onValidation.calledWithExactly(false));
      assert.dom('.font-color-error-500').exists();
    });
  });
});
