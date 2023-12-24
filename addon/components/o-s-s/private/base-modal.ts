import { action } from '@ember/object';
import { run } from '@ember/runloop';
import { isTesting } from '@embroider/macros';
import Component from '@glimmer/component';

export interface OSSPrivateBaseModalSignature {
  Args: {
    close(): void;
  };
}

export default class OSSPrivateBaseModalComponent extends Component<OSSPrivateBaseModalSignature> {
  private declare _elem: HTMLElement;
  private declare _parent: HTMLElement;
  private prevBodyOverflow: string | null = null;
  private prevBodyPadding: string | null = null;

  @action
  destroy(): void {
    this._parent?.remove();
    run(() => {
      document.removeEventListener('keyup', this.closeOnEscape);
    });
    document.body.style.overflow = this.prevBodyOverflow || 'auto';
    document.body.style.paddingRight = this.prevBodyPadding || '0';
  }

  @action
  init(elem: HTMLElement): void {
    run(() => {
      document.addEventListener('keyup', this.closeOnEscape);
    });
    elem.classList.add('show-modal');
    if (this.scrollbarVisible()) {
      this.prevBodyOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      this.prevBodyPadding = document.body.style.paddingRight;
      document.body.style.paddingRight = '16px';
    }
    if (!isTesting() && elem.parentElement) {
      this._parent = elem.parentElement;
      document.body.append(this._parent);
    }
    this._elem = elem;
  }

  @action
  closeModal(): void {
    this.args.close();
  }

  @action
  closeOnEscape(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      event.stopPropagation();
      this.closeModal();
    }
  }

  private scrollbarVisible(): boolean {
    return window.innerWidth > document.documentElement.clientWidth;
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'OSS::Private::BaseModal': typeof OSSPrivateBaseModalComponent;
    'o-s-s/private/base-modal': typeof OSSPrivateBaseModalComponent;
  }
}
