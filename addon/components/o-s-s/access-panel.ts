import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { later } from '@ember/runloop';

interface OSSAccessPanelArgs {
  records: unknown[];
  initialLoad: boolean;
  loading?: boolean;
  onBottomReached(): void;
  onClose(): void;
  onSearch?(keyword: string): void;
}

export default class OSSAccessPanel extends Component<OSSAccessPanelArgs> {
  loadingRows = new Array(12);
  loadingMoreRows = new Array(3);

  @tracked searchKeyword: string = '';

  get displayEmptyState(): boolean {
    return (this.args.records || []).length === 0 && !this.args.loading;
  }

  get hasNoKeyword(): boolean {
    return !this.searchKeyword;
  }

  @action
  setupAnimation(element: HTMLDivElement): void {
    later(
      this,
      () => {
        element.classList.add('oss-access-panel-container--visible');
      },
      0
    );
  }

  @action
  onSearch(keyword: string): void {
    this.searchKeyword = keyword;
    this.args.onSearch!(this.searchKeyword);
  }
}
