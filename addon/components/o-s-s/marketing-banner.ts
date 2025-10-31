import Component from '@glimmer/component';
import { action } from '@ember/object';

type Options = {
  primaryGradiantColor?: string;
  secondaryGradiantColor?: string;
  backgroundGridHidden?: boolean;
  illustrationAlwaysVisible?: boolean;
};

interface OSSMarketingBannerComponentSignature {
  title: string;
  subtitle: string;
  options?: Options;
}

export default class OSSMarketingBannerComponent extends Component<OSSMarketingBannerComponentSignature> {
  get primaryGradiantColor(): string {
    return this.args.options?.primaryGradiantColor ?? '--color-violet-100';
  }

  get secondaryGradiantColor(): string {
    return this.args.options?.secondaryGradiantColor ?? '--color-melon-100';
  }

  get backgroundGridDisplay(): string {
    return this.args.options?.backgroundGridHidden ? 'none' : 'flex';
  }

  get illustrationDisplay(): string {
    return this.args.options?.illustrationAlwaysVisible ? 'flex' : 'none';
  }

  @action
  setup(element: HTMLElement) {
    element.style.setProperty('--primary-gradiant-color', `var(${this.primaryGradiantColor})`);
    element.style.setProperty('--secondary-gradiant-color', `var(${this.secondaryGradiantColor})`);
    element.style.setProperty('--background-grid-display', this.backgroundGridDisplay);
    element.style.setProperty('--illustration-display', this.illustrationDisplay);
  }
}
