import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class OSSBaseDropdown<T> extends Component<T> {
  declare container: HTMLElement & { open?: boolean };
  declare observer: MutationObserver;

  @tracked isOpen: boolean = false;

  handleSelectorClose(): void {
    throw new Error('[component][OSS::BaseDropdown] You must implement handleSelectorClose method on the child class');
  }

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
  registerContainer(element: HTMLElement): void {
    this.container = element;
    this.observer = new MutationObserver(() => {
      if (!this.container.open) {
        this.handleSelectorClose();
      }
    });
    this.observer.observe(this.container, { attributes: true, attributeFilter: ['open'] });
  }

  closeDropdown(): void {
    this.container.open = false;
    this.isOpen = false;
  }

  @action
  disconnectObserver(): void {
    this.observer.disconnect();
  }

  clearExistingDropdowns(): void {
    const openedDetails = document.querySelectorAll('[data-toggle="oss-dropdown"][open]');

    openedDetails.forEach((details: HTMLDetailsElement) => {
      if (details !== this.container) {
        details.open = false;
      }
    });
  }
}
