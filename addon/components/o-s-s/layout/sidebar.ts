import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { scheduleOnce } from '@ember/runloop';

import UPFLocalStorage from '@upfluence/oss-components/utils/upf-local-storage';

export type HomeParameters = {
  logo: string;
  url: string;
};

const SIDEBAR_EXPANDED_STATE = 'oss-layout-sidebar-expanded';

interface OSSLayoutSidebarArgs {
  homeParameters?: HomeParameters;
  logo?: string;
  homeURL?: string;
  expandable?: boolean;
}

export default class OSSLayoutSidebar extends Component<OSSLayoutSidebarArgs> {
  @tracked expanded: boolean = true;

  upfLocalStorage = new UPFLocalStorage();

  constructor(owner: unknown, args: OSSLayoutSidebarArgs) {
    super(owner, args);

    scheduleOnce('afterRender', this, this.initializeSidebarState);
  }

  get computedClasses(): string {
    const classes = ['oss-sidebar-container', 'oss-sidebar--containers'];

    if (this.expanded) {
      classes.push('oss-sidebar-container--expanded');
    }

    return classes.join(' ');
  }

  @action
  toggleExpandedState(): void {
    this.expanded = !this.expanded;
    this.upfLocalStorage.saveItem(SIDEBAR_EXPANDED_STATE, String(this.expanded));
  }

  private initializeSidebarState(): void {
    this.expanded = Boolean(this.args.expandable) && this.upfLocalStorage.getItem(SIDEBAR_EXPANDED_STATE) !== 'false';
  }
}
