import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import type { OSSButtonArgs } from '@upfluence/oss-components/components/o-s-s/button';
import type { ContextMenuItem } from '@upfluence/oss-components/components/o-s-s/context-menu/panel';

export interface OSSContextMenuArgs extends OSSButtonArgs {
  items: ContextMenuItem[];
  onMenuOpened?: () => void;
  onMenuClosed?: () => void;
}

export default class OSSContextMenu extends Component<OSSContextMenuArgs> {
  @tracked declare referenceTarget: HTMLElement;
  @tracked declare contextMenuPanel: HTMLElement;
  @tracked displayContextMenuPanel: boolean = false;

  @action
  registerMenuTrigger(element: HTMLElement): void {
    this.referenceTarget = element;
  }

  @action
  toggleContextMenuPanel(): void {
    this.displayContextMenuPanel = !this.displayContextMenuPanel;
    
    if (this.displayContextMenuPanel) {
      this.args.onMenuOpened?.();
    } else {
      this.args.onMenuClosed?.();
    }
  }

  @action
  onContextMenuPanelMouseLeave(event: MouseEvent): void {
    if (this.referenceTarget && this.referenceTarget.contains(event.relatedTarget as HTMLElement)) {
      return;
    }
    this.displayContextMenuPanel = false;
    this.args.onMenuClosed?.();
  }

  @action
  registerContextMenuPanel(element: HTMLElement): void {
    this.contextMenuPanel = element;
  }
}
