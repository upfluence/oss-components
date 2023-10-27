import Component from '@glimmer/component';
import { CountryData, countries } from '@upfluence/oss-components/utils/country-codes';

interface OSSAttributeCountryArgs {
  countryCode?: string;
}

export default class OSSAttributeCountry extends Component<OSSAttributeCountryArgs> {
  private countryDictionnary: CountryData[] = countries;

  get countryName(): string {
    return (
      this.countryDictionnary.find((country: CountryData) => country.alpha2 === this.args.countryCode)?.name || '-'
    );
  }
}
