import { action } from '@ember/object';
import { assert } from '@ember/debug';
import { inject as service } from '@ember/service';
import { isEmpty } from '@ember/utils';
import { scheduleOnce } from '@ember/runloop';
import { tracked } from '@glimmer/tracking';
import type { IntlService } from 'ember-intl';

import { ALLOWED_FEEDBACK_MESSAGE_TYPES } from '@upfluence/oss-components/utils';
import attachDropdown from '@upfluence/oss-components/utils/attach-dropdown';
import type { FeedbackMessage } from '@upfluence/oss-components/types';

import BaseDropdown, { type BaseDropdownArgs } from './private/base-dropdown';

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

  get computedClasses(): string {
    const classes = ['country-selector-container', 'fx-1'];

    if (this.feedbackMessage?.type && ALLOWED_FEEDBACK_MESSAGE_TYPES.includes(this.feedbackMessage.type)) {
      classes.push(`country-selector-container--${this.feedbackMessage?.type}`);
    }

    return classes.join(' ');
  }

  get feedbackMessage(): FeedbackMessage | undefined {
    return this.args.feedbackMessage;
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
  closeDropdown(preventFocus: boolean = false): void {
    super.closeDropdown();

    document.querySelector(`#${this.portalId}`)?.remove();

    const el = this.container.querySelector('.upf-input') as HTMLElement;
    if (!preventFocus) el?.focus();
  }

  @action
  search(keyword: string): void {
    this.filteredItems = this.args.sourceList.filter((item: Item) => {
      return item.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });
  }

  @action
  onItemSelected(value: Item, preventFocus: boolean = false): void {
    this.closeDropdown(preventFocus);
    this.args.onChange(value);
  }

  private _matchValueWithSourceList(): void {
    if (this.selectedCountry) this.onItemSelected(this.selectedCountry, true);
  }
}
