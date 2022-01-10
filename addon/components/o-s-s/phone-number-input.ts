import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { countries, CountryData } from '@upfluence/oss-components/utils/country-codes';

interface OSSPhoneNumberInputArgs {
  prefix: string;
  number: string;
  onChange: (prefix: string, number: string) => void;
}

export default class OSSPhoneNumberInput extends Component<OSSPhoneNumberInputArgs> {
  private _countries = countries;
  @tracked selectedCountry: CountryData;
  @tracked countrySelectorShown: boolean = false;
  @tracked filteredCountries: CountryData[] = this._countries;

  constructor(owner: unknown, args: OSSPhoneNumberInputArgs) {
    super(owner, args);

    if (typeof this.args.prefix !== 'string') {
      throw new Error('[component][OSS::PhoneNumberInput] The parameter @prefix of type string is mandatory');
    }
    if (typeof this.args.prefix !== 'string') {
      throw new Error('[component][OSS::PhoneNumberInput] The parameter @number of type string is mandatory');
    }
    this.selectedCountry = this._countries[0];
    this._loadExistingNumber();
  }

  private _loadExistingNumber(): void {
    if (this.args.prefix) {
      const purePrefix = this.args.prefix.replace(/\D/g, '');
      this.selectedCountry =
        this._countries.find((country: CountryData) => country.countryCallingCodes[0] === purePrefix) ||
        this._countries[0];
    }
  }

  @action
  onlyNumberic(event: KeyboardEvent): void {
    const authorizedInputs = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', 'Shift', 'Control'];
    if (/^[0-9]$/i.test(event.key) || authorizedInputs.find((key: string) => key === event.key)) {
      this.args.onChange('+' + this.selectedCountry.countryCallingCodes[0], this.args.number);
    } else {
      event.preventDefault();
    }
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
