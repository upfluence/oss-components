import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

interface OSSStackContainerComponentSignature {
  direction: 'row' | 'column';
  style: 'over' | 'under';
  pxMargin: string;
  bringToFrontOnHover?: boolean;
  subElementClass?: string;
}

const DEFAULT_MARGIN = '-6px';

export default class OSSStackContainerComponent extends Component<OSSStackContainerComponentSignature> {
  @tracked declare element: HTMLElement;
  @tracked declare subElements: Element[];

  get computedClass(): string {
    const classes = ['oss-stack-container'];

    classes.push(`oss-stack-container--${this.direction}`);
    classes.push(`oss-stack-container--style-${this.style}`);

    return classes.join(' ');
  }

  get direction(): string {
    return this.args.direction ?? 'row';
  }

  get style(): string {
    return this.args.style ?? 'under';
  }

  get margin(): string {
    return this.args.pxMargin ? this.ensureNegativeMargin(this.args.pxMargin) : DEFAULT_MARGIN;
  }

  @action
  initComponent(element: HTMLElement): void {
    this.element = element;

    this.subElements = Array.from(this.element.children);
    if (this.style === 'over') {
      this.subElements.reverse();
    }
    this.applyStylesToSubElements();
    if (this.args.bringToFrontOnHover) {
      this.bringToFront();
    }
  }

  @action
  applyStylesToSubElements(): void {
    this.subElements.forEach((child, index) => {
      (child as HTMLElement).style.zIndex = index.toString();
      if (this.args.subElementClass) {
        (child as HTMLElement).classList.add(this.args.subElementClass);
      }

      if (this.args.style === 'under' && index === this.subElements.length - 1) return;
      if (this.args.style === 'over' && index === 0) return;
      if (this.direction === 'row') {
        (child as HTMLElement).style.marginRight = this.margin;
      } else {
        (child as HTMLElement).style.marginBottom = this.margin;
      }
    });
  }

  @action
  bringToFront(): void {
    this.subElements.forEach((child) => {
      child.addEventListener('mouseenter', () => {
        (child as HTMLElement).style.zIndex = this.subElements.length.toString();
      });
      child.addEventListener('mouseleave', () => {
        (child as HTMLElement).style.zIndex = Array.from(this.element.children).indexOf(child).toString();
      });
    });
  }

  private ensureNegativeMargin(margin: string): string {
    const parsedMargin = parseInt(margin);
    if (isNaN(parsedMargin)) {
      return DEFAULT_MARGIN;
    }
    return `-${Math.abs(parsedMargin)}px`;
  }
}
