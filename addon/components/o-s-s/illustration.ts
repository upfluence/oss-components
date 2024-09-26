import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
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

interface OSSIllustrationArgs {
  src: string;
}

export default class OSSIllustration extends Component<OSSIllustrationArgs> {
  @tracked preloaded: boolean = false;
  @tracked svgDocument: SVGSVGElement | null = null;

  constructor(owner: unknown, args: OSSIllustrationArgs) {
    super(owner, args);
    this.fetchAndPatchSVG();
  }

  private fetchAndPatchSVG(): void {
    fetch(this.args.src).then((response) => {
      if (response.ok) {
        if (response.headers.get('Content-Type') !== 'image/svg+xml') {
          console.error('Illustration component only supports SVG files');
          return;
        }

        response.text().then((text) => {
          this.svgDocument = new DOMParser().parseFromString(text, 'image/svg+xml').querySelector('svg');

          if (this.svgDocument) {
            this.preloaded = true;
            this.setupCSSVars();
          }
        });
      }
    });
  }

  private setupCSSVars(): void {
    if (!this.svgDocument) return;

    const style = document.createElement('style');
    style.textContent = `:root { ${extractCSSVars().join(';')} }`;
    this.svgDocument.append(style);
  }
}
