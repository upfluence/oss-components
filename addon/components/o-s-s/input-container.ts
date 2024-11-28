import { action } from '@ember/object';
import Component from '@glimmer/component';

type FeedbackMessageType = 'error' | 'warning' | 'success';

interface OSSInputContainerArgs {
  value?: string;
  disabled?: boolean;
  message?: string;
  feedbackMessage?: {
    type: FeedbackMessageType;
    value: string;
  };
  errorMessage?: string;
  hasError?: boolean;
  placeholder?: string;
  type?: string;
  onChange?(value: string): void;
}

export default class OSSInputContainer extends Component<OSSInputContainerArgs> {
  get messageIcon(): string | undefined {
    if (this.args.feedbackMessage?.type === 'success') return 'fa-check-circle';
    if (this.args.feedbackMessage?.type === 'warning') return 'fa-exclamation-circle';
    return undefined;
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
