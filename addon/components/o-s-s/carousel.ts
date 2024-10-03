import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

const DEFAULT_BUTTON_ICON = 'fas fa-circle';
const ANIMATION_TIME = 500;

interface OSSCarouselArgs {
  buttonIcon?: string;
  animationStyle?: 'shift' | 'slide';
  showIndicators?: boolean;
  showControls?: 'overlay' | 'outside';
  autoPlay?: number;
}

interface AnimationHandler {
  (page: HTMLElement, executeAfterAnimation: (...args: any) => any): void;
}

export default class OSSCarousel extends Component<OSSCarouselArgs> {
  @tracked declare element: HTMLElement;
  @tracked declare pages: HTMLElement[];
  @tracked declare currentPageIndex: number;
  @tracked declare prevPageIndex: number;
  @tracked ongoingAnimation = false;

  private declare autoPlayInterval: number;

  get buttonIcon(): string {
    return this.args.buttonIcon ?? DEFAULT_BUTTON_ICON;
  }

  get showIndicators(): boolean {
    return this.args.showIndicators ?? true;
  }

  get showControls(): boolean {
    return !!this.args.showControls ?? false;
  }

  get displaySidePadding(): boolean {
    return this.args.showControls === 'outside';
  }

  @action
  initialize(element: HTMLElement): void {
    this.element = element;
    this.pages = Array.from(this.element.querySelectorAll('.page'));
    if (this.pages.length === 0) {
      throw new Error('[component][OSS::Carousel] No pages found in the carousel');
    }
    this.pages[0]!.classList.add('page--active');
    this.currentPageIndex = 0;
    if (this.args.autoPlay) {
      this.autoPlayInterval = setInterval(() => {
        this.nextPage();
      }, this.args.autoPlay);
    }
  }

  @action
  previousPage(): void {
    if (this.currentPageIndex === 0) {
      this.displayPage(this.pages[this.pages.length - 1]!);
      return;
    }
    this.displayPage(this.pages[this.currentPageIndex - 1]!);
  }

  @action
  nextPage(): void {
    if (this.currentPageIndex === this.pages.length - 1) {
      this.displayPage(this.pages[0]!);
      return;
    }
    this.displayPage(this.pages[this.currentPageIndex + 1]!);
  }

  @action
  displayPage(page: HTMLElement): void {
    if (this.pages.indexOf(page) === this.currentPageIndex || this.ongoingAnimation) {
      return;
    }
    this.ongoingAnimation = true;

    if (this.animationStyle === 'slide') {
      this.slideAnimationHandler(page, (classesToCleanup: string[]) => {
        this.pages[this.prevPageIndex ?? 0]!.classList.remove('page--active');
        this.pages.forEach((p) => p.classList.remove(...classesToCleanup));
        this.ongoingAnimation = false;
      });
    } else if (this.animationStyle === 'shift') {
      this.shiftAnimationHandler(page, () => {
        this.ongoingAnimation = false;
      });
    }

    page.classList.add('page--active');
    this.prevPageIndex = this.currentPageIndex;
    this.currentPageIndex = this.pages.indexOf(page);
  }

  willDestroy() {
    super.willDestroy();
    clearInterval(this.autoPlayInterval);
  }

  private get animationStyle(): 'shift' | 'slide' {
    return this.args.animationStyle ?? 'shift';
  }

  private slideAnimationHandler: AnimationHandler = (
    page: HTMLElement,
    executeAfterAnimation: (classesToCleanup: string[]) => any
  ) => {
    const classesToCleanup = [
      'animate--slide-from-left',
      'animate--slide-from-right',
      'animate--slide-to-left',
      'animate--slide-to-right'
    ];

    this.pages.forEach((p) => p.classList.remove(...classesToCleanup));
    setTimeout(() => executeAfterAnimation(classesToCleanup), ANIMATION_TIME);

    if (this.pages.indexOf(page) > this.currentPageIndex) {
      this.pages[this.currentPageIndex ?? 0]!.classList.add('animate--slide-to-left');
      page.classList.add('animate--slide-from-left');
    } else {
      this.pages[this.currentPageIndex ?? 0]!.classList.add('animate--slide-to-right');
      page.classList.add('animate--slide-from-right');
    }
  };

  private shiftAnimationHandler: AnimationHandler = (page: HTMLElement, executeAfterAnimation: () => any) => {
    const classesToCleanup = ['animate--shift-from-left', 'animate--shift-from-right', 'page--active'];

    this.pages.forEach((p) => p.classList.remove(...classesToCleanup));
    if (this.pages.indexOf(page) > this.currentPageIndex) {
      page.classList.add('animate--shift-from-left');
    } else {
      page.classList.add('animate--shift-from-right');
    }
    setTimeout(() => executeAfterAnimation(), ANIMATION_TIME);
  };
}
