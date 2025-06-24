import { assert } from '@ember/debug';
import OSSCurrencyInput, { type OSSCurrencyInputArgs } from '../../currency-input';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { runSmartGradientAnimation } from '@upfluence/oss-components/utils/run-smart-gradient-animation';
import { isEmpty } from '@ember/utils';

interface OSSSmartImmersiveCurrencyInputArgs extends OSSCurrencyInputArgs {
  loading: boolean;
  hasError?: boolean;
}

export default class OSSSmartImmersiveCurrencyInput extends OSSCurrencyInput<OSSSmartImmersiveCurrencyInputArgs> {
  @tracked declare element: HTMLElement;

  constructor(owner: unknown, args: OSSCurrencyInputArgs) {
    super(owner, args, true);

    assert(
      '[component][OSS::Smart::Immersive::CurrencyInput] The parameter @onChange of type function is mandatory',
      typeof this.args.onChange === 'function'
    );
  }

  get placeholder(): string {
    return this.args.placeholder ?? '';
  }

  get computedClasses(): string {
    const classes = ['smart-immersive-currency-input-container'];

    if (this.args.value && !this.args.loading) {
      classes.push('smart-immersive-currency-input-container--filled');
    }
    if (this.args.hasError) {
      classes.push('smart-immersive-currency-input-container--errored');
    }
    return classes.join(' ');
  }

  @action
  onChange(currency: string, value: number): void {
    if (this.args.onChange) {
      this.args.onChange(currency, value);
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
