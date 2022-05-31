import Component from '@glimmer/component';

type skinType = 'success' | 'error' | 'warning';

const DEFAULT_SKIN = 'info';

interface OSSAlertArgs {
  skin?: skinType;
  title?: string;
  subtitle?: string;
}

export default class OSSAlert extends Component<OSSAlertArgs> {
  get skinClass(): string {
    return `upf-alert-v2--${this.args.skin || DEFAULT_SKIN}`;
  }

  get iconClass(): string {
    switch (this.args.skin) {
      case 'success':
        return 'fa-check-circle';
      case 'warning':
        return 'fa-exclamation-circle';
      case 'error':
        return 'fa-exclamation-triangle';
      default:
        return 'fa-info-circle';
    }
  }
}
