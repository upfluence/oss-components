import { assert } from '@ember/debug';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { countries, CountryData } from '@upfluence/oss-components/utils/country-codes';

interface OSSPhoneNumberInputArgs {
  prefix: string;
  number: string;
  onChange(prefix: string, number: string): void;
  validates?(isPassing: boolean): void;
}

export default class OSSPhoneNumberInput extends Component<OSSPhoneNumberInputArgs> {
  @service declare intl: any;

  private _countries: CountryData[] = countries;

  @tracked invalidInputError = '';
  @tracked selectedCountry: CountryData;
  @tracked countrySelectorShown: boolean = false;
  @tracked filteredCountries: CountryData[] = this._countries;

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
    this._loadExistingNumber();
  }

  private _loadExistingNumber(): void {
    if (this.args.prefix) {
      const purePrefix = this.args.prefix.replace(/\D/g, '');
      this.selectedCountry =
        this._countries.find((country: CountryData) => country.countryCallingCodes[0] === purePrefix) ||
        this._countries[0]!;
    }
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

  @action
  onlyNumeric(event: KeyboardEvent | FocusEvent): void {
    const authorizedInputs = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', 'Shift'];

    if (
      event instanceof FocusEvent ||
      /^[0-9]$/i.test(event.key) ||
      authorizedInputs.find((key: string) => key === event.key)
    ) {
      this.args.onChange('+' + this.selectedCountry.countryCallingCodes[0], this.args.number);
    } else {
      event.preventDefault();
    }

    this.validateInput();
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
}
