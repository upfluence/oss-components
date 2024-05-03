import { action } from '@ember/object';
import { run } from '@ember/runloop';
import { isTesting } from '@embroider/macros';
import Component from '@glimmer/component';

export interface BaseModalArgs {
  close(): void;
  disableClickOutside?: boolean;
}

export default class BaseModal<T extends BaseModalArgs> extends Component<T> {
  private declare _elem: HTMLElement;
  private declare _parent: HTMLElement;
  protected declare initialTarget: HTMLElement | null;
  private prevBodyOverflow: string | null = null;
  private prevBodyPadding: string | null = null;

  @action
  onDestroy(): void {
    this._parent?.remove();
    run(() => {
      document.removeEventListener('keyup', this.closeOnEscape);
      document.removeEventListener('mousedown', this.trackInitialTarget);
    });
    document.body.style.overflow = this.prevBodyOverflow || 'auto';
    document.body.style.paddingRight = this.prevBodyPadding || '0';
  }

  @action
  initialize(elem: HTMLElement, enableListeners: boolean = true): void {
    if (enableListeners) {
      run(() => {
        document.addEventListener('keyup', this.closeOnEscape);
        document.addEventListener('mousedown', this.trackInitialTarget);
      });
    }
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

  @action
  trackInitialTarget(event: MouseEvent): void {
    this.initialTarget = event.target as HTMLElement;
  }

  @action
  onClickOutside(_: any, event: Event): void {
    if (this.args.disableClickOutside) return;

    if (event.target === this.initialTarget) {
      this.closeModal();
    }
  }

  private scrollbarVisible(): boolean {
    return window.innerWidth > document.documentElement.clientWidth;
  }
}
