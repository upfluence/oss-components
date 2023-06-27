import Component from '@glimmer/component';

interface OSSLayoutsSidebarItemArgs {
  icon: string;
  locked?: boolean;
  hasNotifications?: boolean;
}

export default class OSSLayoutsSidebarItem extends Component<OSSLayoutsSidebarItemArgs> {
  get locked(): boolean {
    return this.args.locked || false;
  }

  get hasNotifications(): boolean {
    return this.args.hasNotifications || false;
  }
}
