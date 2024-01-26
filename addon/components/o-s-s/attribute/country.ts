import Component from '@glimmer/component';
import { type CountryData, countries } from '@upfluence/oss-components/utils/country-codes';
import { tracked } from '@glimmer/tracking';

interface OSSAttributeCountrySignature {
  Args: {
    countryCode?: string;
  };
  Element: HTMLElement;
}

export default class OSSAttributeCountryComponent extends Component<OSSAttributeCountrySignature> {
  @tracked displayCopyBtn: boolean = false;

  private countryDictionnary: CountryData[] = countries;

  get countryName(): string {
    return (
      this.countryDictionnary.find((country: CountryData) => country.alpha2 === this.args.countryCode)?.name || '-'
    );
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'OSS::Attribute::Country': typeof OSSAttributeCountryComponent;
    'o-s-s/attribute/country': typeof OSSAttributeCountryComponent;
  }
}
