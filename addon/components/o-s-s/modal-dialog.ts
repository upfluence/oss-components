import { action } from '@ember/object';
import { assert } from '@ember/debug';
import { run } from '@ember/runloop';
import { isTesting } from '@embroider/macros';
import Component from '@glimmer/component';

interface OSSModalDialogArgs {
  title: string;
  close(): void;
  subtitle?: string;
  size?: 'sm' | 'md';
}

export default class OSSModalDialog extends Component<OSSModalDialogArgs> {
  private declare _elem: HTMLElement;
  private declare _parent: HTMLElement;
  private prevBodyOverflow: string | null = null;
  private prevBodyPadding: string | null = null;

  constructor(owner: unknown, args: OSSModalDialogArgs) {
    super(owner, args);

    assert('[component][OSS::ModalDialog] The close function is mandatory', args.close);
    assert('[component][OSS::ModalDialog] The title parameter is mandatory', typeof args.title === 'string');

    run(() => {
      document.addEventListener('keyup', this._closeOnEscape);
    });
  }

  get modalSize(): string {
    if (this.args.size) {
      return `oss-modal-dialog-${this.args.size}`;
    }
    return 'oss-modal-dialog-sm';
  }

  @action
  destroy(): void {
    this._parent?.remove();
    run(() => {
      document.removeEventListener('keyup', this._closeOnEscape);
    });
    document.body.style.overflow = this.prevBodyOverflow || 'auto';
    document.body.style.paddingRight = this.prevBodyPadding || '0';
  }

  scrollbarVisible(): boolean {
    return window.innerWidth > document.documentElement.clientWidth;
  }

  @action
  init(elem: HTMLElement): void {
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
  _closeOnEscape(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      event.stopPropagation();
      this.closeModal();
    }
  }
}
