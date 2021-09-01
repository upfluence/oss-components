import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

interface InfiniteSelectArgs {
  searchEnabled: boolean;
  loading: boolean;
  itemLabel: string;
  items: InfinityItem[];

  onSelect?(item: InfinityItem): void;
  onSearch?(keyword: string): void;
  onBottomReached?(): void;
}

type KeyboardEvent = {
  target: HTMLInputElement;
  key: string;
};

type InfinityItem = {
  selected: boolean;
};

export default class OSSInfiniteSelect extends Component<InfiniteSelectArgs> {
  //itemLabel = null;
  @tracked _searchKeyword: string = '';

  constructor(owner: unknown, args: InfiniteSelectArgs) {
    super(owner, args);

    //console.log(this.itemLabel);

    if (this.args.searchEnabled && !this.args.onSearch) {
      throw new Error('[component][OSS::InfiniteSelect] Search is enabled without an `onSearch` action being passed');
    }
    if (this.args.itemLabel && !this.args.onSelect) {
      console.log('plpl')
    }
  }

  get itemLabel() {
    return this.args.itemLabel ?? 'name';
  }

  //get searchKeyword() {
  //return this._searchKeyword;
  //}

  //  set searchKeyword(value) {
  ////this.value);
  //this.searchKeyword = value;
  ////this.
  //}

  get searchEnabled() {
    return this.args.searchEnabled ?? true;
  }

  get items() {
    return this.args.items ?? [];
  }

  @action
  updateSearchKeyword(event: KeyboardEvent) {
    this._searchKeyword = event?.target?.value;

    this.args.onSearch?.(this._searchKeyword);
  }

  @action
  scrollListener(event: any) {
    if (event.target.scrollTop + event.target.clientHeight >= event.target.scrollHeight && !this.args.loading) {
      this.args.onBottomReached?.();
    }
  }
  //// {{!-- @items=(array (hash name="bro" selected=true)) @searchEnabled={{false}} @onSearch={{this.onSearch}}  --}}
  ////{{!-- @onBottom={{this.onBottom}} @onSelect={{this.onSelect}} @multiple={{true}} as |option|> --}}

  ////{{!-- _onSelect(opt) { --}}
  ////{{!-- this.args.onSelect(opt) --}}

  ////{{!-- if (!this.args.multiple) { --}}
  ////{{!-- this.close(); --}}
  ////{{!-- } --}}
  ////{{!-- } --}}
  //onSelect(opt) {
  //this.args.onSelect(opt);

  //}
}
