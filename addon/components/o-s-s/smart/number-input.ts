import OSSNumberInput, { type OSSNumberInputArgs } from '../number-input';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { runSmartGradientAnimation } from '@upfluence/oss-components/utils/run-smart-gradient-animation';
import { isEmpty } from '@ember/utils';

export interface OSSSmartNumberInputArgs extends OSSNumberInputArgs {
  loading?: boolean;
  hasError?: boolean;
  errorMessage?: string;
  feedbackMessage?: {
    type: 'error' | 'warning';
    value: string;
  };
}

export default class OSSSmartNumberInput extends OSSNumberInput<OSSSmartNumberInputArgs> {
  declare args: OSSSmartNumberInputArgs;
  @tracked declare element: HTMLElement;

  get computedClasses(): string {
    const classes = ['smart-number-input'];

    if (this.args.loading) {
      classes.push('smart-number-input--loading');
    } else if (this.args.value !== undefined && this.args.value !== null) {
      classes.push('smart-number-input--filled');
    }
    if (this.args.hasError || this.args.errorMessage) {
      classes.push('smart-number-input--errored');
    }
    if (this.args.feedbackMessage) {
      classes.push(`smart-number-input--${this.args.feedbackMessage.type}`);
    }
    return classes.join(' ');
  }

  @action
  handleUpdate(): void {
    if (!this.args.loading && !isEmpty(this.args.value)) {
      runSmartGradientAnimation(this.element);
    }
  }

  @action
  registerElement(element: HTMLElement): void {
    this.element = element;
  }
}
