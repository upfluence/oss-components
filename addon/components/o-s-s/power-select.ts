import { assert } from '@ember/debug';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import { scheduleOnce } from '@ember/runloop';
import { isTesting } from '@embroider/macros';

import attachDropdown from '@upfluence/oss-components/utils/attach-dropdown';
import BaseDropdown from './private/base-dropdown';

type OperationType = 'selection' | 'deletion';

interface OSSPowerSelectArgs {
  items: any[];
  selectedItems: any[];
  loading?: boolean;
  loadingMore?: boolean;
  placeholder?: string;
  searchPlaceholder?: string;
  onChange: (item: any, operation: OperationType) => void;
  onSearch?: (keyword: string) => void;
  onBottomReached?: () => void;
}

const DEFAULT_PLACEHOLDER = 'Select an item';

export default class OSSPowerSelect extends BaseDropdown<OSSPowerSelectArgs> {
  cleanupDrodpownAutoplacement?: () => void;

  portalId: string = guidFor(this);

  declare portalTarget: HTMLElement;

  get placeholder(): string {
    return this.args.placeholder ?? DEFAULT_PLACEHOLDER;
  }

  noop(event: Event): void {
    event.stopPropagation();
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
  handleSelectorClose(event: ToggleEvent & { target: HTMLDetailsElement }): void {
    if (!event.target.open && document.querySelector(`#${this.portalId}`)) {
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

    scheduleOnce('afterRender', this, () => {
      const referenceTarget = this.container.querySelector('.upf-power-select__array-container');
      const floatingTarget = document.querySelector(`#${this.portalId}`);

      if (referenceTarget && floatingTarget) {
        this.cleanupDrodpownAutoplacement = attachDropdown(
          referenceTarget as HTMLElement,
          floatingTarget as HTMLElement
        );
      }
    });
  }

  @action
  onClickOutside(_: HTMLElement, event: MouseEvent): void {
    super.onClickOutside(_, event);
    this.cleanupDrodpownAutoplacement?.();
    this.args.onSearch?.('');
    document.querySelector(`#${this.portalId}`)?.remove();
  }

  @action
  registerContainer(element: HTMLDetailsElement): void {
    super.registerContainer(element);
    this.portalTarget = isTesting() ? this.container : document.body;
  }
}
