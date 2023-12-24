import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { assert } from '@ember/debug';
import { action } from '@ember/object';

type OperationType = 'selection' | 'deletion';

interface OSSPowerSelectSignature {
  Args: {
    items: any[];
    selectedItems: any[];
    loading?: boolean;
    loadingMore?: boolean;
    placeholder?: string;
    searchPlaceholder?: string;
    onChange: (item: any, operation: OperationType) => void;
    onSearch?: (keyword: string) => void;
    onBottomReached?: () => void;
  };
  Blocks: {
    'empty-state': [];
    'option-item': [unknown];
    'selected-item': [unknown];
  };
  Element: HTMLDivElement;
}

const DEFAULT_PLACEHOLDER = 'Select an item';

export default class OSSPowerSelectComponent extends Component<OSSPowerSelectSignature> {
  @tracked displaySelect: boolean = false;

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
    }
  }

  @action
  hideSelect(_: HTMLElement, event: MouseEvent): void {
    event.stopPropagation();
    this.displaySelect = false;
    this.args.onSearch?.('');
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'OSS::PowerSelect': typeof OSSPowerSelectComponent;
    'o-s-s/power-select': typeof OSSPowerSelectComponent;
  }
}
