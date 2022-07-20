import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { countries } from '@upfluence/oss-components/utils/country-codes';

export default class ApplicationController extends Controller {
  @service toast;

  @tracked selectedItems = ['toto'];
  @tracked superHeroes = ['Iron Man', 'Thor', 'Loki', 'Hulk'];
  @tracked loading = false;
  @tracked phonePrefix = '+33';
  @tracked phoneNumber = '782828282';
  @tracked currency = 'EUR';
  @tracked currencyValue = 42.13;
  @tracked showModal = false;
  @tracked items = [
    { name: 'foo', label: 'foo' },
    { name: 'bar', label: 'bar' }
  ];
  @tracked selectedItem = this.items[0];
  @tracked currencyOnly = null;

  code4CodeBlock = testScript;
  countries = countries;

  @action
  openModal(e) {
    e.stopPropagation();
    this.showModal = true;
  }

  @action
  closeModal() {
    this.showModal = false;
  }

  @action
  onCountrySelected(value) {
    console.log('selected country value : ', value);
    this.selectedCountry = value;
  }

  @action
  onSelect(value) {
    this.selectedItem = value;
  }

  @action
  updateSuperHeroes(newArray) {
    console.log('updateSuperHeroes', newArray);
    this.superHeroes = newArray;
  }

  @action
  onProvinceSelected(value) {
    console.log('selected province value : ', value);
  }

  @action
  onCurrencyInputChange(currency, value) {
    console.log('onCurrencyInputChange', currency, value);
    this.currency = currency;
    this.currencyValue = value;
  }

  @action
  onCurrencyOnlyChange(currency) {
    this.currencyOnly = currency;
  }

  @action
  onCrossChipClick() {
    console.log('onCrossChipClick');
  }

  @action
  onPhoneNumberChange(prefix, phoneNumber) {
    console.log('onPhoneNumberChange', prefix, phoneNumber);
    this.phonePrefix = prefix;
    this.phoneNumber = phoneNumber;
  }

  @action
  triggerToast(type) {
    this.toast[type](`I am the ${type} subtitle`, 'Title');
  }

  @action
  toggleLoading() {
    this.loading = !this.loading;
  }

  @action
  destructiveAction(model, defer) {
    console.log('Destructive action triggered');
    console.log('model');
    defer.resolve();
  }

  @action
  loadingAction(_, defer) {
    setTimeout(() => {
      defer.resolve();
    }, 1000);
  }

  @action
  countDownAction() {
    console.log('countDownAction');
  }
}

const testScript = `import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | o-s-s/code-block', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    assert.equal(this.element.textContent.trim(), '');
    assert.equal(this.element.textContent.trim(), 'template block text');
  });

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    assert.equal(this.element.textContent.trim(), '');
    assert.equal(this.element.textContent.trim(), 'template block text');
  });

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    assert.equal(this.element.textContent.trim(), '');
    assert.equal(this.element.textContent.trim(), 'template block text');
  });

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    assert.equal(this.element.textContent.trim(), '');
    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});`;
