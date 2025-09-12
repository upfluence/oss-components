import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { later, scheduleOnce } from '@ember/runloop';

export type GroupItem = {
  icon?: string;
  locked?: boolean;
  label?: string;
  hasNotifications?: boolean;
  link: string;
  active: boolean;
  lockedAction?(): unknown;
  dataControlName?: string;
};

interface OSSLayoutSidebarGroupComponentSignature {
  label: string;
  expanded: boolean;
  items: GroupItem[];
  icon?: string;
  collapsible?: boolean;
}

const GROUP_LIST_HIDE_DELAY = 450;

export default class OSSLayoutSidebarGroupComponent extends Component<OSSLayoutSidebarGroupComponentSignature> {
  @tracked displayGroupList: boolean = false;
  @tracked triggerHovered: boolean = false;
  @tracked groupListHovered: boolean = false;
  @tracked collapsed: boolean = false;

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

    scheduleOnce('afterRender', this, () => {
      this.triggerHovered = this.displayGroupList = true;
    });
  }

  @action
  handleMouseLeave(event: MouseEvent & { relatedTarget: HTMLElement }): void {
    if (this.args.expanded || this.triggerElement.querySelector('.oss-sidebar-item')!.contains(event.relatedTarget)) {
      return;
    }

    this.triggerHovered = false;

    later(
      this,
      () => {
        const hoveredAway =
          document.querySelector('.oss-sidebar-group.oss-sidebar-group--hovered') !== null &&
          document.querySelector('.oss-sidebar-group.oss-sidebar-group--hovered') !== this.triggerElement;
        this.hideGroupList(hoveredAway);
      },
      50
    );
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

    later(this, hide, GROUP_LIST_HIDE_DELAY);
  }
}
