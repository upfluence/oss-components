import Component from '@glimmer/component';
import { action } from '@ember/object';
import { assert } from '@ember/debug';

type Options = {
  primaryGradiantColor?: string;
  secondaryGradiantColor?: string;
  backgroundGridDisplayed?: boolean;
  illustrationAlwaysVisible?: boolean;
};

interface OSSMarketingBannerComponentSignature {
  title: string;
  subtitle: string;
  options?: Options;
}

function isSafeString(arg: any): boolean {
  return arg && arg.constructor && arg.constructor.name === 'SafeString';
}

export default class OSSMarketingBannerComponent extends Component<OSSMarketingBannerComponentSignature> {
  constructor(owner: unknown, args: OSSMarketingBannerComponentSignature) {
    super(owner, args);
    assert(
      '[component][OSS::MarketingBanner] @title is required',
      typeof args.title === 'string' || isSafeString(args.title)
    );
    assert(
      '[component][OSS::MarketingBanner] @subtitle is required',
      typeof args.subtitle === 'string' || isSafeString(args.subtitle)
    );
  }

  get primaryGradiantColor(): string {
    return this.args.options?.primaryGradiantColor ?? '--color-violet-100';
  }

  get secondaryGradiantColor(): string {
    return this.args.options?.secondaryGradiantColor ?? '--color-melon-100';
  }

  get displayBackgroundGrid(): string {
    return this.args.options?.backgroundGridDisplayed ?? true ? 'flex' : 'none';
  }

  get displayIllustration(): string {
    return this.args.options?.illustrationAlwaysVisible ? 'flex' : 'none';
  }

  @action
  setup(element: HTMLElement) {
    element.style.setProperty('--primary-gradiant-color', `var(${this.primaryGradiantColor})`);
    element.style.setProperty('--secondary-gradiant-color', `var(${this.secondaryGradiantColor})`);
    element.style.setProperty('--background-grid-display', this.displayBackgroundGrid);
    element.style.setProperty('--illustration-display', this.displayIllustration);
  }
}
