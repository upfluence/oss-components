import Component from '@glimmer/component';
import { action } from '@ember/object';

import type { OSSTagArgs } from '@upfluence/oss-components/components/o-s-s/tag';

interface OSSLayoutSidebarItemArgs {
  icon: string;
  link: string;
  locked?: boolean;
  hasNotifications?: boolean;
  tag?: Pick<OSSTagArgs, 'label' | 'skin' | 'icon'>;
  expanded?: boolean;
  label?: string;
  lockedAction?(): void;
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
    }
  }
}
