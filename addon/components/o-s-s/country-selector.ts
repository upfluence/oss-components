import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { assert } from '@ember/debug';
import { inject as service } from '@ember/service';
import { isEmpty } from '@ember/utils';

import type { IntlService } from 'ember-intl';

import BaseDropdown, { type BaseDropdownArgs } from './private/base-dropdown';
import { scheduleOnce } from '@ember/runloop';
import attachDropdown from '@upfluence/oss-components/utils/attach-dropdown';

type Item = {
  name: string;
  id?: string;
  alpha2?: string;
  code?: string;
};

interface OSSCountrySelectorArgs extends BaseDropdownArgs {
  sourceList: Item[];
  value?: string;
  onChange(item: Item | null): void;
}

export default class OSSCountrySelector extends BaseDropdown<OSSCountrySelectorArgs> {
  @service declare intl: IntlService;

  @tracked filteredItems: Item[] = this.args.sourceList;

  cleanupDrodpownAutoplacement?: () => void;
  handleSelectorClose = this.closeDropdown;

  constructor(owner: unknown, args: OSSCountrySelectorArgs) {
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
      scheduleOnce('afterRender', this, this._matchValueWithSourceList);
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
  toggleDropdown(event: Event): void {
    super.toggleDropdown(event);

    this.filteredItems = this.args.sourceList;

    if (this.isOpen) {
      scheduleOnce('afterRender', this, () => {
        const referenceTarget = this.container.querySelector('.upf-input') as HTMLElement;
        const floatingTarget = document.querySelector(`#${this.portalId}`);

        if (referenceTarget && floatingTarget) {
          this.cleanupDrodpownAutoplacement = attachDropdown(
            referenceTarget as HTMLElement,
            floatingTarget as HTMLElement,
            { placementStrategy: 'auto' }
          );
        }
      });
    }
  }

  @action
  closeDropdown(): void {
    super.closeDropdown();

    document.querySelector(`#${this.portalId}`)?.remove();

    const el = this.container.querySelector('.upf-input') as HTMLElement;
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
