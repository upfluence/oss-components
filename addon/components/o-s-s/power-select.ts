import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { assert } from '@ember/debug';
import { action } from '@ember/object';
import { scheduleOnce } from '@ember/runloop';

import attachDropdown from '@upfluence/oss-components/utils/attach-dropdown';

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

export default class OSSPowerSelect extends Component<OSSPowerSelectArgs> {
  @tracked displaySelect: boolean = false;

  cleanupDrodpownAutoplacement?: () => void;

  declare container: HTMLElement;

  get placeholder(): string {
    return this.args.placeholder ?? DEFAULT_PLACEHOLDER;
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
  toggleSelect(event: MouseEvent): void {
    event.stopPropagation();
    this.displaySelect = !this.displaySelect;

    if (!this.displaySelect) {
      this.args.onSearch?.('');
      this.cleanupDrodpownAutoplacement?.();
      return;
    }

    scheduleOnce('afterRender', this, () => {
      const referenceTarget = this.container.querySelector('.upf-power-select__array-container');
      const floatingTarget = this.container.querySelector('.upf-infinite-select');

      if (referenceTarget && floatingTarget) {
        this.cleanupDrodpownAutoplacement = attachDropdown(
          referenceTarget as HTMLElement,
          floatingTarget as HTMLElement
        );
      }
    });
  }

  @action
  hideSelect(_: HTMLElement, event: MouseEvent): void {
    event.stopPropagation();
    this.displaySelect = false;
    this.cleanupDrodpownAutoplacement?.();
    this.args.onSearch?.('');
  }

  @action
  registerContainer(element: HTMLElement): void {
    this.container = element;
  }
}
