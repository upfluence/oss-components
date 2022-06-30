import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { action } from '@ember/object';

type OperationType = 'selection' | 'deletion';

interface OSSPowerSelectArgs {
  items: any[];
  selectedItems: any[];
  onChange: (item: any, operation: OperationType) => void;

  loading?: boolean;
  loadingMore?: boolean;
  placeholder?: string;
  searchPlaceholder?: string;
  onSearch?: (keyword: string) => void;
  onBottomReached?: () => void;
}

export default class OSSPowerSelect extends Component<OSSPowerSelectArgs> {
  get placeholder(): string {
    return this.args.placeholder ?? '';
  }

  @action
  ensureBlockPresence(hasSelectedItem: boolean, hasOptionItem: boolean): void | never {
    assert(`[component][OSS::PowerSelect] You must pass selected-item named block`, hasSelectedItem);
    assert(`[component][OSS::PowerSelect] You must pass option-item named block`, hasOptionItem);
  }

  @action
  removeItem(item: any): void {
    this.args.onChange(item, 'deletion');
  }

  @action
  onSelect(item: any): void {
    this.args.onChange(item, 'selection');
  }
}
