import { action } from '@ember/object';
import Component from '@glimmer/component';

interface OSSModalDialogArgs {
  title: string;
  close(): void;
  subtitle?: string;
  size?: 'sm' | 'md';
}

export default class OSSModalDialog extends Component<OSSModalDialogArgs> {
  private declare _elem: HTMLElement;

  constructor(owner: unknown, args: OSSModalDialogArgs) {
    super(owner, args);
    if (!args.close) {
      throw new Error('[component][OSS::ModalDialog] The close function is mandatory');
    }
    if (typeof args.title !== 'string') {
      throw new Error('[component][OSS::ModalDialog] The title parameter is mandatory');
    }
    document.addEventListener('keyup', this._closeOnEscape.bind(this));
  }

  get modalSize(): string {
    if (this.args.size) {
      return `oss-modal-dialog-${this.args.size}`;
    }
    return 'oss-modal-dialog-sm';
  }

  @action
  init(elem: HTMLElement): void {
    this._elem = elem;
    elem.classList.add('show-modal');
  }

  @action
  closeModal(): void {
    this.args.close();
  }

  _closeOnEscape(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.closeModal();
    }
  }
}
