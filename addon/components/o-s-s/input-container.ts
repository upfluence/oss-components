import { action } from '@ember/object';
import Component from '@glimmer/component';

type FeedbackMessageType = 'errored' | 'warning' | 'success';

interface OSSInputContainerArgs {
  value?: string;
  disabled?: boolean;
  successMessage?: string;
  warningMessage?: string;
  errorMessage?: string;
  hasError?: boolean;
  placeholder?: string;
  type?: string;
  onChange?(value: string): void;
}

export default class OSSInputContainer extends Component<OSSInputContainerArgs> {
  get hasMessage(): boolean {
    return Boolean(this.MessageType);
  }

  get MessageType(): FeedbackMessageType | null {
    if (Boolean(this.args.errorMessage) || Boolean(this.args.hasError)) return 'errored';
    if (Boolean(this.args.warningMessage)) return 'warning';
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
