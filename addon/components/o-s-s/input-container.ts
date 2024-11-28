import { action } from '@ember/object';
import Component from '@glimmer/component';

type FeedbackMessageType = 'error' | 'warning' | 'success';
type FeedbackMessage = {
  type: FeedbackMessageType;
  value: string;
};

interface OSSInputContainerArgs {
  value?: string;
  disabled?: boolean;
  feedbackMessage?: FeedbackMessage;
  errorMessage?: string;
  hasError?: boolean;
  placeholder?: string;
  type?: string;
  onChange?(value: string): void;
}

export default class OSSInputContainer extends Component<OSSInputContainerArgs> {
  get feedbackMessage(): FeedbackMessage | undefined {
    if (this.args.feedbackMessage && ['error', 'warning', 'success'].includes(this.args.feedbackMessage.type)) {
      return this.args.feedbackMessage;
    }

    return undefined;
  }

  get messageIcon(): string | undefined {
    if (this.args.feedbackMessage?.type === 'success') return 'fa-check-circle';
    if (this.args.feedbackMessage?.type === 'warning') return 'fa-exclamation-circle';
    return undefined;
  }

  get containerClass(): string | undefined {
    if (this.args.errorMessage || this.args.hasError) return ' oss-input-container--errored';
    if (this.feedbackMessage) return ` oss-input-container--${this.feedbackMessage.type}`;
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
