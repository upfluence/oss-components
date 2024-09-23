import Component from '@glimmer/component';
import { isBlank } from '@ember/utils';
import { action } from '@ember/object';

const MAX_ATTEMPTS = 4;

export const extractCSSVars = (): string[] => {
  return Array.from(document.styleSheets)
    .filter((styleSheet) => {
      try {
        return styleSheet.cssRules;
      } catch (e) {
        return false;
      }
    })
    .map((styleSheet) => Array.from(styleSheet.cssRules))
    .flat()
    .filter((cssRule: CSSStyleRule) => cssRule.selectorText === ':root')
    .map((cssRule: CSSStyleRule) => {
      const cssVars = cssRule.cssText.split('{')[1];
      if (!cssVars) return [];
      return (cssVars.split('}')?.[0] || '').trim().split(';');
    })
    .flat()
    .filter((text) => !isBlank(text));
};

interface OSSIllustrationArgs {
  src: string;
}

export default class OSSIllustration extends Component<OSSIllustrationArgs> {
  attempts: number = 0;

  @action
  setupCSSVars(event: Event): void {
    if (this.attempts > MAX_ATTEMPTS) return;

    const svgDocument = (<HTMLObjectElement>event.target).contentDocument?.querySelector('svg');

    if (svgDocument) {
      const style = document.createElement('style');
      style.textContent = `:root { ${extractCSSVars().join(';')} }`;
      svgDocument.append(style);
      return;
    }

    this.setupCSSVars(event);
    this.attempts++;
  }
}
