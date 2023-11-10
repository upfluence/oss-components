import { getOwner } from '@ember/application';
import Controller from '@ember/controller';
import { action, set } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { countries } from '@upfluence/oss-components/utils/country-codes';
import BaseUploader from '@upfluence/oss-components/services/base-uploader';

export class MockUploader extends BaseUploader {
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
  @tracked inputValue = '';
  @tracked shopifyDomain = '';
  @tracked shopUrl = '';
  @tracked testText = '';
  @tracked currency = 'EUR';
  @tracked currencyValue = 42.13;
  @tracked numberValue = 42;
  @tracked showModal = false;
  @tracked showSplitModal = false;
  @tracked items = [
    { name: 'foo', label: 'foo' },
    { name: 'bar', label: 'bar' }
  ];
  @tracked selectedItem = this.items[0];
  @tracked currencyOnly = null;
  @tracked radio1 = true;
  @tracked radio2 = false;
  @tracked isChecked = true;
  @tracked togglable = false;
  @tracked emailInputValue = '';
  @tracked revealed = false;
  @tracked starRatingValue = 3;

  @tracked media = [
    {
      key: 'article',
      active: false
    },
    {
      key: 'pin',
      active: false
    },
    {
      key: 'tweet',
      active: false
    },
    {
      key: 'instagram_media',
      active: false
    },
    {
      key: 'story',
      active: false
    },
    {
      key: 'youtube_video',
      active: false
    },
    {
      key: 'twitch_stream',
      active: false
    },
    {
      key: 'tiktok_video',
      active: false
    },
    {
      key: 'facebook_status',
      active: false
    }
  ];

  code4CodeBlock = testScript;
  countries = countries;

  subdomainRegex = /^[a-zA-Z0-9]+[a-zA-Z0-9-._]*[a-zA-Z0-9]+$/;
  urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/;

  @tracked selectedToggle = 'second';

  toggles = [
    {
      value: 'first',
      label: 'First'
    },
    {
      value: 'second',
      label: 'Second'
    }
  ];

  @action
  onRevealEmailError() {
    console.log('on reveal email error');
    return new Promise((res, rej) => {
      setTimeout(() => {
        this.toast.error('There was an error retrieving the email address. Try again later.', 'Error');
        return rej('failed');
      }, 1000);
    });
  }

  @action
  onRevealEmailSuccess() {
    console.log('on reveal email success');
    return new Promise((res) => {
      setTimeout(() => {
        this.revealed = true;
        return res('success');
      }, 1000);
    });
  }

  @action
  onRemove() {
    console.log('on remove');
    return new Promise((res) => {
      setTimeout(() => {
        this.revealed = true;
        return res('success');
      }, 1000);
    });
  }

  @action
  redirectTo(route) {
    console.log('Redirect to', route);
  }

  @action
  toggleMedia(key) {
    console.log('toggled key', key);

    const index = this.media.findIndex((el) => el.key === key);
    set(this.media[index], 'active', !this.media[index].active);
  }

  @action
  triggerSelection(value) {
    console.log('selected toggle value : ', value);

    this.selectedToggle = value;
  }

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

  // eslint-disable-next-line ember/classic-decorator-hooks
  init() {
    super.init(...arguments);

    const owner = getOwner(this);
    owner.register('service:mock-uploader', MockUploader);
    this.mockUploader = owner.lookup('service:mock-uploader');
  }

  @action
  onRatingClick(rating) {
    console.log('You have rated with: ' + rating);
  }

  @action
  handleNumberInput(newValue) {
    console.log('new value = ' + newValue);
    this.numberValue = newValue;
  }

  @action
  openModal(e) {
    e.stopPropagation();
    this.showModal = true;
  }

  @action updatetext(value) {
    this.testText = value;
  }

  @action
  openSplitModal(e) {
    e.stopPropagation();
    this.showSplitModal = true;
  }

  @action
  closeModal() {
    this.showModal = false;
  }

  @action
  closeSplitModal() {
    this.showSplitModal = false;
  }

  @action
  onCountrySelected(value) {
    console.log('selected country value : ', value);
    this.selectedCountry = value.id;
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
  onToggle(value) {
    this.togglable = value;
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
  onEmailInputChange(value) {
    console.log('onEmailInputChange', value);
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

  @action
  onUrlInputChange(newValue, isValid) {
    console.log('newValue : ' + newValue);
    console.log('Value test against regext valid ? ' + isValid);
    if (isValid) {
      this.shopUrl = newValue.replace('https://', '').replace('http://', '');
    }
  }

  @action
  onCheck(value) {
    this.isChecked = value;
  }

  @action
  onAttributePanelSave() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 300);
    });
  }

  @action
  onAttributePanelCancel() {
    console.log('Attributes panel cancel');
  }

  @action
  onAttributePanelEdit(mode) {
    console.log(`Attributes panel edition ${mode}`);
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
