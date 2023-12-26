import Component from '@glimmer/component';
import { action } from '@ember/object';

interface OSSLayoutSidebarItemArgs {
  icon: string;
  locked?: boolean;
  hasNotifications?: boolean;
  link: string;
  lockedAction?(): void;
}

export default class OSSLayoutSidebarItem extends Component<OSSLayoutSidebarItemArgs> {
  get locked(): boolean {
    return this.args.locked || false;
  }

  get hasNotifications(): boolean {
    return this.args.hasNotifications || false;
  }

  @action
  prevent(event: MouseEvent): void {
    event?.stopPropagation();

    if (this.locked) {
      this.args.lockedAction?.();
    }
  }
}
