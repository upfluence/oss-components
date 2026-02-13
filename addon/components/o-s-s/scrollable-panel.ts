import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

interface OSSScrollablePanelComponentSignature {
  plain?: boolean;
  disableShadows?: boolean;
  horizontal?: boolean;
  hideScrollbar?: boolean;
  offset?: number;
  displayScrollArrows?: boolean;
  onBottomReached?: () => void;
}

export default class OSSScrollablePanelComponent extends Component<OSSScrollablePanelComponentSignature> {
  @tracked declare parentElement: HTMLElement;
  @tracked shadowTopVisible: boolean = false;
  @tracked shadowBottomVisible: boolean = false;
  @tracked shadowLeftVisible: boolean = false;
  @tracked shadowRightVisible: boolean = false;

  resizeObserver = new ResizeObserver(this.resizeObserverCallback.bind(this));
  mutationObserver = new MutationObserver(this.resizeObserverCallback.bind(this));

  private mutationObserverCallback(mutations: MutationRecord[]): void {
    console.log('mutation observed');
    mutations;
  }

  get offset(): number {
    return this.args.offset ?? 0;
  }

  @action
  initScrollListener(element: HTMLElement): void {
    this.parentElement = element;
    if (this.args.horizontal) {
      this.displayRightShadow();
      element.addEventListener('scroll', this.horizontalScrollListener.bind(this));
    } else {
      this.displayBottomShadow();
      element.addEventListener('scroll', this.scrollListener.bind(this));
    }
  }

  @action
  initResizeObserver(element: HTMLElement): void {
    this.resizeObserver.observe(element);
    this.mutationObserver.observe(element, { childList: true, subtree: true });
  }

  @action
  willDestroy(): void {
    if (this.args.horizontal) {
      this.parentElement.removeEventListener('scroll', this.horizontalScrollListener.bind(this));
    } else {
      this.parentElement.removeEventListener('scroll', this.scrollListener.bind(this));
    }
    this.resizeObserver.disconnect();
    super.willDestroy();
  }

  @action
  onBottomReached(): void {
    if (this.args.horizontal) return;
    this.args.onBottomReached?.();
  }

  @action
  scrollToStart(): void {
    this.parentElement.scrollTo({
      left: 0,
      behavior: 'smooth'
    });
  }

  @action
  scrollToEnd(): void {
    this.parentElement.scrollTo({
      left: this.parentElement.scrollWidth,
      behavior: 'smooth'
    });
  }

  private scrollListener(): void {
    if (this.parentElement.scrollTop - this.offset > 0) {
      this.shadowTopVisible = true;
    } else {
      this.shadowTopVisible = false;
    }
    this.displayBottomShadow();
  }

  private displayBottomShadow(): void {
    if (
      this.parentElement.scrollTop + this.parentElement.clientHeight + this.offset >=
      this.parentElement.scrollHeight - 1
    ) {
      this.shadowBottomVisible = false;
    } else {
      this.shadowBottomVisible = true;
    }
  }

  private horizontalScrollListener(): void {
    if (this.parentElement.scrollLeft - this.offset > 0) {
      this.shadowLeftVisible = true;
    } else {
      this.shadowLeftVisible = false;
    }
    this.displayRightShadow();
  }

  private displayRightShadow(): void {
    if (
      this.parentElement.scrollLeft + this.parentElement.clientWidth + this.offset >=
      this.parentElement.scrollWidth - 1
    ) {
      this.shadowRightVisible = false;
    } else {
      this.shadowRightVisible = true;
    }
  }

  private resizeObserverCallback(_: (ResizeObserverEntry | MutationRecord)[]): void {
    if (this.args.horizontal) {
      this.horizontalScrollListener();
    } else {
      this.scrollListener();
    }
  }
}
