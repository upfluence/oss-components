import { assert } from '@ember/debug';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { isBlank } from '@ember/utils';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { countries, type CountryData } from '@upfluence/oss-components/utils/country-codes';
import type IntlService from 'ember-intl/services/intl';

interface OSSPhoneNumberInputArgs {
  prefix: string;
  number: string;
  placeholder?: string;
  errorMessage?: string;
  hasError?: boolean;
  onChange(prefix: string, number: string): void;
  validates?(isPassing: boolean): void;
}

const AUTHORIZED_KEYS = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', 'Shift'];
const AUTHORIZED_COMBO_KEYS = ['v', 'a', 'z', 'c', 'x'];
const NOT_NUMERIC = /[^\d]/g;

export default class OSSPhoneNumberInput extends Component<OSSPhoneNumberInputArgs> {
  @service declare intl: IntlService;

  private _countries = countries;

  @tracked invalidInputError = '';
  @tracked selectedCountry: CountryData;
  @tracked countrySelectorShown: boolean = false;
  @tracked filteredCountries: CountryData[] = this._countries;
  @tracked placeholder: string = this.args.placeholder ?? '(415) 000 0000';
  @tracked inputElement: HTMLElement | undefined = undefined;

  constructor(owner: unknown, args: OSSPhoneNumberInputArgs) {
    super(owner, args);

    assert(
      '[component][OSS::PhoneNumberInput] The parameter @prefix of type string is mandatory',
      typeof this.args.prefix === 'string'
    );
    assert(
      '[component][OSS::PhoneNumberInput] The parameter @number of type string is mandatory',
      typeof this.args.number === 'string'
    );
    assert(
      '[component][OSS::PhoneNumberInput] The parameter @onChange of type function is mandatory',
      typeof this.args.onChange === 'function'
    );

    this.selectedCountry = this._countries[0]!;
    this.loadExistingNumber();
  }

  get displayErrorBorder(): boolean {
    return this.args.hasError || !isBlank(this.args.errorMessage);
  }

  get interactiveClasses(): string {
    let classArray: string[] = [];

    if (this.countrySelectorShown) {
      classArray.push('phone-number-input--active');
    }
    if (this.displayErrorBorder) {
      classArray.push('phone-number-input--error');
    }
    return classArray.join(' ');
  }

  @action
  onlyNumeric(event: KeyboardEvent | FocusEvent): void {
    const isAuthorizedKey = AUTHORIZED_KEYS.find((key: string) => key === (event as KeyboardEvent).key);
    const isSupportedCombo =
      event instanceof KeyboardEvent &&
      ((event as KeyboardEvent).metaKey ||
        ((navigator as any).userAgentData?.platform === 'Windows' && event.ctrlKey)) &&
      AUTHORIZED_COMBO_KEYS.includes(event.key);

    if (event instanceof FocusEvent || /^[0-9]$/i.test(event.key) || isSupportedCombo || isAuthorizedKey) {
      this.args.onChange('+' + this.selectedCountry.countryCallingCodes[0], this.args.number);
    } else {
      event.preventDefault();
    }

    this.validateInput();
  }

  @action
  handlePaste(event: ClipboardEvent): void {
    event.preventDefault();

    const paste = (event.clipboardData?.getData('text') ?? '').replace(NOT_NUMERIC, '');
    const target = event.target as HTMLInputElement;
    const initialSelectionStart = target.selectionStart ?? 0;
    const finalSelectionPosition = initialSelectionStart + paste.length;

    target.setRangeText(paste, initialSelectionStart, target.selectionEnd ?? initialSelectionStart);
    target.setSelectionRange(finalSelectionPosition, finalSelectionPosition);

    this.args.onChange('+' + this.selectedCountry.countryCallingCodes[0], target.value);
  }

  @action
  onSearch(keyword: any): void {
    this.filteredCountries = this._countries.filter((country: any) => {
      return (
        country.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1 ||
        country.countryCallingCodes[0].indexOf(keyword) !== -1
      );
    });
  }

  @action
  onSelect(value: any): void {
    this.selectedCountry = value;
    this.args.onChange('+' + this.selectedCountry.countryCallingCodes[0], this.args.number);
    this.hideCountrySelector();
  }

  @action
  toggleCountrySelector(e: any): void {
    e.stopPropagation();
    this.countrySelectorShown = !this.countrySelectorShown;
  }

  @action
  hideCountrySelector(): void {
    this.countrySelectorShown = false;
    this.filteredCountries = this._countries;
  }

  @action
  focusInput(): void {
    this.inputElement?.focus();
  }

  @action
  registerInputElement(el: HTMLElement): void {
    this.inputElement = el;
  }

  private validateInput(): void {
    this.invalidInputError = '';

    if (this.args.number.startsWith('+')) {
      this.invalidInputError = this.intl.t('oss-components.phone-input.invalid_input');
      this.args.validates?.(false);
    } else {
      this.args.validates?.(true);
    }
  }

  private loadExistingNumber(): void {
    if (this.args.prefix) {
      const purePrefix = this.args.prefix.replace(/\D/g, '');
      this.selectedCountry =
        this._countries.find((country: CountryData) => country.countryCallingCodes[0] === purePrefix) ||
        this._countries[0]!;
    }
  }
}
