import { assert } from '@ember/debug';
import OSSCurrencyInput, { type OSSCurrencyInputArgs } from '../../currency-input';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { runSmartGradientAnimation } from '@upfluence/oss-components/utils/run-smart-gradient-animation';
import { isEmpty } from '@ember/utils';
import { guidFor } from '@ember/object/internals';
import attachDropdown from '@upfluence/oss-components/utils/attach-dropdown';
import { scheduleOnce } from '@ember/runloop';
import { isTesting } from '@embroider/macros';

interface OSSSmartImmersiveCurrencyInputArgs extends OSSCurrencyInputArgs {
  loading: boolean;
  hasError?: boolean;
  addressableAs?: string;
}

export default class OSSSmartImmersiveCurrencyInput extends OSSCurrencyInput<OSSSmartImmersiveCurrencyInputArgs> {
  declare portalTarget: HTMLElement;
  portalId: string = guidFor(this);

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
    this.args.onChange(currency, value);
  }

  @action
  registerElement(element: HTMLElement): void {
    this.portalTarget = isTesting() ? element : document.body;
    this.element = element;
  }

  @action
  runAnimationOnLoadEnd(): void {
    if (this.element && this.args.loading === false && !isEmpty(this.args.value)) {
      runSmartGradientAnimation(this.element);
    }
  }

  @action
  toggleCurrencySelector(e: any): void {
    super.toggleCurrencySelector(e);

    scheduleOnce('afterRender', this, this.setupDropdownAutoplacement);
  }

  get dropdownAddressableClass(): string {
    return this.args.addressableAs ? `${this.args.addressableAs}__dropdown` : '';
  }

  cleanupDrodpownAutoplacement?: () => void;

  private setupDropdownAutoplacement(): void {
    const referenceTarget = this.element.querySelector('.currency-selector');
    const floatingTarget = document.querySelector(`#${this.portalId}`);

    if (referenceTarget && floatingTarget) {
      this.cleanupDrodpownAutoplacement = attachDropdown(
        referenceTarget as HTMLElement,
        floatingTarget as HTMLElement,
        { maxHeight: 200, maxWidth: 320, placement: 'bottom-start', fallbackPlacements: ['top-start'] }
      );
    }
  }
}
