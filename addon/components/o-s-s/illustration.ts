import Component from '@glimmer/component';
import { action } from '@ember/object';
import { later } from '@ember/runloop';

export const extractCSSVars = (): string[] => {
  return (
    Array.from(document.styleSheets)
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
      .map((cssRule: CSSStyleRule) => cssRule.cssText.split('{')[1].split('}')[0].trim().split(';'))
      .flat()
      .filter((text) => text !== '')
  );
};

interface OSSIllustrationArgs {
  src: string;
}

export default class OSSIllustration extends Component<OSSIllustrationArgs> {
  declare element: HTMLObjectElement;

  @action
  setupCSSVars(event: Event): void {
    this.element = <HTMLObjectElement>event.target;
    later(this, this._insertStyle, 1000);
  }

  private _insertStyle(): void {
    const svgDocument = this.element.contentDocument?.querySelector('svg');

    if (svgDocument) {
      const style = document.createElement('style');
      style.textContent = `:root { ${extractCSSVars().join(';')} }`;
      svgDocument.append(style);
    }
  }
}
