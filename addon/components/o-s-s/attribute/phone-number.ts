import Component from '@glimmer/component';
import { CountryData, countries } from '@upfluence/oss-components/utils/country-codes';

interface OSSAttributePhoneNumberArgs {
  countryCode?: string;
  prefix?: string;
  number?: string;
}

export default class OSSAttributePhoneNumber extends Component<OSSAttributePhoneNumberArgs> {
  private countryDictionnary: CountryData[] = countries;

  get formattedPhoneNumber(): string {
    return this.args.number ? `${this.formattedPrefix}${this.args.number}` : '-';
  }

  get countryCodeDictionaryMatch(): boolean {
    return !!this.countryDictionnary.find((country: CountryData) => country.alpha2 === this.args.countryCode);
  }

  private get formattedPrefix(): string {
    return this.args.prefix ? `${this.args.prefix} ` : '';
  }
}
