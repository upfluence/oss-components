import { action } from '@ember/object';
import { next } from '@ember/runloop';
import Component from '@glimmer/component';

export type FeedbackMessage = {
  type: 'error' | 'warning' | 'success';
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

  @action
  onPaste(event: ClipboardEvent): void {
    const element = event.target as HTMLInputElement;
    next(this, () => {
      this.args.onChange?.(
        this.replaceStringAtRange(
          element.value,
          element.selectionStart ?? 0,
          element.selectionEnd ?? 0,
          event.clipboardData?.getData('Text') ?? ''
        )
      );
    });
  }

  private replaceStringAtRange(s: string, start: number, end: number, substitute: string): string {
    return s.substring(0, start) + substitute + s.substring(end);
  }
}
