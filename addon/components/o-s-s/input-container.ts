import { action } from '@ember/object';
import { next } from '@ember/runloop';
import Component from '@glimmer/component';

export const FEEDBACK_TYPES = ['error', 'warning', 'success'] as const;
export type FeedbackType = (typeof FEEDBACK_TYPES)[number];

export type FeedbackMessage = {
  type: FeedbackType;
  value: string;
};
import type { FeedbackMessage } from '@upfluence/oss-components/types/utils';

export type { FeedbackMessage };

export interface OSSInputContainerArgs {
  value?: string;
  disabled?: boolean;
  feedbackMessage?: FeedbackMessage;
  errorMessage?: string;
  hasError?: boolean;
  placeholder?: string;
  type?: string;
  autocomplete?: 'on' | 'off';
  onChange?(value: string): void;
}

export const AutocompleteValues = ['on', 'off'];

export default class OSSInputContainer<T extends OSSInputContainerArgs> extends Component<T> {
  get feedbackMessage(): FeedbackMessage | undefined {
    if (this.args.feedbackMessage && FEEDBACK_TYPES.includes(this.args.feedbackMessage.type)) {
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

  get autocomplete(): 'on' | 'off' {
    return AutocompleteValues.includes(this.args.autocomplete ?? '') ? this.args.autocomplete! : 'on';
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
