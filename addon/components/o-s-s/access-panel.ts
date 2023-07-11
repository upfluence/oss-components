import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

interface OSSAccessPanelArgs {
  records: unknown[];
  initialLoad: boolean;
  loading?: boolean;
  onSearch(keyword: string): void;
  onBottomReached(): void;
  onClose(): void;
}

export default class OSSAccessPanel extends Component<OSSAccessPanelArgs> {
  loadingRows = new Array(12);
  loadingMoreRows = new Array(3);

  @tracked searchKeyword?: string;

  get displayEmptyState(): boolean {
    return (this.args.records || []).length === 0 && !this.args.loading;
  }

  get hasNoKeyword(): boolean {
    return this.searchKeyword === undefined;
  }

  @action
  onSearch(): void {
    if (this.hasNoKeyword) return;
    this.args.onSearch(this.searchKeyword!);
  }
}
