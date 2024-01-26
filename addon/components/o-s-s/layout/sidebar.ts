import Component from '@glimmer/component';
import { action } from '@ember/object';

interface OSSLayoutSidebarSignature {
  Args: {
    logo: string;
    homeAction?(): void;
  };
  Blocks: {
    content: [];
    footer: [];
  };
  Element: HTMLDivElement;
}

export default class OSSLayoutSidebarComponent extends Component<OSSLayoutSidebarSignature> {
  @action
  onHomeAction(): void {
    return this.args.homeAction?.();
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'OSS::Layout::Sidebar': typeof OSSLayoutSidebarComponent;
    'o-s-s/layout/sidebar': typeof OSSLayoutSidebarComponent;
  }
}
