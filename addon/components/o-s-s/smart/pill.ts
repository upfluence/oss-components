import { tracked } from '@glimmer/tracking';
import OSSPill, { type OSSPillArgs } from '../pill';
import { action } from '@ember/object';
import { runSmartGradientAnimation } from '@upfluence/oss-components/utils/run-smart-gradient-animation';

export interface OSSSmartPillArgs extends OSSPillArgs {
  loading?: boolean;
}

export default class OSSSmartPill extends OSSPill<OSSSmartPillArgs> {
  @tracked declare element: HTMLElement;

  get computedClasses(): string {
    const computedClasses = ['oss-smart-pill'];

    if (this.args.selected) {
      computedClasses.push('oss-smart-pill--selected');
    }

    if (this.args.disabled) {
      computedClasses.push('oss-smart-pill--disabled');
    }

    return computedClasses.join(' ');
  }

  @action
  registerElement(element: HTMLElement): void {
    this.element = element;
  }

  @action
  runAnimationOnLoadEnd(): void {
    if (this.element && this.args.loading === false && this.args.selected) {
      runSmartGradientAnimation(this.element);
    }
  }
}
