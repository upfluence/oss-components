import Component from '@glimmer/component';
import type { OSSButtonArgs } from './button';
import type { ensureSafeComponent } from '@embroider/util';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export type ContextMenuItem = {
  items?: ContextMenuItem[];
  groupKey?: string;
  rowRenderer?: ReturnType<typeof ensureSafeComponent>;
  action: () => void | boolean;
  [key: string]: unknown;
};

interface OSSContextMenuArgs extends OSSButtonArgs {
  items: ContextMenuItem[];
  closeOnMouseLeave?: boolean;
  onMenuOpened?: () => {};
  onMenuClosed?: () => {};
}

export default class OSSContextMenuComponent extends Component<OSSContextMenuArgs> {
  @tracked displayContextMenuPanel: boolean = false;
  @tracked declare referenceTarget: HTMLElement;
  @tracked private contextMenuPanels: HTMLElement[] = [];

  @action
  registerMenuTrigger(element: HTMLElement): void {
    this.referenceTarget = element;
  }

  @action
  toggleContextMenuPanel(event: PointerEvent): void {
    event.stopPropagation();
    if (this.args.loading) return;
    this.displayContextMenuPanel = !this.displayContextMenuPanel;
    this.displayContextMenuPanel ? this.args.onMenuOpened?.() : this.args.onMenuClosed?.();
  }

  @action
  onContextMenuPanelMouseLeave(event: MouseEvent): void {
    if (!this.args.closeOnMouseLeave) return;
    this.hideContextMenuPanel();
  }

  @action
  registerContextMenuPanel(element: HTMLElement): void {
    this.contextMenuPanels.push(element);
  }

  @action
  unregisterContextMenuPanel(element: HTMLElement): void {
    this.contextMenuPanels = this.contextMenuPanels.filter((el) => el !== element);
  }

  @action
  onClickOutsidePanel(_: HTMLElement, event: Event): void {
    if (
      (event.target && this.referenceTarget?.contains(event.target as HTMLElement)) ||
      this.contextMenuPanels.some((el) => el.contains(event.target as HTMLElement))
    )
      return;

    this.hideContextMenuPanel();
  }

  @action
  closeContextMenuPanel(): void {
    this.hideContextMenuPanel();
  }

  private hideContextMenuPanel(): void {
    this.displayContextMenuPanel = false;
    this.args.onMenuClosed?.();
  }
}
