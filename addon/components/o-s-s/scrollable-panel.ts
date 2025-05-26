import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

interface OSSScrollablePanelComponentSignature {
  plain?: boolean;
  disableShadows?: boolean;
  onBottomReached?: () => void;
}

export default class OSSScrollablePanelComponent extends Component<OSSScrollablePanelComponentSignature> {
  @tracked declare parentElement: HTMLElement;
  @tracked shadowTopVisible: boolean = false;
  @tracked shadowBottomVisible: boolean = false;

  resizeObserver = new ResizeObserver(this.resizeObserverCallback.bind(this));

  @action
  initScrollListener(element: HTMLElement): void {
    this.parentElement = element;
    this.displayBottomShadow();
    element.addEventListener('scroll', this.scrollListener.bind(this));
  }

  @action
  initResizeObserver(element: HTMLElement): void {
    this.resizeObserver.observe(element);
  }

  @action
  willDestroy(): void {
    this.parentElement.removeEventListener('scroll', this.scrollListener.bind(this));
    this.resizeObserver.disconnect();
    super.willDestroy();
  }

  @action
  onBottomReached(): void {
    this.args.onBottomReached?.();
  }

  private scrollListener(): void {
    if (this.parentElement.scrollTop > 0) {
      this.shadowTopVisible = true;
    } else {
      this.shadowTopVisible = false;
    }
    this.displayBottomShadow();
  }

  private displayBottomShadow(): void {
    if (this.parentElement.scrollTop + this.parentElement.clientHeight >= this.parentElement.scrollHeight - 1) {
      this.shadowBottomVisible = false;
    } else {
      this.shadowBottomVisible = true;
    }
  }

  private resizeObserverCallback(_: ResizeObserverEntry[]): void {
    this.scrollListener();
  }
}
