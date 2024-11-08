import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

import { countries } from '@upfluence/oss-components/utils/country-codes';

export default class Input extends Controller {
  @tracked shopUrl = '';
  @tracked inputValue = '';
  @tracked textAreaValue: string = '42';
  @tracked superHeroes = ['Iron Man', 'Thor', 'Loki', 'Hulk'];
  @tracked items = [
    { name: 'foo', label: 'foo' },
    { name: 'bar', label: 'bar' }
  ];
  @tracked selectedItem = this.items[0];
  @tracked emailInputValue: string = '';
  @tracked password: string = '';
  @tracked shopifyDomain: string = '';
  @tracked selectedCountry: any = null;
  @tracked selectedProvince: any = null;
  @tracked phonePrefix: string = '+33';
  @tracked phoneNumber: string = '782828282';
  @tracked currency: string = 'EUR';
  @tracked currencyValue: number = 42.13;
  @tracked currencyOnly = '';

  countries = countries;
  allowedCurrencies = [
    { code: 'USD', symbol: '$' },
    { code: 'EUR', symbol: '€' }
  ];

  subdomainRegex = /^[a-zA-Z0-9]+[a-zA-Z0-9-._]*[a-zA-Z0-9]+$/;
  urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/;

  @action
  handleTextAreaInput(newValue: string) {
    console.log('new value = ' + newValue);
    this.textAreaValue = newValue;
  }

  @action
  updateSuperHeroes(newArray: []) {
    console.log('updateSuperHeroes', newArray);
    this.superHeroes = newArray;
  }

  @action
  onSelect(value: { name: string; label: string }) {
    this.selectedItem = value;
  }

  @action
  onPowerSelectChange(item: string, operation: string) {
    console.log('onPowerSelectChange :', item, operation);
  }

  @action
  onPowerSelectSearch(keyword: string) {
    console.log('onPowerSelectSearch :', keyword);
  }

  @action
  onEmailInputChange(value: string) {
    console.log('onEmailInputChange', value);
  }

  @action
  onPasswordValidation(isValid: boolean) {
    console.log('isValid ? ', isValid);
  }

  @action
  onUrlInputChange(newValue: string, isValid: boolean) {
    console.log('newValue : ' + newValue);
    console.log('Value test against regext valid ? ' + isValid);
    if (isValid) {
      this.shopUrl = newValue.replace('https://', '').replace('http://', '');
    }
  }

  @action
  onCountrySelected(value: any) {
    console.log('selected country value : ', value);
    this.selectedCountry = value;
  }

  @action
  onProvinceSelected(value: any) {
    console.log('selected province value : ', value);
    this.selectedProvince = value;
  }

  @action
  onPhoneNumberChange(prefix: string, phoneNumber: string) {
    console.log('onPhoneNumberChange', prefix, phoneNumber);
    this.phonePrefix = prefix;
    this.phoneNumber = phoneNumber;
  }

  @action
  onCurrencyInputChange(currency: string, value: number) {
    console.log('onCurrencyInputChange', currency, value);
    this.currency = currency;
    this.currencyValue = value;
  }

  @action
  onCurrencyOnlyChange(currency: any) {
    console.log('onCurrencyOnlyChange', currency);
    this.currencyOnly = currency;
  }

  // @tracked displayModal: boolean = false;
  // @tracked displaySidePanel: boolean = false;

  // @action
  // openModal(): void {
  //   this.displayModal = true;
  // }

  // @action
  // closeModal(): void {
  //   this.displayModal = false;
  // }

  // @action
  // openSidePanel(event: PointerEvent): void {
  //   event?.stopPropagation();

  //   this.displaySidePanel = true;
  // }

  // @action
  // closeSidePanel(): void {
  //   this.displaySidePanel = false;
  // }
}
