import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';

import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

interface OSSScrollableBarComponentSignature {
  buttonStyle?: 'button' | 'icon';
}

export default class extends Component<OSSScrollableBarComponentSignature> {
  @tracked filterEntries: IntersectionObserverEntry[] = [];

  scrollableBarId: string = guidFor(this);
  declare intersectionObserver: IntersectionObserver;

  constructor(owner: unknown, args: OSSScrollableBarComponentSignature) {
    super(owner, args);

    this.intersectionObserver = new IntersectionObserver(this.intersectionObserverCallback.bind(this), {
      root: null,
      rootMargin: '0px',
      threshold: [0, 1]
    });
  }

  get containerElement(): HTMLElement | null {
    return document.querySelector(`#${this.scrollableBarId} .inner-container`) as HTMLElement;
  }

  get scrollWidth(): number {
    if (!this.containerElement) return 0;
    return this.containerElement.clientWidth / 3;
  }

  get isLeftScrollable(): boolean {
    if (this.filterEntries.length === 0 || this.getFilterNodes().length === 0) return false;
    const entry = this.filterEntries.find((f) => f.target === this.getFilterNodes()[0]);
    return entry !== undefined && entry.intersectionRatio < 1;
  }

  get isRightScrollable(): boolean {
    if (this.filterEntries.length === 0 || this.getFilterNodes().length === 0) return false;
    const entry = this.filterEntries.find((f) => f.target === this.getFilterNodes()[this.getFilterNodes().length - 1]);
    return entry !== undefined && entry.intersectionRatio < 1;
  }

  get buttonStyle(): string {
    return this.args.buttonStyle ?? 'button';
  }

  get innerContainerStyle(): string {
    const baseStyle = this.args.buttonStyle === 'icon' ? 'inner-container-icon' : 'inner-container-btn';
    let innerContainerStyle = 'inner-container';
    if (this.isLeftScrollable) {
      innerContainerStyle += ` ${baseStyle}--scrollable-left`;
    }
    if (this.isRightScrollable) {
      innerContainerStyle += ` ${baseStyle}--scrollable-right`;
    }
    return innerContainerStyle;
  }

  @action
  observeIntersection(element: HTMLElement): void {
    this.intersectionObserver.observe(element);
    if (this.containerElement) {
      this.containerElement.scrollLeft = this.containerElement.scrollWidth;
    }
  }

  @action
  unobserveIntersection(element: HTMLElement): void {
    this.filterEntries = this.filterEntries.filter((e) => e.target !== element);
    this.intersectionObserver.unobserve(element);
  }

  @action
  scrollToRight(): void {
    if (!this.containerElement) return;
    this.containerElement.scrollBy({ left: this.scrollWidth, behavior: 'smooth' });
  }

  @action
  scrollToLeft(): void {
    if (!this.containerElement) return;
    this.containerElement.scrollBy({ left: -this.scrollWidth, behavior: 'smooth' });
  }

  private getFilterNodes(): HTMLElement[] {
    return Array.from(this.containerElement?.childNodes || []).filter(
      (node): node is HTMLElement => node instanceof HTMLElement
    );
  }

  private intersectionObserverCallback(entries: IntersectionObserverEntry[]): void {
    entries.forEach((entry) => {
      if (entry.rootBounds) {
        this.filterEntries = [...this.filterEntries.filter((e) => e.target !== entry.target), entry];
      } else {
        this.filterEntries = [...this.filterEntries.filter((e) => e.target !== entry.target)];
      }
    });
  }
}
