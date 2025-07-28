import Component from '@glimmer/component';
import { action } from '@ember/object';

import type { OSSTagArgs } from '@upfluence/oss-components/components/o-s-s/tag';

interface OSSLayoutSidebarItemArgs {
  icon: string;
  locked?: boolean;
  hasNotifications?: boolean;
  link: string;
  lockedAction?(): void;
  tag?: Pick<OSSTagArgs, 'label' | 'skin' | 'icon'>;
}

export default class OSSLayoutSidebarItem extends Component<OSSLayoutSidebarItemArgs> {
  get locked(): boolean {
    return this.args.locked || false;
  }

  get hasNotifications(): boolean {
    return this.args.hasNotifications || false;
  }

  @action
  onClick(): void {
    if (this.locked) {
      this.args.lockedAction?.();
    }
  }
}
