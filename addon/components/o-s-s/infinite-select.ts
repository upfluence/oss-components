import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { assert } from '@ember/debug';
import { action } from '@ember/object';

interface InfiniteSelectArgs {
  searchEnabled: boolean;
  loading: boolean;
  loadingMore: boolean;
  itemLabel: string;
  searchPlaceholder: string;
  items: InfinityItem[];
  inline: boolean;

  onSelect: (item: InfinityItem) => void;
  onSearch?: (keyword: string) => void;
  onBottomReached?: () => void;
  didRender?: () => void;
}

type InfinityItem = {
  selected: boolean;
};

const DEFAULT_ITEM_LABEL = 'name';

export default class OSSInfiniteSelect extends Component<InfiniteSelectArgs> {
  @tracked _searchKeyword: string = '';

  constructor(owner: unknown, args: InfiniteSelectArgs) {
    super(owner, args);

    assert(
      '[component][OSS::InfiniteSelect] Search is enabled without an `onSearch` action being passed',
      this.searchEnabled ? typeof this.args.onSearch === 'function' : true
    );

    assert('[component][OSS::InfiniteSelect] `onSelect` action is mandatory', typeof this.args.onSelect === 'function');
  }

  get searchEnabled(): boolean {
    return this.args.searchEnabled ?? true;
  }

  get searchPlaceholder(): string {
    return this.args.searchPlaceholder ?? 'Search...';
  }

  get itemLabel(): string {
    return this.args.itemLabel ?? DEFAULT_ITEM_LABEL;
  }

  get items(): InfinityItem[] {
    return this.args.items ?? [];
  }

  get inline(): boolean {
    return this.args.inline ?? false;
  }

  @action
  onRender(): void {
    this.args.didRender?.();
  }

  @action
  updateSearchKeyword(event: any): void {
    this._searchKeyword = event?.target?.value;

    this.args.onSearch?.(this._searchKeyword);
  }

  @action
  onBottomReached(): void {
    if (!this.args.loadingMore) {
      this.args.onBottomReached?.();
    }
  }

  @action
  didSelectItem(item: InfinityItem, event?: PointerEvent) {
    event?.stopPropagation();
    this.args.onSelect(item);
  }
}
