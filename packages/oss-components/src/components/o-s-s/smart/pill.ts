import { assert } from '@ember/debug';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

import { runSmartGradientAnimation } from '../../../utils/run-smart-gradient-animation';
import OSSPill, { type OSSPillArgs } from '../pill';

export interface OSSSmartPillArgs extends OSSPillArgs {
  loading?: boolean;
}

export default class OSSSmartPill extends OSSPill<OSSSmartPillArgs> {
  @tracked declare element: HTMLElement;

  protected validateArgs(args: OSSPillArgs): void {
    assert('[component][OSS::Smart::Pill] You must pass a @label or an @icon argument.', args.label || args.icon);
  }

  get computedClasses(): string {
    const computedClasses = ['oss-smart-pill'];

    if (this.args.selected) {
      computedClasses.push('oss-smart-pill--selected');
    }

    if (this.args.disabled) {
      computedClasses.push('oss-smart-pill--disabled');
    }

    if (this.args.icon && !this.args.label) {
      computedClasses.push('oss-smart-pill--icon-only');
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
