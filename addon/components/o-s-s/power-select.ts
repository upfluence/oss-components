import Component from '@glimmer/component';
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
  checkBlockPresence(hasNameBock: boolean, name: string) {
    if (!hasNameBock) {
      throw new Error(`[component][OSS::PowerSelect] You must pass ${name} name block`);
    }
  }

  @action
  removeItem(item: any) {
    this.args.onChange(item, 'deletion');
  }

  @action
  onSelect(item: any) {
    this.args.onChange(item, 'selection');
  }
}
