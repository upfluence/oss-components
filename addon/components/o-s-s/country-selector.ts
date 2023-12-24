import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { assert } from '@ember/debug';
import { inject as service } from '@ember/service';
import { isEmpty } from '@ember/utils';

import { guidFor } from '@ember/object/internals';

type Item = {
  name: string;
  id?: string;
  alpha2?: string;
  code?: string;
};

interface OSSCountrySelectorSignature {
  Args: {
    sourceList: Item[];
    value?: string;
    onChange(item: Item | null): void;
  };
  Element: HTMLDivElement;
}

export default class OSSCountrySelectorComponent extends Component<OSSCountrySelectorSignature> {
  @service intl: any;

  @tracked dropdownVisibility: boolean = false;
  @tracked filteredItems: any[] = this.args.sourceList;

  @tracked elementId: string = guidFor(this);

  constructor(owner: unknown, args: OSSCountrySelectorSignature['Args']) {
    super(owner, args);

    assert(
      '[component][OSS::CountrySelector] The parameter @sourceList of type object is mandatory',
      typeof this.args.sourceList === 'object'
    );

    assert(
      '[component][OSS::CountrySelector] The @onChange parameter is mandatory',
      typeof this.args.onChange === 'function'
    );

    if (!isEmpty(this.args.value)) {
      this._matchValueWithSourceList();
    }
  }

  get isCountry(): boolean {
    return this.args.sourceList[0]?.id !== undefined;
  }

  get inputLabel(): string | null {
    return this.selectedCountry
      ? this.selectedCountry.name
      : this.isCountry
      ? this.intl.t('oss-components.country-selector.placeholder.country')
      : this.intl.t('oss-components.country-selector.placeholder.province');
  }

  get selectedCountry(): Item | null {
    const matchOn = this.isCountry ? ['alpha2'] : ['name', 'code'];
    return this.args.sourceList.find((item: any) => matchOn.map((key) => item[key]).includes(this.args.value)) || null;
  }

  @action
  handleKeyEvent(e: KeyboardEvent): void {
    if (e.key === 'Enter') {
      this.toggleDropdown(e);
    }
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

    const el = document.querySelector(`#${this.elementId} .upf-input`) as HTMLElement;
    el?.focus();
  }

  @action
  search(keyword: string): void {
    this.filteredItems = this.args.sourceList.filter((item: Item) => {
      return item.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });
  }

  @action
  onItemSelected(value: Item): void {
    this.closeDropdown();
    this.args.onChange(value);
  }

  private _matchValueWithSourceList(): void {
    if (this.selectedCountry) this.onItemSelected(this.selectedCountry);
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'OSS::CountrySelector': typeof OSSCountrySelectorComponent;
    'o-s-s/country-selector': typeof OSSCountrySelectorComponent;
  }
}
