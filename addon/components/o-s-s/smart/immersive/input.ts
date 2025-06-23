import { action } from '@ember/object';
import { isEmpty } from '@ember/utils';
import { tracked } from '@glimmer/tracking';
import { runSmartGradientAnimation } from '@upfluence/oss-components/utils/run-smart-gradient-animation';
import type { OSSInputContainerArgs } from '../../input-container';
import OSSInputContainer from '../../input-container';

interface OSSSmartImmersiveInputComponentSignature extends OSSInputContainerArgs {
  value: string;
  loading: boolean;
}

export default class OSSSmartImmersiveInputComponent extends OSSInputContainer<OSSSmartImmersiveInputComponentSignature> {
  @tracked declare element: HTMLElement;

  get placeholder(): string {
    return this.args.placeholder ?? '';
  }

  get computedClasses(): string {
    const classes = ['smart-immersive-input-container'];

    if (this.args.value) {
      classes.push('smart-immersive-input-container--filled');
    }
    if (this.args.hasError) {
      classes.push('smart-immersive-input-container--errored');
    }
    if (this.feedbackMessage) {
      classes.push(`smart-immersive-input-container--${this.feedbackMessage.type}`);
    }
    return classes.join(' ');
  }

  @action
  onChange(_: string, event: Event): void {
    if (this.args.onChange) {
      const target = event.target as HTMLInputElement;
      this.args.onChange(target.value);
    }
  }

  @action
  registerElement(element: HTMLElement): void {
    this.element = element;
  }

  @action
  runAnimationOnLoadEnd(): void {
    if (this.element && this.args.loading === false && !isEmpty(this.args.value)) {
      runSmartGradientAnimation(this.element);
    }
  }
}
