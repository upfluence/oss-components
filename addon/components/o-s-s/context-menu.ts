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
  @tracked declare contextMenuPanel: HTMLElement;

  @action
  registerMenuTrigger(element: HTMLElement): void {
    this.referenceTarget = element;
  }

  @action
  toggleContextMenuPanel(event: PointerEvent): void {
    event.stopPropagation();
    console.log('this.args.click');
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
    this.contextMenuPanel = element;
  }

  @action
  onClickOutsidePanel(_: HTMLElement, event: PointerEvent): void {
    if (event.target && this.referenceTarget?.contains(event.target as Node)) return;

    this.hideContextMenuPanel();
  }

  private hideContextMenuPanel(): void {
    this.displayContextMenuPanel = false;
    this.args.onMenuClosed?.();
  }
}
