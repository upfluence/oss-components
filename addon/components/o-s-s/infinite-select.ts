import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

interface InfiniteSelectArgs {
  searchEnabled: boolean;
  loading: boolean;
  loadingMore: boolean;
  itemLabel: string;
  searchPlaceholder: string;
  items: InfinityItem[];

  onSelect(item: InfinityItem): void;
  onSearch?(keyword: string): void;
  onBottomReached?(): void;
  didRender?(): void;
}

type InfinityItem = {
  selected: boolean;
};

const DEFAULT_ITEM_LABEL = 'name';

export default class OSSInfiniteSelect extends Component<InfiniteSelectArgs> {
  loadingRows = new Array(5);
  loadingMoreRows = new Array(3);

  @tracked _searchKeyword: string = '';

  constructor(owner: unknown, args: InfiniteSelectArgs) {
    super(owner, args);

    if (this.searchEnabled && !this.args.onSearch) {
      throw new Error('[component][OSS::InfiniteSelect] Search is enabled without an `onSearch` action being passed');
    }

    if (!this.args.onSelect) {
      throw new Error('[component][OSS::InfiniteSelect] `onSelect` action is mandatory');
    }
  }

  get searchEnabled(): boolean {
    return this.args.searchEnabled ?? true;
  }

  get searchPlaceholder(): string {
    return this.args.searchPlaceholder ?? "Search...";
  }

  get itemLabel(): string {
    return this.args.itemLabel ?? DEFAULT_ITEM_LABEL;
  }

  get items(): InfinityItem[] {
    return this.args.items ?? [];
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
  scrollListener(event: any): void {
    if (event.target.scrollTop + event.target.clientHeight >= event.target.scrollHeight && !this.args.loading) {
      this.args.onBottomReached?.();
    }
  }

  @action
  didSelectItem(item: InfinityItem) {
    this.args.onSelect(item);
  }
}
