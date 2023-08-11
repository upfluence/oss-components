import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { assert } from '@ember/debug';
import { action } from '@ember/object';

import { guidFor } from '@ember/object/internals';

interface InfiniteSelectArgs {
  searchEnabled: boolean;
  loading: boolean;
  loadingMore: boolean;
  itemLabel: string;
  searchPlaceholder: string;
  items: InfinityItem[];
  inline: boolean;
  enableKeyboard?: boolean;

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

  @tracked elementId: string = guidFor(this);

  constructor(owner: unknown, args: InfiniteSelectArgs) {
    super(owner, args);

    assert(
      '[component][OSS::InfiniteSelect] Search is enabled without an `onSearch` action being passed',
      this.searchEnabled ? typeof this.args.onSearch === 'function' : true
    );

    assert('[component][OSS::InfiniteSelect] `onSelect` action is mandatory', typeof this.args.onSelect === 'function');
  }

  get enableKeyboard(): boolean {
    return this.args.enableKeyboard ?? false;
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

    if (this.enableKeyboard) {
      this.autoFocus();
    }
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
    const el = document.querySelectorAll(`#${this.elementId} .upf-infinite-select__items-container li`)[
      index
    ] as HTMLElement;
    el?.focus();
  }

  private _focusInput(): void {
    const el = document.querySelector(`#${this.elementId} input`) as HTMLElement;
    el?.focus();
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
    let actionsForKeys: Record<string, (self: any, e: KeyboardEvent) => void> = {
      ArrowDown: this.focusFirstItem,
      Enter: this.focusFirstItem
    };

    if (this.enableKeyboard) {
      actionsForKeys[e.key]?.(this, e);
    }
  }

  @action
  handleKeyEvent(e: KeyboardEvent): void {
    let actionsForKeys: Record<string, (self: any, e: KeyboardEvent) => void> = {
      ArrowDown: this.handleArrowDown,
      ArrowUp: this.handleArrowUp,
      Enter: this.handleEnter,
      Tab: this.handleTab,
      Escape: this.handleEscape
    };

    if (this.enableKeyboard) {
      actionsForKeys[e.key]?.(this, e);
    }
  }

  private handleArrowDown(self: any, e: KeyboardEvent): void {
    if (self.args.items.length - 1 > self._focusElement) {
      self._focusElement++;
      self._focusElementAt(self._focusElement);
    }

    e.preventDefault();
  }

  private handleArrowUp(self: any, e: KeyboardEvent): void {
    e.preventDefault();

    if (self._focusElement == 0) {
      if (self.searchEnabled) {
        self._focusInput();
      }

      return;
    }

    if (self._focusElement > 0) {
      self._focusElement--;
      self._focusElementAt(self._focusElement);
    }
  }

  private handleEnter(self: any, e: KeyboardEvent): void {
    const el = document.querySelectorAll('.upf-infinite-select__items-container li')[self._focusElement] as HTMLElement;
    el.click();
    e.preventDefault();
  }

  private handleTab(self: any): void {
    self.args.onClose?.();
  }

  private handleEscape(self: any): void {
    self.args.onClose?.();
  }

  private focusFirstItem(self: any, e: KeyboardEvent): void {
    self._focusElementAt(self._focusElement);
    e.preventDefault();
  }
}
