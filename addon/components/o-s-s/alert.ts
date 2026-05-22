import Component from '@glimmer/component';
import { action } from '@ember/object';

type skinType = 'success' | 'error' | 'warning';

const DEFAULT_SKIN = 'info';

interface OSSAlertArgs {
  skin?: skinType;
  title?: string;
  subtitle?: string;
  closable?: boolean;
  onClose?(): void;
}

export default class OSSAlert extends Component<OSSAlertArgs> {
  declare private _DOMElement: HTMLElement;

  get skinClass(): string {
    return `upf-alert--${this.args.skin || DEFAULT_SKIN}`;
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

  @action
  initSelf(element: HTMLElement): void {
    this._DOMElement = element;
  }

  @action
  removeSelf(event: PointerEvent): void {
    event.stopPropagation();
    this.args.onClose?.();
    this._DOMElement?.remove();
  }
}
