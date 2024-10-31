import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

interface OSSScrollablePanelComponentSignature {
  plain?: boolean;
}

export default class OSSScrollablePanelComponent extends Component<OSSScrollablePanelComponentSignature> {
  @tracked declare parentElement: HTMLElement;
  @tracked shadowTopVisible: boolean = false;
  @tracked shadowBottomVisible: boolean = false;

  @action
  initScrollListener(element: HTMLElement): void {
    this.parentElement = element;
    this.displayBottomShadow();
    element.addEventListener('scroll', this.scrollListener.bind(this));
  }

  @action
  willDestroy(): void {
    this.parentElement.removeEventListener('scroll', this.scrollListener.bind(this));
    super.willDestroy();
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
}
