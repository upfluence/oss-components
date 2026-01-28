import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

import { countries, type CountryData } from '@upfluence/oss-components/utils/country-codes';
import type { Feedback, FormInstance } from '@upfluence/oss-components/services/form-manager';
import { isBlank } from '@ember/utils';
import type { ContextMenuItem } from '@upfluence/oss-components/components/o-s-s/context-menu/panel';
import { ensureSafeComponent } from '@embroider/util';

export default class Input extends Controller {
  @tracked shopUrl: string = '';
  @tracked inputValue: string = '';
  @tracked searchFieldValue: string = '';
  @tracked textAreaValue: string = '42';
  @tracked superHeroes: string[] = [
    'Iron Man',
    'Thor',
    'Loki',
    'Hulk',
    'Captain America',
    'Black Widow',
    'Hawkeye',
    'Vision',
    'Scarlet Witch',
    'Doctor Strange',
    'Spiderman',
    'Black Panther',
    'Captain Marvel'
  ];
  @tracked items: { name: string; label: string; groupKey?: string }[] = [
    { name: 'foo', label: 'foo' },
    { name: 'bar', label: 'bar' },
    { name: 'banana', label: 'banana', groupKey: 'fruit' },
    { name: 'lettuce', label: 'lettuce', groupKey: 'vegetable' },
    { name: 'orange', label: 'orange', groupKey: 'fruit' },
    { name: 'carrot', label: 'carrot', groupKey: 'vegetable' },
    { name: 'apple', label: 'apple', groupKey: 'fruit' },
    { name: 'spinach', label: 'spinach', groupKey: 'vegetable' }
  ];
  @tracked selectedItem: { name: string; label: string } | undefined = this.items[0];
  @tracked emailInputValue: string = '';
  @tracked password: string = '';
  @tracked shopifyDomain: string = '';
  @tracked selectedCountry: CountryData | null = null;
  @tracked selectedProvince: { name: string; code: string } | null = null;
  @tracked phonePrefix: string = '+33';
  @tracked phoneNumber: string = '782828282';
  @tracked currency: string = 'EUR';
  @tracked currencyValue: number = 42.13;
  @tracked currencyOnly: string = '';
  @tracked formInstance?: FormInstance;
  @tracked formFieldValue: string = '';

  @tracked declare referenceTarget: HTMLElement;
  @tracked declare contextMenuPanel: HTMLElement;
  @tracked displayContextMenuPanel: boolean = false;

  subMenu2 = [
    {
      icon: { icon: 'fa-arrow-progress' },
      title: 'First',
      action: () => {
        console.log('click on first');
      }
    },
    {
      icon: { icon: 'fa-arrow-progress' },
      title: 'Second',
      action: () => {
        console.log('click on second');
      }
    },
    {
      icon: { icon: 'fa-arrow-progress' },
      title: 'Third',
      action: () => {
        console.log('click on third');
      }
    }
  ];

  otherItem = {
    icon: { icon: 'fa-arrow-progress' },
    title: 'Other',
    groupKey: 'other',
    action: () => {
      console.log('click on other');
    }
  };

  subMenu1 = [
    {
      icon: { icon: 'fa-arrow-progress' },
      title: 'First sub action',
      items: this.subMenu2,
      groupKey: 'actions',
      action: () => {
        console.log('click on first');
      }
    },
    {
      prefixIcon: { icon: 'fa-arrow-progress' },
      title: 'Second sub action',
      items: this.subMenu2,
      groupKey: 'actions',
      action: () => {
        console.log('click on second');
      }
    },
    this.otherItem,
    this.otherItem,
    this.otherItem,
    this.otherItem,
    this.otherItem,
    this.otherItem,
    this.otherItem
  ];

  @tracked customContextMenuItems: ContextMenuItem[] = [
    {
      prefixIcon: { icon: 'fa-arrow-progress' },
      title: 'Move to next step',
      items: this.subMenu1,
      // selected: true,
      groupKey: 'actions',
      action: () => {
        console.log('click on move to next step');
      }
    },
    {
      prefixIcon: { icon: 'fa-paper-plane' },
      title: 'Direct action',
      groupKey: 'actions',
      action: () => {
        console.log('click on direct action');
      }
    },
    {
      prefixIcon: { icon: 'fa-paper-plane' },
      title: 'Custom action',
      groupKey: 'custom',
      rowRenderer: ensureSafeComponent('panel/example-row', this),
      action: () => {
        console.log('click on direct action');
      }
    },
    {
      prefixIcon: { icon: 'fa-trash' },
      title: 'Delete',
      groupKey: 'overall',
      action: () => {
        console.log('click on delete');
      }
    }
  ];

