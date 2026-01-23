import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { scheduleOnce } from '@ember/runloop';

export type GroupItem = {
  icon?: string;
  locked?: boolean;
  label?: string;
  hasNotifications?: boolean;
  link: string;
  routePrefix?: string;
  active: boolean;
  dataControlName?: string;
  lockedAction?(): unknown;
  action?(): void;
};

interface OSSLayoutSidebarGroupComponentSignature {
  label: string;
  expanded: boolean;
  items: GroupItem[];
  icon?: string;
  collapsible?: boolean;
}

const GROUP_LIST_HIDE_DELAY = 450;
const ITEM_LEAVE_DELAY = 50;

export default class OSSLayoutSidebarGroupComponent extends Component<OSSLayoutSidebarGroupComponentSignature> {
  @tracked displayGroupList: boolean = false;
  @tracked triggerHovered: boolean = false;
  @tracked groupListHovered: boolean = false;
  @tracked collapsed: boolean = false;
  hideGroupListTimeout: number = 0;
  handleMouseLeaveTimeout: number = 0;

  declare triggerElement: HTMLElement;

  constructor(owner: unknown, args: OSSLayoutSidebarGroupComponentSignature) {
    super(owner, args);

    if (this.collapsible) this.collapsed = false;
  }

  get collapsible(): boolean {
    return this.args.collapsible ?? false;
  }

  get hasNotifications(): boolean {
    return this.args.items.some((item) => item.hasNotifications);
  }

  get isActive(): boolean {
    return !this.args.expanded && this.args.items.some((item) => item.active);
  }

  get computedClasses(): string {
    const classes = ['oss-sidebar-group'];

    if (this.args.expanded) classes.push('oss-sidebar-group--expanded');
    if (this.triggerHovered) classes.push('oss-sidebar-group--hovered');
    if (this.collapsed) classes.push('oss-sidebar-group--collapsed');

    return classes.join(' ');
  }

  @action
  registerTrigger(element: HTMLElement): void {
    this.triggerElement = element;
  }

  @action
  handleMouseEnter(): void {
    if (this.args.expanded) return;

    this.clearTimeouts();
    scheduleOnce('afterRender', this, () => {
      this.triggerHovered = this.displayGroupList = true;
    });

    document.querySelectorAll('.oss-sidebar-group__items-container--visible').forEach((el) => {
      if (!this.triggerElement.contains(el)) {
        el.classList.remove('oss-sidebar-group__items-container--visible');
      }
    });
  }

  @action
  handleMouseLeave(): void {
    if (this.args.expanded) return;

    this.triggerHovered = false;

    this.handleMouseLeaveTimeout = setTimeout(() => {
      const hoveredAway =
        document.querySelector('.oss-sidebar-group.oss-sidebar-group--hovered') !== null &&
        document.querySelector('.oss-sidebar-group.oss-sidebar-group--hovered') !== this.triggerElement;
      this.hideGroupList(hoveredAway);
    }, ITEM_LEAVE_DELAY);
  }

  @action
  handleGroupListEnter(): void {
    this.groupListHovered = true;
    this.clearTimeouts();
  }

  @action
  handleGroupListLeave(): void {
    this.groupListHovered = false;
    this.hideGroupList();
  }

  @action
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  private hideGroupList(immediate: boolean = false): void {
    const hide = () => {
      if (this.groupListHovered || this.triggerHovered) return;
      this.triggerHovered = this.displayGroupList = false;
    };

    if (immediate) {
      hide();
      return;
    }

    this.hideGroupListTimeout = setTimeout(() => hide(), GROUP_LIST_HIDE_DELAY);
  }

  private clearTimeouts(): void {
    clearTimeout(this.hideGroupListTimeout);
    clearTimeout(this.handleMouseLeaveTimeout);
  }
}
