import { assert } from '@ember/debug';
import { action } from '@ember/object';
import { scheduleOnce } from '@ember/runloop';

import attachDropdown from '@upfluence/oss-components/utils/attach-dropdown';
import BaseDropdown, { type BaseDropdownArgs } from './private/base-dropdown';

type OperationType = 'selection' | 'deletion';

interface OSSPowerSelectArgs extends BaseDropdownArgs {
  items: any[];
  selectedItems: any[];
  loading?: boolean;
  loadingMore?: boolean;
  placeholder?: string;
  searchPlaceholder?: string;
  addressableAs?: string;
  onChange: (item: any, operation: OperationType) => void;
  onSearch?: (keyword: string) => void;
  onBottomReached?: () => void;
  borderless?: boolean;
}

const DEFAULT_PLACEHOLDER = 'Select an item';

export default class OSSPowerSelect extends BaseDropdown<OSSPowerSelectArgs> {
  cleanupDrodpownAutoplacement?: () => void;

  get placeholder(): string {
    return this.args.placeholder ?? DEFAULT_PLACEHOLDER;
  }

  get dropdownAddressableClass(): string {
    return this.args.addressableAs ? `${this.args.addressableAs}__dropdown` : '';
  }

  get inputBorderStateClass(): string | undefined {
    if (this.args.hasError) return ' array-input-container--error';
    if (this.safeFeedbackMessage) return ` array-input-container--${this.safeFeedbackMessage.type}`;
    return undefined;
  }

  @action
  ensureBlockPresence(hasSelectedItem: boolean, hasOptionItem: boolean): void | never {
    assert(`[component][OSS::PowerSelect] You must pass selected-item named block`, hasSelectedItem);
    assert(`[component][OSS::PowerSelect] You must pass option-item named block`, hasOptionItem);
  }

  @action
  onSelect(item: any): void {
    this.args.onChange(item, 'selection');
  }

  @action
  handleSelectorClose(): void {
    if (!this.container.hasAttribute('open') && document.querySelector(`#${this.portalId}`)) {
      document.querySelector(`#${this.portalId}`)!.remove();
      this.cleanupDrodpownAutoplacement?.();
      this.closeDropdown();
    }
  }

  @action
  toggleDropdown(event: MouseEvent): void {
    super.toggleDropdown(event);

    if (!this.isOpen) {
      this.args.onSearch?.('');
      return;
    }

    scheduleOnce('afterRender', this, this.setupDropdownAutoplacement);
  }

  @action
  onClickOutside(_: HTMLElement, event: MouseEvent): void {
    super.onClickOutside(_, event);
    this.cleanupDrodpownAutoplacement?.();
    this.args.onSearch?.('');
    document.querySelector(`#${this.portalId}`)?.remove();
  }

  private setupDropdownAutoplacement(): void {
    const referenceTarget = this.container.querySelector('.upf-power-select__array-container');
    const floatingTarget = document.querySelector(`#${this.portalId}`);

    if (referenceTarget && floatingTarget) {
      this.cleanupDrodpownAutoplacement = attachDropdown(
        referenceTarget as HTMLElement,
        floatingTarget as HTMLElement,
        { maxHeight: 300, placementStrategy: 'auto' }
      );
    }
  }
}
