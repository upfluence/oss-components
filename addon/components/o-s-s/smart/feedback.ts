import Component from '@glimmer/component';

interface OSSSmartFeedbackArgs {
  loading: boolean;
  contentString?: string;
  contentArray?: string[];
}

export default class OSSSmartFeedback extends Component<OSSSmartFeedbackArgs> {
  get currentStateClass(): string | null {
    if (this.args.loading === true) return 'oss-smart__feedback__loading';
    if (this.args.loading === false && (this.args.contentString || this.args.contentArray))
      return 'oss-smart__generated';
    return null;
  }
}
