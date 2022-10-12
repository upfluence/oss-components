import { getOwner } from '@ember/application';
import Controller from '@ember/controller';
import { action, set } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { countries } from '@upfluence/oss-components/utils/country-codes';
import BaseUploader from '@upfluence/oss-components/services/base-uploader';

class MockUploader extends BaseUploader {
  mode = 'success';

  upload(request, validationRules = []) {
    const validations = this.validate(request, validationRules || []);

    if (!validations.passes) {
      request.onValidationFailure?.(validations);
      return;
    }

    let progressStep = 0;
    const interval = setInterval(() => {
      const progressEvent = new ProgressEvent('progress', { total: 1000, loaded: progressStep });
      request.onProgress?.(progressEvent);
      progressStep += 250;

      if (progressStep === 1000) {
        if (this.mode === 'success') {
          request.onSuccess?.({
            key: 'uploader/foo.png',
            filename: 'Foo.png',
            url: 'https://oss-components.upfluence.co/uploader/foo.png',
            content_type: 'png',
            size: 1000
          });
        } else {
          request.onFailure?.({
            payload: {}
          });
        }

        clearInterval(interval);
        this.mode = 'success';
      }
    }, 1000);
  }

  get url() {
    return 'https://oss-components.upfluence.co';
  }
}

export default class ApplicationController extends Controller {
  @service toast;

  @tracked selectedItems = ['toto'];
  @tracked selectedCountry = null;
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
  @tracked radio1 = true;
  @tracked radio2 = false;

  code4CodeBlock = testScript;
  countries = countries;

  tableDemo = {
    header: [
      { title: 'Title 0' },
      { title: 'Title 1', class: 'upf-table__cell--fixed upf-table__tag-cell' },
      { title: 'Title 2', class: 'upf-table__cell--fixed' },
      { title: 'Title 3', class: 'upf-table__cell--fixed' },
      { title: '', class: 'upf-table__cell--action' }
    ],
    data: [
      { content: 'Content 1' },
      { content: 'Content 2' },
      { content: 'Content 3' },
      { content: 'Content 4', class: 'upf-table__cell--fixed' },
      { content: '', class: 'upf-table__cell--action' }
    ]
  };

  @tracked tabArrayNavTab = [
    { label: 'Tab', icon: 'far fa-thumbs-up' },
    { label: 'Tab2', icon: 'far fa-thumbs-up' },
    { label: 'Tab3' },
    { icon: 'far fa-thumbs-up' },
    { label: 'Tab', icon: 'far fa-thumbs-up', infoCircle: true },
    { label: 'Tab', icon: 'far fa-thumbs-up', infoCircle: true, notificationDot: true },
    { label: 'Tab', icon: 'far fa-thumbs-up', infoCircle: true, notificationDot: true, selected: true },
    { label: 'Tab', icon: 'far fa-thumbs-up', infoCircle: true, notificationDot: true, disabled: true },
    { label: 'Tab', icon: 'far fa-thumbs-up', infoCircle: true, notificationDot: true, selected: true, disabled: true }
  ];

  init() {
    super.init(...arguments);

    const owner = getOwner(this);
    owner.register('service:mock-uploader', MockUploader);
    this.mockUploader = owner.lookup('service:mock-uploader');
  }

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
  onPowerSelectChange(item, operation) {
    console.log('onPowerSelectChange :', item, operation);
  }

  @action
  onPowerSelectSearch(keyword) {
    console.log('onPowerSelectSearch :', keyword);
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

  @action
  onSelectionNavTab(selectedTab) {
    console.log('onSelectionNavTab : ', selectedTab);
    this.tabArrayNavTab.forEach((element) => {
      if (element === selectedTab) {
        set(element, 'selected', true);
      } else {
        set(element, 'selected', false);
      }
    });
  }

  @action
  onUploadSuccess(artifact) {
    console.log('Successfully uploaded', artifact);
  }

  @action
  onRadioBtnChange(radioBtnKey, newValue) {
    set(this, radioBtnKey, newValue);
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
