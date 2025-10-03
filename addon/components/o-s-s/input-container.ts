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
  autocomplete?: 'on' | 'off';
  onChange?(value: string): void;
}

const NUMERIC = /^\d*(?:\.\d*)?$/;
const NOT_NUMERIC = /[^\d.]/g;
const DOTS = /\./g;
const NUMBER_INPUT_PASSTHROUGH = ['deleteContentBackward', 'insertText', 'insertFromPaste'];

export const AutocompleteValues = ['on', 'off'];

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

  get autocomplete(): 'on' | 'off' {
    return AutocompleteValues.includes(this.args.autocomplete ?? '') ? this.args.autocomplete! : 'on';
  }

  @action
  _onChange(value: string): void {
    console.log(value);
    if (this.args.onChange) {
      this.args.onChange(value);
    }
  }

  @action
  registerBeforeInput(element: HTMLInputElement) {
    element.addEventListener('beforeinput', this.beforeInputHandler);
  }

  @action
  beforeInputHandler(event: InputEvent) {
    if (this.type !== 'number' || !event.data || !NUMBER_INPUT_PASSTHROUGH.includes(event.inputType)) return;
    if (this.type === 'number' && !NUMERIC.test(event.data)) event.preventDefault();
  }

  @action
  onPaste(event: ClipboardEvent) {
    const element = event.target as HTMLInputElement;
    const paste = event.clipboardData?.getData('Text') ?? '';
    let value = '';

    if (element.type === 'number') {
      event.preventDefault();

      let cleanedPaste = paste.replace(NOT_NUMERIC, '');
      element.value = element.value + (element.value.includes('.') ? cleanedPaste.replace(DOTS, '') : cleanedPaste);
      value = element.value;
    } else {
      value = this.replaceStringAtRange(element.value, element.selectionStart ?? 0, element.selectionEnd ?? 0, paste);
    }

    next(this, () => this.args.onChange?.(value));
  }

  private replaceStringAtRange(s: string, start: number, end: number, substitute: string): string {
    return s.substring(0, start) + substitute + s.substring(end);
  }
}
