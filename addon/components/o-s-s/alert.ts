import Component from '@glimmer/component';
import { action } from '@ember/object';

type skinType = 'success' | 'error' | 'warning';

const DEFAULT_SKIN = 'info';

interface OSSAlertSignature {
  Args: {
    skin?: skinType;
    title?: string;
    subtitle?: string;
    plain?: boolean;
    closable?: boolean;
    onClose?(): void;
  };
  Blocks: {
    'extra-content': [];
  };
  Element: HTMLDivElement;
}

export default class OSSAlertComponent extends Component<OSSAlertSignature> {
  private declare _DOMElement: HTMLElement;

  get skinClass(): string {
    return `upf-alert--${this.args.skin || DEFAULT_SKIN}`;
  }

  get plain(): boolean {
    return this.args.plain ?? true;
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

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'OSS::Alert': typeof OSSAlertComponent;
    'o-s-s/alert': typeof OSSAlertComponent;
  }
}
