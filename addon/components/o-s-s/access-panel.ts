import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { later } from '@ember/runloop';

interface OSSAccessPanelSignature {
  Args: {
    records: unknown[];
    initialLoad: boolean;
    loading?: boolean;
    onSearch(keyword: string): void;
    onBottomReached(): void;
    onClose(): void;
  };
  Blocks: {
    columns: [];
    'empty-state': [];
    header: [];
    'no-results': [];
    row: [unknown];
  };
  Element: HTMLDivElement;
}

export default class OSSAccessPanelComponent extends Component<OSSAccessPanelSignature> {
  loadingRows = new Array(12);
  loadingMoreRows = new Array(3);

  @tracked searchKeyword?: string;

  get displayEmptyState(): boolean {
    return (this.args.records || []).length === 0 && !this.args.loading;
  }

  get hasNoKeyword(): boolean {
    return this.searchKeyword === undefined;
  }

  @action
  setupAnimation(element: HTMLDivElement): void {
    later(this, () => {
      element.classList.add('oss-access-panel-container--visible');
    }, 0);
  }

  @action
  onSearch(): void {
    if (this.hasNoKeyword) return;
    this.args.onSearch(this.searchKeyword!);
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'OSS::AccessPanel': typeof OSSAccessPanelComponent;
    'o-s-s/access-panel': typeof OSSAccessPanelComponent;
  }
}
