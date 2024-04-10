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

    if (this.container.hasAttribute('open')) {
      this.container.removeAttribute('open');
    } else {
      this.container.setAttribute('open', '');
    }

    this.isOpen = this.container.hasAttribute('open');

    if (this.isOpen) {
      this.clearExistingDropdowns();
    }
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
      this.isOpen = this.container.hasAttribute('open');

      if (!this.container.hasAttribute('open')) {
        this.handleSelectorClose();
      }
    });
    this.observer.observe(this.container, { attributes: true, attributeFilter: ['open'] });
  }

  closeDropdown(): void {
    this.isOpen = false;
  }

  @action
  disconnectObserver(): void {
    this.observer?.disconnect();
  }

  clearExistingDropdowns(): void {
    const openedDetails = document.querySelectorAll('[data-toggle="oss-dropdown"][open]');

    openedDetails.forEach((details: HTMLElement & { open?: boolean }) => {
      if (details !== this.container) {
        details.removeAttribute('open');
      }
    });
  }
}
