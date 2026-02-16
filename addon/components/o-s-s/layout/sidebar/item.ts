import Component from '@glimmer/component';
import { action } from '@ember/object';

import type { OSSTagArgs } from '@upfluence/oss-components/components/o-s-s/tag';

interface OSSLayoutSidebarItemArgs {
  link: string;
  routePrefix?: string;
  icon?: string;
  locked?: boolean;
  hasNotifications?: boolean;
  tag?: Pick<OSSTagArgs, 'label' | 'skin' | 'icon'>;
  expanded?: boolean;
  label?: string;
  disableAutoActive?: boolean;
  lockedAction?(): void;
  action?(): void;
}

export default class OSSLayoutSidebarItem extends Component<OSSLayoutSidebarItemArgs> {
  get locked(): boolean {
    return this.args.locked || false;
  }

  get hasNotifications(): boolean {
    return this.args.hasNotifications || false;
  }

  get computedClasses(): string {
    const classes = ['oss-sidebar-item'];

    if (this.args.expanded) {
      classes.push('oss-sidebar-item--expanded');
    }

    return classes.join(' ');
  }

  @action
  onClick(): void {
    if (this.locked) {
      this.args.lockedAction?.();
    } else {
      this.args.action?.();
    }
  }

  @action
  handleMouseEnter(event: PointerEvent): void {
    if (this.args.expanded || (event.currentTarget as HTMLElement).closest('.oss-sidebar-group') !== null) return;

    document.querySelectorAll('.oss-sidebar-group__items-container--visible').forEach((el) => {
      el.classList.remove('oss-sidebar-group__items-container--visible');
    });
  }
}
