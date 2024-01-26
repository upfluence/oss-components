import Component from '@glimmer/component';
import { type CountryData, countries } from '@upfluence/oss-components/utils/country-codes';

interface OSSAttributePhoneNumberSignature {
  Args: {
    countryCode?: string;
    prefix?: string;
    number?: string;
  };
  Element: HTMLElement;
}

export default class OSSAttributePhoneNumberComponent extends Component<OSSAttributePhoneNumberSignature> {
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

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'OSS::Attribute::PhoneNumber': typeof OSSAttributePhoneNumberComponent;
    'o-s-s/attribute/phone-number': typeof OSSAttributePhoneNumberComponent;
  }
}
