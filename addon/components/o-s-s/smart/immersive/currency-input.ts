import { assert } from '@ember/debug';
import OSSCurrencyInput, { type OSSCurrencyInputArgs } from '../../currency-input';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { runSmartGradientAnimation } from '@upfluence/oss-components/utils/run-smart-gradient-animation';
import { isEmpty } from '@ember/utils';

interface OSSSmartImmersiveCurrencyInputArgs extends OSSCurrencyInputArgs {
  loading?: boolean;
  hasError?: boolean;
}

export default class OSSSmartImmersiveCurrencyInput extends OSSCurrencyInput<OSSSmartImmersiveCurrencyInputArgs> {
  @tracked declare previousLoading: boolean;
  @tracked declare element: HTMLElement;

  constructor(owner: unknown, args: OSSCurrencyInputArgs) {
    super(owner, args, true);

    assert(
      '[component][OSS::Smart::Immersive::CurrencyInput] The parameter @onChange of type function is mandatory',
      typeof this.args.onChange === 'function'
    );

    this.previousLoading = this.args.loading ?? false;
  }

  @action
  registerElement(element: HTMLElement): void {
    this.element = element;
    this.resizeOnMount();
  }

  get smartCurrencyInputClasses(): string {
    const classes = ['smart-currency__input'];
    return classes.join(' ');
  }

  get computedClasses(): string {
    const classes = ['immersive-currency-input-container'];
    if (this.localValue) {
      classes.push('immersive-currency-input-container--filled');
    }
    if (this.disabled) {
      classes.push('immersive-currency-input-container--disabled');
    }
    if (this.args.hasError) {
      classes.push('immersive-currency-input-container--errored');
    }
    return classes.join(' ');
  }

  @action
  manageLoadingUpdate(): void {
    this.resizeHiddenInput();
    if (this.previousLoading && !this.args.loading && !isEmpty(this.localValue)) {
      runSmartGradientAnimation(this.element);
    }

    this.previousLoading = this.args.loading ?? false;
  }

  @action
  addEventInputListener(element: HTMLElement): void {
    element.addEventListener('input', this.resizeHiddenInput);
  }

  @action
  removeEventInputListener(element: HTMLElement): void {
    element.removeEventListener('input', this.resizeHiddenInput);
  }

  @action
  resizeHiddenInput(): void {
    const hiddenContainer = this.element.querySelector(
      '[data-control-name="smart-currency-input-hidden-container"]'
    ) as HTMLElement;
    if (hiddenContainer) {
      hiddenContainer.textContent = this.localValue ? this.localValue.toString() : '50';
      this.resizeContainer(hiddenContainer);
    }
  }

  @action
  resizeOnMount(): void {
    console.log('mounted');
    const placeholderContainer = this.element.querySelector('.smart-input__animated-text') as HTMLElement;
    if (placeholderContainer) {
      this.resizeContainer(placeholderContainer);
    }
  }

  private resizeContainer(element: HTMLElement): void {
    document.documentElement.style.setProperty(
      '--smart-currency-input-width',
      `${element.getBoundingClientRect().width}px`
    );
  }
}
