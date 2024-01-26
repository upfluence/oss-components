import Component from '@glimmer/component';
import { isBlank } from '@ember/utils';

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

interface OSSIllustrationSignature {
  Args: {
    src: string;
  };
}

export default class OSSIllustrationComponent extends Component<OSSIllustrationSignature> {
  setupCSSVars(event: Event): void {
    const svgDocument = (<HTMLObjectElement>event.target).contentDocument?.querySelector('svg');

    if (svgDocument) {
      const style = document.createElement('style');
      style.textContent = `:root { ${extractCSSVars().join(';')} }`;
      svgDocument.append(style);
    }
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'OSS::Illustration': typeof OSSIllustrationComponent;
    'o-s-s/illustration': typeof OSSIllustrationComponent;
  }
}
