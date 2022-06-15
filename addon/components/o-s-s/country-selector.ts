import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

type Item = {
  name: string;
  id?: string;
  code?: string;
};

interface OSSCountrySelectorArgs {
  sourceList: Item[];
  initialValue?: string;
  onChange(item: Item): void;
}

export default class OSSCountrySelector extends Component<OSSCountrySelectorArgs> {
  @service intl: any;

  @tracked selectedCountry: Item | null = null;
  @tracked dropdownVisibility: boolean = false;
  @tracked filteredItems: any[] = this.args.sourceList;

  constructor(owner: unknown, args: OSSCountrySelectorArgs) {
    super(owner, args);

    if (typeof this.args.sourceList !== 'object') {
      throw new Error('[component][OSS::CountrySelector] The parameter @sourceList of type object is mandatory');
    }
    if (typeof this.args.onChange !== 'function') {
      throw new Error('[component][OSS::CountrySelector] The @onChange parameter is mandatory');
    }

    if (this.args.initialValue) {
      this.selectedCountry =
        this.args.sourceList.find((item: Item) => item.name.toLowerCase() === this.args.initialValue!.toLowerCase()) ||
        null;
    }
  }

  get isCountry(): boolean {
    return this.args.sourceList[0].id !== undefined;
  }

  get inputLabel(): string | null {
    return this.selectedCountry
      ? this.selectedCountry.name
      : this.isCountry
      ? this.intl.t('oss-components.country-selector.placeholder.country')
      : this.intl.t('oss-components.country-selector.placeholder.province');
  }

  @action
  toggleDropdown(e: any): void {
    e.stopPropagation();
    this.dropdownVisibility = !this.dropdownVisibility;
    this.filteredItems = this.args.sourceList;
  }

  @action
  closeDropdown(): void {
    this.dropdownVisibility = false;
  }

  @action
  search(keyword: string): void {
    this.filteredItems = this.args.sourceList.filter((item: Item) => {
      return item.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });
  }

  @action
  onItemSelected(value: Item): void {
    this.selectedCountry = value;
    this.closeDropdown();
    this.args.onChange(value);
  }
}
