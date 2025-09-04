import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { later, next, schedule, scheduleOnce } from '@ember/runloop';

export type GroupItem = {
  icon?: string;
  locked?: boolean;
  label?: string;
  hasNotifications: boolean;
  link: string;
  active: boolean;
  lockedAction?(): unknown;
  dataControlName?: string;
};

interface OSSLayoutSidebarGroupComponentSignature {
  icon: string;
  label: string;
  expanded: boolean;
  items: GroupItem[];
}

const GROUP_LIST_HIDE_DELAY = 450;

export default class OSSLayoutSidebarGroupComponent extends Component<OSSLayoutSidebarGroupComponentSignature> {
  @tracked displayGroupList: boolean = false;
  @tracked triggerHovered: boolean = false;
  @tracked groupListHovered: boolean = false;

  declare triggerElement: HTMLElement;

  get hasNotifications(): boolean {
    return this.args.items.some((item) => item.hasNotifications);
  }

  get isActive(): boolean {
    return !this.args.expanded && this.args.items.some((item) => item.active);
  }

  @action
  registerTrigger(element: HTMLElement): void {
    this.triggerElement = element;
  }

  @action
  handleMouseEnter(): void {
    if (this.args.expanded) return;

    schedule('afterRender', this, () => {
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

  private hideGroupList(immediate: boolean = false): void {
    const hide = () => {
      if (this.groupListHovered || this.triggerHovered) return;
      this.triggerHovered = this.displayGroupList = false;
    };

    later(this, hide, immediate ? 0 : GROUP_LIST_HIDE_DELAY);
    //this.hideGroupListTimeout = later(this, hide, immediate ? 0 : GROUP_LIST_HIDE_DELAY);
  }
}
