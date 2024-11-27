import { action } from '@ember/object';
import Component from '@glimmer/component';

type MessageType = 'error' | 'alert' | 'success';

interface OSSInputContainerArgs {
  value?: string;
  disabled?: boolean;
  successMessage?: string;
  alertMessage?: string;
  errorMessage?: string;
  hasError?: boolean;
  placeholder?: string;
  type?: string;
  onChange?(value: string): void;
}

export default class OSSInputContainer extends Component<OSSInputContainerArgs> {
  get hasStyleKey(): boolean {
    return Boolean(this.styleKey);
  }

  get styleKey(): MessageType | null {
    if (Boolean(this.args.errorMessage) || Boolean(this.args.hasError)) return 'error';
    if (Boolean(this.args.alertMessage)) return 'alert';
    if (Boolean(this.args.successMessage)) return 'success';
    return null;
  }

  get type(): string {
    return this.args.type ?? 'text';
  }

  @action
  _onChange(value: string): void {
    if (this.args.onChange) {
      this.args.onChange(value);
    }
  }
}
