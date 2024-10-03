import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ScrollableController extends Controller {
  @tracked displayModal: boolean = false;
  @tracked displaySidePanel: boolean = false;

  loop = Array(30);

  @action
  openModal(): void {
    this.displayModal = true;
  }

  @action
  closeModal(): void {
    this.displayModal = false;
  }

  @action
  openSidePanel(event: PointerEvent): void {
    event?.stopPropagation();

    this.displaySidePanel = true;
  }

  @action
  closeSidePanel(): void {
    this.displaySidePanel = false;
  }
}
