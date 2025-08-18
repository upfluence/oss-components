import { action } from '@ember/object';
import { isEmpty } from '@ember/utils';
import { tracked } from '@glimmer/tracking';
import { runSmartGradientAnimation } from '@upfluence/oss-components/utils/run-smart-gradient-animation';
import type { OSSTextAreaArgs } from '../text-area';
import OSSTextArea from '../text-area';

interface OSSSmartImmersiveInputComponentSignature extends OSSTextAreaArgs {
  value: string;
  loading: boolean;
  hasError?: boolean;
}

export default class OSSSmartTextareaComponent extends OSSTextArea<OSSSmartImmersiveInputComponentSignature> {
  @tracked declare element: HTMLElement;
  @tracked declare textAreaElement: HTMLTextAreaElement;

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

  get resize(): 'vertical' | 'horizontal' | 'none' {
    return this.args.resize ?? 'none';
  }

  get computedClass(): string {
    let computedClass = super.computedClass;

    if (this.args.loading) {
      computedClass += ' oss-textarea--loading';
    }

    return computedClass;
  }
}
