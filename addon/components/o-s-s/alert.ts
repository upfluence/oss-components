import Component from '@glimmer/component';

type skinType = 'success' | 'error' | 'info' | 'warning';

interface OSSAlertArgs {
  skin: skinType;
  title?: string;
  subtitle?: string;
}

export default class OSSAlert extends Component<OSSAlertArgs> {
  constructor(owner: unknown, args: OSSAlertArgs) {
    super(owner, args);

    if (!args.skin) {
      throw new Error('[component][OSS::Alert] The @skin argument is mandatory');
    }
  }

  get skinClass(): string {
    return `upf-alert-v2--${this.args.skin}`;
  }

  get iconClass(): string {
    switch (this.args.skin) {
      case 'success':
        return 'fa-check-circle';
      case 'warning':
        return 'fa-exclamation-circle';
      case 'error':
        return 'fa-exclamation-triangle';
      case 'info':
        return 'fa-info-circle';
      default:
        return '';
    }
  }
}
