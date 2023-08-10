import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { assert } from '@ember/debug';
import { action } from '@ember/object';

import { guidFor } from '@ember/object/internals';

const focusOptions = { focusVisible: false } as FocusOptions;

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
  onClose?: () => void;
  didRender?: () => void;
}

type InfinityItem = {
  selected: boolean;
};

const DEFAULT_ITEM_LABEL = 'name';

export default class OSSInfiniteSelect extends Component<InfiniteSelectArgs> {
  @tracked _searchKeyword: string = '';
  @tracked _focusElement: number = 0;

  @tracked guid: string = guidFor(this);

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

    this.autoFocus();
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

  private _focusElementAt(index: number): void {
    const el = document.querySelectorAll(`#${this.guid} .upf-infinite-select__items-container li`)[
      index
    ] as HTMLElement;
    el.focus(focusOptions);
  }

  private _focusInput(): void {
    const el = document.querySelector(`#${this.guid} input`) as HTMLElement;
    el.focus(focusOptions);
  }

  @action
  autoFocus(): void {
    if (this.searchEnabled) {
      this._focusInput();
    } else {
      this._focusElementAt(0);
    }
  }

  @action
  handleKeyEventInput(e: KeyboardEvent): void {
    if (e.key == 'Tab') {
      e.preventDefault();
    }

    if (e.key == 'ArrowDown' || e.key == 'Enter') {
      this._focusElementAt(this._focusElement);
      e.preventDefault();
    }

    if (e.key == 'Escape') {
      this.args.onClose?.();
    }
  }

  @action
  handleKeyEvent(e: KeyboardEvent): void {
    if (e.key == 'ArrowDown') {
      if (this.args.items.length - 1 > this._focusElement) {
        this._focusElement++;
        this._focusElementAt(this._focusElement);
      }

      e.preventDefault();
    }

    if (e.key == 'ArrowUp') {
      e.preventDefault();

      if (this._focusElement == 0) {
        if (this.searchEnabled) {
          this._focusInput();
        }

        return;
      }

      if (this._focusElement > 0) {
        this._focusElement--;
        this._focusElementAt(this._focusElement);
      }
    }

    if (e.key == 'Enter') {
      const el = document.querySelectorAll('.upf-infinite-select__items-container li')[
        this._focusElement
      ] as HTMLElement;
      el.click();
      e.preventDefault();
    }

    if (e.key == 'Tab' || e.key == 'Escape') {
      this.args.onClose?.();
    }
  }
}
