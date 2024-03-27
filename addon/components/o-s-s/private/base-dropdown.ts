import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class OSSBaseDropdown<T> extends Component<T> {
  declare container: HTMLDetailsElement;

  @tracked isOpen: boolean = false;

  @action
  toggleDropdown(event: MouseEvent): void {
    event.stopPropagation();
    event.preventDefault();

    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      this.clearExistingDropdowns();
    }

    this.container.open = this.isOpen;
  }

  @action
  onClickOutside(_: HTMLElement, event: MouseEvent): void {
    event.stopPropagation();
    this.closeDropdown();
  }

  @action
  registerContainer(element: HTMLDetailsElement): void {
    this.container = element;
  }

  closeDropdown(): void {
    this.container.open = false;
    this.isOpen = false;
  }

  clearExistingDropdowns(): void {
    const openedDetails = document.querySelectorAll('details[data-toggle="oss-dropdown"][open]');

    openedDetails.forEach((details: HTMLDetailsElement) => {
      if (details !== this.container) {
        details.open = false;
      }
    });
  }
}
