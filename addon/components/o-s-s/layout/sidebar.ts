import Component from '@glimmer/component';
import { action } from '@ember/object';

interface OSSLayoutSidebarArgs {
  logo: string;
  homeAction?(): void;
}

export default class OSSLayoutSidebar extends Component<OSSLayoutSidebarArgs> {
  @action
  onHomeAction(): void {
    return this.args.homeAction?.();
  }
}
