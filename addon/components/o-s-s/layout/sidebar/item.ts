import Component from '@glimmer/component';
import { action } from '@ember/object';

interface OSSLayoutSidebarItemSignature {
  Args: {
    icon: string;
    locked?: boolean;
    hasNotifications?: boolean;
    link: string;
    lockedAction?(): void;
  };
  Element: HTMLDivElement;
}

export default class OSSLayoutSidebarItemComponent extends Component<OSSLayoutSidebarItemSignature> {
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

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'OSS::Layout::Sidebar::Item': typeof OSSLayoutSidebarItemComponent;
    'o-s-s/layout/sidebar/item': typeof OSSLayoutSidebarItemComponent;
  }
}
