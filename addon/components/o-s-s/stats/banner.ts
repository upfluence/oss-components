import Component from '@glimmer/component';

interface OSSStatsBannerArgs {
  loading?: boolean;
  title?: string;
  statValue?: string;
  statExtraInfo?: string;
}

export default class OSSStatsBanner extends Component<OSSStatsBannerArgs> {
  get loading(): boolean {
    return this.args.loading ?? false;
  }
}
