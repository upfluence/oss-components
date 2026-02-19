import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import { next, scheduleOnce } from '@ember/runloop';
import { isTesting } from '@embroider/macros';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

import attachDropdown from '@upfluence/oss-components/utils/attach-dropdown';
import type { ContextMenuItem } from '@upfluence/oss-components/components/o-s-s/context-menu';

export const DEFAULT_PLACEMENT = 'bottom-start';
export const DEFAULT_OFFSET = { mainAxis: 0, crossAxis: 0 };
export const SUBPANEL_OFFSET = -6;

interface OSSContextMenuPanelComponentSignature {
  items: ContextMenuItem[];
  referenceTarget?: HTMLElement;
  placement: 'bottom-start' | 'right-start';
  offset: number | { mainAxis: number; crossAxis: number };
  onMouseLeave?: (event: MouseEvent) => void;
  onClose?: () => void;
  registerPanel?: (element: HTMLElement) => void;
  unregisterPanel?: (element: HTMLElement) => void;
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

  cleanupDropdownAutoplacement?: () => void;
  onScrollbound = this.onScroll.bind(this);

  subPanelOffset: { mainAxis: number; crossAxis: number } = {
    mainAxis: 0,
    crossAxis: SUBPANEL_OFFSET
  };

  get panelContainerCustomClasses(): string {
    return isTesting() ? '' : 'context-menu-panel__hidden';
  }

  @action
  registerPanel(element: HTMLElement): void {
    this.currentPanel = element;
    this.args.registerPanel?.(this.currentPanel);
    scheduleOnce('afterRender', this, () => {
      this.initializeDropdown();
    });

    this.currentPanel.querySelector('.oss-scrollable-panel-content')?.addEventListener('scroll', this.onScrollbound);
  }

  @action
  willDestroy(): void {
    this.args.unregisterPanel?.(this.currentPanel);
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
      this.setupSubMenu(items, index, event);
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
    this.clearSubMenu();
  }

  @action
  onScroll(): void {
    this.clearSubMenu();
  }

  @action
  callAction(action: ContextMenuItem['action'], event?: MouseEvent): void {
    const returnValue = action?.(event);
    if (returnValue !== false) {
      this.args.onClose?.();
    }
  }

  private clearSubMenu(): void {
    this.displaySubMenu = false;
    this.subReferenceIndex = -1;
    this.subReferenceTarget = null;
    this.subPanelElement = null;
    this.subItems = [];
  }

  private initializeDropdown(): void {
    const referenceTarget = this.args.referenceTarget;
    const floatingTarget = document.querySelector(`#${this.portalId}`);
    if (referenceTarget && floatingTarget) {
      this.cleanupDropdownAutoplacement = attachDropdown(
        referenceTarget as HTMLElement,
        floatingTarget as HTMLElement,
        {
          placement: this.args.placement ?? DEFAULT_PLACEMENT,
          offset: this.args.offset ?? DEFAULT_OFFSET,
          width: 250,
          maxHeight: 480
        }
      );
    }
  }

  private setupSubMenu(items: ContextMenuItem[], index: number, event: PointerEvent): void {
    this.subItems = items;
    this.displaySubMenu = true;
    const parentElement = (event.target as HTMLElement).closest('li[role="button"]') as HTMLElement;
    this.subReferenceTarget = parentElement ? parentElement : (event.target as HTMLElement);
    this.subReferenceIndex = index;
  }
}
