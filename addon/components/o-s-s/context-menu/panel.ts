import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import { next, scheduleOnce } from '@ember/runloop';
import { isTesting } from '@embroider/macros';
import type { ensureSafeComponent } from '@embroider/util';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import attachDropdown from '@upfluence/oss-components/utils/attach-dropdown';

export const SUBPANEL_OFFSET = -6;

///////////////////// TODO EXPORT IN PROPER FILE WHEN IMPLEMENTATION IS DONE
export type ContextMenuItem = {
  items?: ContextMenuItem[];
  groupKey?: string;
  rowRenderer?: ReturnType<typeof ensureSafeComponent>; // move to Component
  action: () => void | boolean;
  [key: string]: unknown;
};
//////////////////////

interface OSSContextMenuPanelComponentSignature {
  items: ContextMenuItem[];
  referenceTarget?: HTMLElement;
  placement: 'bottom-start' | 'right-start';
  offset: number | { mainAxis: number; crossAxis: number };
  onMouseLeave?: (event: MouseEvent) => void;
}

export default class OSSContextMenuPanelComponent extends Component<OSSContextMenuPanelComponentSignature> {
  declare portalTarget: HTMLElement;
  declare currentPanel: HTMLElement;
  portalId: string = guidFor(this);

  @tracked isInitialized: boolean = false;
  @tracked displaySubMenu: boolean = false;
  @tracked subItems: ContextMenuItem[] = [];
  @tracked subReferenceTarget: HTMLElement | null = null;
  @tracked subReferenceIndex: number = -1;

  @tracked subPanelElement: HTMLElement | null = null;

  cleanupDrodpownAutoplacement?: () => void;
  onScrollbound = this.onScroll.bind(this);

  subPanelOffset: { mainAxis: number; crossAxis: number } = {
    mainAxis: 0,
    crossAxis: SUBPANEL_OFFSET
  };

  constructor(owner: unknown, args: OSSContextMenuPanelComponentSignature) {
    super(owner, args);
  }

  @action
  registerPanel(element: HTMLElement): void {
    this.currentPanel = element;
    scheduleOnce('afterRender', this, () => {
      const referenceTarget = this.args.referenceTarget;
      const floatingTarget = document.querySelector(`#${this.portalId}`);
      if (referenceTarget && floatingTarget) {
        this.cleanupDrodpownAutoplacement = attachDropdown(
          referenceTarget as HTMLElement,
          floatingTarget as HTMLElement,
          {
            placement: this.args.placement,
            offset: this.args.offset,
            width: 250,
            maxHeight: 480
          }
        );
      }
    });

    this.currentPanel.querySelector('.oss-scrollable-panel-content')?.addEventListener('scroll', this.onScrollbound);
  }

  @action
  willDestroy(): void {
    super.willDestroy();
    this.currentPanel.querySelector('.oss-scrollable-panel-content')?.removeEventListener('scroll', this.onScrollbound);
  }

  @action
  registerPanelContainer(element: HTMLElement): void {
    this.portalTarget = isTesting() ? element : document.body;
    this.isInitialized = true;
  }

  @action
  openSubMenu(items: ContextMenuItem[], index: number, event: PointerEvent): void {
    if (this.subReferenceIndex === index) return;
    this.displaySubMenu = false;

    next(() => {
      this.subItems = items;
      this.displaySubMenu = true;
      const parentElement = (event.target as HTMLElement).closest('li[role="button"]') as HTMLElement;
      this.subReferenceTarget = parentElement ? parentElement : (event.target as HTMLElement);
      this.subReferenceIndex = index;
    });
  }

  @action
  closeSubMenu(): void {
    this.clearSubMenu();
  }

  @action
  toggleSubMenu(items: ContextMenuItem[], index: number, event: PointerEvent): void {
    if (this.subReferenceIndex === index) {
      this.clearSubMenu();
      return;
    }
    this.openSubMenu(items, index, event);
  }

  @action
  noop(): void {}

  @action
  onClickOutside(_: HTMLElement, event: MouseEvent): void {
    this.clearSubMenu();
    this.args.onMouseLeave?.(event);
  }

  @action
  onSubPanelMouseLeave(event: MouseEvent): void {
    if (this.subReferenceTarget && !this.subReferenceTarget.contains(event.relatedTarget as HTMLElement)) {
      this.clearSubMenu();
    }
    if (this.currentPanel && this.currentPanel.contains(event.relatedTarget as HTMLElement)) {
      return;
    }
    this.args.onMouseLeave?.(event);
  }

  @action
  registerSubPanel(element: HTMLElement): void {
    this.subPanelElement = element;
  }

  @action
  mouseLeave(event: MouseEvent): void {
    if (this.subPanelElement && this.subPanelElement.contains(event.relatedTarget as HTMLElement)) {
      return;
    }

    this.args.onMouseLeave?.(event);
  }

  @action
  onScroll(): void {
    this.clearSubMenu();
  }

  private clearSubMenu(): void {
    this.displaySubMenu = false;
    this.subReferenceIndex = -1;
    this.subReferenceTarget = null;
    this.subItems = [];
  }
}