  countries: CountryData[] = countries;
  allowedCurrencies: { code: string; symbol: string }[] = [
    { code: 'USD', symbol: '$' },
    { code: 'EUR', symbol: '€' }
  ];

  subdomainRegex: RegExp = /^[a-zA-Z0-9]+[a-zA-Z0-9-._]*[a-zA-Z0-9]+$/;
  urlRegex: RegExp = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/;

  @action
  handleTextAreaInput(newValue: string): void {
    console.log('new value = ' + newValue);
    this.textAreaValue = newValue;
  }

  @action
  updateSuperHeroes(newArray: []): void {
    console.log('updateSuperHeroes', newArray);
    this.superHeroes = newArray;
  }

  @action
  onSelect(value: { name: string; label: string }): void {
    this.selectedItem = value;
  }

  @action
  onInfiniteSelectSearch(keyword: string): void {
    console.log('onInfiniteSelectSearch :', keyword);
  }

  @action
  onInfiniteSelectChange(item: string, operation: string): void {
    console.log('onInfiniteSelectChange :', item, operation);
  }

  @action
  onPowerSelectChange(item: string, operation: string): void {
    console.log('onPowerSelectChange :', item, operation);
  }

  @action
  onPowerSelectSearch(keyword: string): void {
    console.log('onPowerSelectSearch :', keyword);
  }

  @action
  onEmailInputChange(value: string): void {
    console.log('onEmailInputChange', value);
  }

  @action
  onPasswordValidation(isValid: boolean): void {
    console.log('isValid ? ', isValid);
  }

  @action
  onUrlInputChange(newValue: string, isValid: boolean): void {
    console.log('newValue : ' + newValue);
    console.log('Value test against regexp valid ? ' + isValid);
    if (isValid) {
      this.shopUrl = newValue.replace('https://', '').replace('http://', '');
    }
  }

  @action
  onCountrySelected(value: CountryData): void {
    console.log('selected country value : ', value);
    this.selectedCountry = value;
  }

  @action
  onProvinceSelected(value: { name: string; code: string }): void {
    console.log('selected province value : ', value);
    this.selectedProvince = value;
  }

  @action
  onPhoneNumberChange(prefix: string, phoneNumber: string): void {
    console.log('onPhoneNumberChange', prefix, phoneNumber);
    this.phonePrefix = prefix;
    this.phoneNumber = phoneNumber;
  }

  @action
  onCurrencyInputChange(currency: string, value: number): void {
    console.log('onCurrencyInputChange', currency, value);
    this.currency = currency;
    this.currencyValue = value;
  }

  @action
  onCurrencyOnlyChange(currency: string): void {
    console.log('onCurrencyOnlyChange', currency);
    this.currencyOnly = currency;
  }

  @action
  onSearchFieldChange(value: string): void {
    this.searchFieldValue = value;
  }

  @action
  onFormSubmit(): void {
    console.log('submitted form instance:', this.formInstance, ' with field value: ', this.formFieldValue);
  }

  @action
  onFormSetup(instance: FormInstance): void {
    this.formInstance = instance;
  }

  @action
  validateFormField(): Feedback | undefined {
    if (isBlank(this.formFieldValue)) {
      return { kind: 'blank', message: { type: 'error', value: 'This field is required' } };
    }
  }

  @action
  onFooterButtonClick(): void {
    console.log('Footer button clicked');
  }

  @action
  onInfiniteSelectOptionChange(value: boolean): void {
    console.log('Infinite select option changed', value);
  }

  @action
  registerMenuTrigger(element: HTMLElement): void {
    this.referenceTarget = element;
  }

  @action
  toggleContextMenuPanel(event: PointerEvent): void {
    event.stopPropagation();
    this.displayContextMenuPanel = !this.displayContextMenuPanel;
  }

  @action
  onContextMenuPanelMouseLeave(event: MouseEvent): void {
    if (this.referenceTarget && this.referenceTarget.contains(event.relatedTarget as HTMLElement)) {
      return;
    }
    this.displayContextMenuPanel = false;
  }

  @action
  registerContextMenuPanel(element: HTMLElement): void {
    this.contextMenuPanel = element;
  }
}
