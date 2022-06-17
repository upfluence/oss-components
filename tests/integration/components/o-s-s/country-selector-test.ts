import hbs from 'htmlbars-inline-precompile';
import setupOnerror from '@ember/test-helpers/setup-onerror';
import settled from '@ember/test-helpers/settled';
import sinon from 'sinon';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, findAll, render } from '@ember/test-helpers';
import { countries } from '@upfluence/oss-components/utils/country-codes';
import { set } from '@ember/object';

module('Integration | Component | o-s-s/country-selector', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.value = '';
    this.onchange = (value: any) => {
      set(this, 'value', value.alpha2);
    };
    this.countries = countries;
    this.provinces = [
      {
        name: 'Alabama',
        code: 'AL'
      },
      {
        name: 'Alaska',
        code: 'AK'
      },
      {
        name: 'American Samoa',
        code: 'AS'
      }
    ];
  });

  test('it renders', async function (assert) {
    await render(hbs`<OSS::CountrySelector @onChange={{this.onchange}} @sourceList={{this.countries}} />`);

    assert.ok(true);
  });

  module('error management', () => {
    test('it throws an error if @sourceList is not provided', async function (assert) {
      setupOnerror((err: any) => {
        assert.equal(
          err.message,
          '[component][OSS::CountrySelector] The parameter @sourceList of type object is mandatory'
        );
      });
      await render(hbs`<OSS::CountrySelector @onChange={{this.onchange}} />`);
      await settled();
    });

    test('it throws an error if @onChange is not provided', async function (assert) {
      setupOnerror((err: any) => {
        assert.equal(err.message, '[component][OSS::CountrySelector] The @onChange parameter is mandatory');
      });
      await render(hbs`<OSS::CountrySelector @sourceList={{this.countries}} />`);
      await settled();
    });
  });

  test('When clicking on the input, the dropdown menu opens', async function (assert) {
    await render(hbs`<OSS::CountrySelector @onChange={{this.onchange}} @sourceList={{this.countries}} />`);
    await click('[data-control-name="country-selector-input"]');
    assert.dom('.upf-infinite-select').exists();
  });

  module('If @value is passed', function (hooks) {
    hooks.beforeEach(function () {
      this.initValue = {
        id: 'FR',
        alpha2: 'FR',
        alpha3: 'FRA',
        countryCallingCodes: ['33'],
        currencies: ['EUR'],
        name: 'France',
        showOnTop: true
      };
    });
    test('If the value matches an entry from the sourceList, then the input is set to the value', async function (assert) {
      await render(
        hbs`<OSS::CountrySelector @onChange={{this.onchange}} @sourceList={{this.countries}} @value={{this.initValue.alpha2}} />`
      );
      assert.dom('[data-control-name="country-selector-input"]').hasText('France');
    });
    test('If the value matches an entry from the sourceList, the @onChange function is triggered', async function (assert) {
      this.onchange = sinon.spy();
      await render(
        hbs`<OSS::CountrySelector @onChange={{this.onchange}} @sourceList={{this.countries}} @value={{this.initValue.alpha2}} />`
      );
      assert.ok(this.onchange.calledOnceWith(this.initValue));
    });
  });

  module('Dropdown menu', () => {
    test('It displays all items from the @sourceList parameter', async function (assert) {
      await render(hbs`<OSS::CountrySelector @onChange={{this.onchange}} @sourceList={{this.countries}} />`);
      await click('[data-control-name="country-selector-input"]');
      const rows = findAll('.upf-infinite-select__item');
      assert.equal(rows.length, this.countries.length);
    });

    test('if @sourceList contain ids, then country icons are displayed', async function (assert) {
      await render(hbs`<OSS::CountrySelector @onChange={{this.onchange}} @sourceList={{this.countries}} />`);
      await click('[data-control-name="country-selector-input"]');
      assert.dom('.upf-infinite-select__item' + ' .fflag.fflag-US').exists();
    });
  });

  test('If @sourceList contains ids, then the country placeholder is displayed', async function (assert) {
    await render(hbs`<OSS::CountrySelector @onChange={{this.onchange}} @sourceList={{this.countries}} />`);
    assert.dom('[data-control-name="country-selector-input"]').hasText('Select your country');
  });

  test('if sourceList does not contain ids, then the placeholder is for provinces', async function (assert) {
    await render(hbs`<OSS::CountrySelector @onChange={{this.onchange}} @sourceList={{this.provinces}} />`);
    assert.dom('[data-control-name="country-selector-input"]').hasText('Select your province/state');
  });

  module('When clicking on an item', () => {
    test('When selecting an item, the dropdown is closed', async function (assert) {
      await render(hbs`<OSS::CountrySelector @onChange={{this.onchange}} @sourceList={{this.provinces}} />`);
      await click('[data-control-name="country-selector-input"]');
      await click('.upf-infinite-select__item:nth-child(1)');
      assert.dom('.upf-infinite-select').doesNotExist();
    });

    test('When clicking outside of the dropdown, the dropdown is closed', async function (assert) {
      await render(hbs`<OSS::CountrySelector @onChange={{this.onchange}} @sourceList={{this.provinces}} />`);
      await click('[data-control-name="country-selector-input"]');
      await click('[data-control-name="country-selector-input"]');
      assert.dom('.upf-infinite-select').doesNotExist();
    });

    test('the input is updated with the value', async function (assert) {
      await render(
        hbs`<OSS::CountrySelector @value={{this.value}} @onChange={{this.onchange}} @sourceList={{this.countries}} />`
      );
      await click('[data-control-name="country-selector-input"]');
      await click('.upf-infinite-select__item:nth-child(1)');
      assert.dom('[data-control-name="country-selector-input"]').hasText('United States');
    });

    test('the @onChange method is triggered with the selected value', async function (assert) {
      this.onchange = sinon.spy();
      await render(hbs`<OSS::CountrySelector @onChange={{this.onchange}} @sourceList={{this.countries}} />`);
      await click('[data-control-name="country-selector-input"]');
      await click('.upf-infinite-select__item:nth-child(2)');
      assert.ok(
        this.onchange.calledWith({
          id: 'FR',
          alpha2: 'FR',
          alpha3: 'FRA',
          countryCallingCodes: ['33'],
          currencies: ['EUR'],
          name: 'France',
          showOnTop: true
        })
      );
    });

    test('If the component is using Countries as @sourceList, the flag icon is visible in the input', async function (assert) {
      await render(
        hbs`<OSS::CountrySelector @value={{this.value}} @onChange={{this.onchange}} @sourceList={{this.countries}} />`
      );
      await click('[data-control-name="country-selector-input"]');
      await click('.upf-infinite-select__item:nth-child(1)');
      assert.dom('[data-control-name="country-selector-input"]').hasText('United States');
      assert.dom('[data-control-name="country-selector-input"] .fflag.fflag-US').exists();
    });

    test('If the component is using Provinces as @sourceList, the flag icon is not visible in the input', async function (assert) {
      this.province = '';
      this.onProvinceChange = (value: any) => {
        set(this, 'province', value.name);
      };
      await render(
        hbs`<OSS::CountrySelector @value={{this.province}} @onChange={{this.onProvinceChange}} @sourceList={{this.provinces}} />`
      );
      await click('[data-control-name="country-selector-input"]');
      await click('.upf-infinite-select__item:nth-child(1)');
      assert.dom('[data-control-name="country-selector-input"]').hasText('Alabama');
      assert.dom('[data-control-name="country-selector-input"] .fflag.fflag-US').doesNotExist();
    });
  });
});
