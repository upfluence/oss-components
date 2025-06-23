import Component from '@glimmer/component';

interface OSSSmartFeedbackArgs {
  loading: boolean;
  contentString?: string;
  contentArray?: string[];
}

export default class OSSSmartFeedback extends Component<OSSSmartFeedbackArgs> {
  constructor(owner: unknown, args: OSSSmartFeedbackArgs) {
    super(owner, args);
  }

  get currentStateClass(): string | null {
    console.log(this.args.loading);
    if (this.args.loading === true) return 'oss-smart__feedback__loading';
    if (this.args.loading === false && (this.args.contentString || this.args.contentArray))
      return 'oss-smart__generated';
    return null;
  }

  get contentArrayWithDelays() {
    if (!this.args.contentArray) return [];

    return this.args.contentArray.map((item, index) => {
      return {
        text: item,
        delay: `${index * 0.5}s`
      };
    });
  }
}
