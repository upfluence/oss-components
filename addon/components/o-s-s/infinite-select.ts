import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { assert } from '@ember/debug';
import { action } from '@ember/object';
import { helper } from '@ember/component/helper';

import { guidFor } from '@ember/object/internals';
import type { SkinType } from './button';

export type InfiniteSelectAction = {
  skin?: SkinType;
  label?: string;
  icon?: string;
  onClick(event: PointerEvent): unknown;
  closeOnClick: boolean;
};

interface InfiniteSelectArgs {
  searchEnabled: boolean;
  loading: boolean;
  loadingMore: boolean;
  itemLabel: string;
  searchPlaceholder: string;
  items: InfinityItem[];
  inline: boolean;
  enableKeyboard?: boolean;
  skin?: 'default' | 'smart';
  action?: InfiniteSelectAction;

  onSelect: (item: InfinityItem) => void;
  onSearch?: (keyword: string) => void;
  onBottomReached?: () => void;
  onClose?: () => void;
  didRender?: () => void;
}

type InfinityItem = {
  selected: boolean;
  groupKey?: string;
};

type InfinityItemByGroup = Record<string, InfinityItem[]>;

const DEFAULT_ITEM_LABEL = 'name';

export default class OSSInfiniteSelect extends Component<InfiniteSelectArgs> {
  @tracked _searchKeyword: string = '';
  @tracked _focusElement: number = 0;
  @tracked focusStylesDisabled: boolean = true;
  @tracked elementId: string = guidFor(this);

  searchInput: HTMLInputElement | null = null;

  constructor(owner: unknown, args: InfiniteSelectArgs) {
    super(owner, args);

    assert(
      '[component][OSS::InfiniteSelect] Search is enabled without an `onSearch` action being passed',
      this.searchEnabled ? typeof this.args.onSearch === 'function' : true
    );

    assert('[component][OSS::InfiniteSelect] `onSelect` action is mandatory', typeof this.args.onSelect === 'function');
  }

  findItemIndex = helper((_, { item }: { item: InfinityItem }): number => {
    return Object.values(this.groups)
      .flat()
      .findIndex((element) => element === item);
  });

  get groups(): InfinityItemByGroup {
    return (this.args.items ?? []).reduce<InfinityItemByGroup>((groups, item) => {
      const groupKey = item.groupKey ?? '_ungrouped_';
      if (!groups[groupKey]) {
        groups[groupKey] = [];
      }

      groups[groupKey]!.push(item);

      return groups;
    }, {});
  }

  get lastKey(): string | undefined {
    return Object.keys(this.groups).slice(-1)[0];
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

  get skin(): 'default' | 'smart' {
    return this.args.skin ?? 'default';
  }

  @action
  onRender(): void {
    this.args.didRender?.();

    if (this.enableKeyboard) {
      this.autoFocus();
    }
  }

  @action
  updateSearchKeyword(value: string): void {
    this._searchKeyword = value;
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
    if (!this.searchEnabled && this.enableKeyboard) {
      if (this.focusStylesDisabled === true) {
        this.focusStylesDisabled = false;
        return;
      }

      this.focusStylesDisabled = false;
    }

    const actionsForKeys: Record<string, (self: any, e: KeyboardEvent) => void> = {
      ArrowDown: this.focusFirstItem,
      Enter: this.focusFirstItem,
      Escape: this.handleEscape
    };

    if (this.enableKeyboard) {
      actionsForKeys[e.key]?.(this, e);
    }
  }

  @action
  handleKeyEvent(e: KeyboardEvent): void {
    if (!this.searchEnabled && this.enableKeyboard) {
      this.focusStylesDisabled = false;
    }

    const actionsForKeys: Record<string, (self: any, e: KeyboardEvent) => void> = {
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

  @action
  initSearchInput(element: HTMLElement): void {
    this.searchInput = element.querySelector('input');
  }

  @action
  handleItemHover(index: number, event: MouseEvent): void {
    if (document.activeElement === this.searchInput) {
      return;
    }
    this._focusElementAt(index);
    this._focusElement = index;
    this.focusStylesDisabled = this._focusElement === index ? false : true;
  }

  @action
  clearHoverState(): void {
    this.focusStylesDisabled = false;
  }

  private _focusElementAt(index: number): void {
    const el = document.querySelectorAll(
      `[data-internal-id="${this.elementId}"] .upf-infinite-select__items-container li`
    )[index] as HTMLElement;
    el?.focus();
  }

  private _focusInput(): void {
    const el = document.querySelector(`[data-internal-id="${this.elementId}"] input`) as HTMLElement;
    el?.focus();
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
    self.didSelectItem(self.items[self._focusElement]);
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
