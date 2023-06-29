import Component from '@glimmer/component';

interface OSSLayoutSidebarItemArgs {
  icon: string;
  locked?: boolean;
  hasNotifications?: boolean;
}

export default class OSSLayoutSidebarItem extends Component<OSSLayoutSidebarItemArgs> {
  get locked(): boolean {
    return this.args.locked || false;
  }

  get hasNotifications(): boolean {
    return this.args.hasNotifications || false;
  }
}
