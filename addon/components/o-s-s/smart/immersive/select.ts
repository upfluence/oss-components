import { action } from '@ember/object';
import BaseDropdown, { type BaseDropdownArgs } from '../../private/base-dropdown';
import { runSmartGradientAnimation } from '@upfluence/oss-components/utils/run-smart-gradient-animation';
import { isBlank, isEmpty } from '@ember/utils';
import { assert } from '@ember/debug';
import { scheduleOnce } from '@ember/runloop';
import attachDropdown from '@upfluence/oss-components/utils/attach-dropdown';
import { helper } from '@ember/component/helper';

interface OSSSmartImmersiveSelectComponentSignature extends BaseDropdownArgs {
  values?: string[];
  items: { value: string; label: string }[];
  placeholder?: string;
  loading?: boolean;
  hasError?: boolean;
  displayedItems?: number;
  maxItemWidth?: number;
  addressableAs?: string;
  multiple?: boolean;
  onChange?: (item: string) => void;
  onSearch?: (keyword: string) => void;
  onBottomReached?: () => void;
}

export default class OSSSmartImmersiveSelectComponent extends BaseDropdown<OSSSmartImmersiveSelectComponentSignature> {
  cleanupDrodpownAutoplacement?: () => void;

  isSelected = helper((_, { value }: { value: string }): boolean => {
    return this.args.values?.includes(value) || false;
  });

  get hasValue(): boolean {
    return !isBlank(this.args.values);
  }

  get computedClasses(): string {
    const classes = ['smart-immersive-select-container'];
    if (this.hasValue) {
      classes.push('smart-immersive-select-container--filled');
    }
    if (this.args.hasError) {
      classes.push('smart-immersive-select-container--errored');
    }
    return classes.join(' ');
  }

  get computedSmartItemStyle(): string {
    const style: string[] = [];
    if (this.args.maxItemWidth) {
      style.push(`max-width: ${this.args.maxItemWidth}px;`);
    }
    return style.join(' ');
  }

  get dropdownAddressableClass(): string {
    return this.args.addressableAs ? `${this.args.addressableAs}__dropdown` : '';
  }

  get displayedItems(): number {
    return this.args.displayedItems ?? 0;
  }

  get values(): string[] {
    let values: string[] = [];
    values = [
      ...(this.args.values?.filter((el) => {
        return !isBlank(el) && el !== undefined;
      }) ?? [])
    ];

    if (this.displayedItems > 0 && values.length > this.displayedItems) {
      values = values.slice(0, this.displayedItems);
      values.push(`+${(this.args.values?.length ?? 0) - this.displayedItems}`);
    }

    return values;
  }

  @action
  runAnimationOnLoadEnd(): void {
    if (this.container && this.args.loading === false && this.hasValue) {
      runSmartGradientAnimation(this.container);
    }
  }

  @action
  onSelect(selection: any): void {
    this.args.onChange?.(selection);
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
  ensureBlockPresence(hasSelectedItem: boolean, hasOptionItem: boolean): void | never {
    assert(`[component][OSS::Smart::Immersive::Select] You must pass selected-item named block`, hasSelectedItem);
    assert(`[component][OSS::Smart::Immersive::Select] You must pass option-item named block`, hasOptionItem);
  }

  @action
  toggleDropdown(event: PointerEvent): void {
    super.toggleDropdown(event);

    if (!this.isOpen) {
      this.args.onSearch?.('');
      return;
    }

    scheduleOnce('afterRender', this, this.setupDropdownAutoplacement);
  }

  private setupDropdownAutoplacement(): void {
    const referenceTarget = this.container.querySelector('.upf-input');
    const floatingTarget = document.querySelector(`#${this.portalId}`);

    if (referenceTarget && floatingTarget) {
      this.cleanupDrodpownAutoplacement = attachDropdown(
        referenceTarget as HTMLElement,
        floatingTarget as HTMLElement,
        { maxHeight: 300, maxWidth: 320, placementStrategy: 'auto' }
      );
    }
  }
}
