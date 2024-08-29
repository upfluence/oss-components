import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

interface OSSCarouselArgs {}

export default class OSSCarousel extends Component<OSSCarouselArgs> {
  @tracked declare element: HTMLElement;
  @tracked declare pages: HTMLElement[];

  // the number of dots is based on number of page divs
  constructor(owner: unknown, args: OSSCarouselArgs) {
    super(owner, args);
  }

  @action
  initialize(element: HTMLElement) {
    this.element = element;
    this.pages = Array.from(this.element.querySelectorAll('.page'));
    this.displayPage(this.pages[0]!);
  }

  private displayPage(page: HTMLElement) {
    this.pages.forEach((p) => p.classList.remove('active'));
    page.classList.add('page--active');
  }
}
