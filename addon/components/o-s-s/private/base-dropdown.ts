import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import { isTesting } from '@embroider/macros';

export interface BaseDropdownArgs {
  focusOnOpen?: boolean;
  addressableAs?: string;
  captureClickOutside?: boolean;
}

export default class OSSBaseDropdown<T extends BaseDropdownArgs> extends Component<T> {
  declare container: HTMLElement & { open?: boolean };
  declare observer: MutationObserver;
  declare portalTarget: HTMLElement;
  portalId: string = guidFor(this);

  @tracked isOpen: boolean = false;

  handleSelectorClose(): void {
    throw new Error('[component][OSS::BaseDropdown] You must implement handleSelectorClose method on the child class');
  }

  get dropdownAddressableClass(): string {
    return this.args.addressableAs ? `${this.args.addressableAs}__dropdown` : '';
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
    if (!this.args.captureClickOutside || this.container.contains(event.target as HTMLElement)) {
      event.stopPropagation();
    }
    this.closeDropdown();
  }

  @action
  registerContainer(element: HTMLElement): void {
    this.container = element;
    this.portalTarget = isTesting() ? this.container : document.body;
    this.observer = new MutationObserver(() => {
      this.isOpen = this.container.hasAttribute('open');

      if (!this.container.hasAttribute('open')) {
        this.handleSelectorClose();
      }
    });
    this.observer.observe(this.container, { attributes: true, attributeFilter: ['open'] });
    if (this.args.focusOnOpen) {
      this.container
        .querySelector('.upf-power-select__array-container')
        ?.addEventListener('click', this.scrollIntoView);
    }
  }

  @action
  disconnectObserver(): void {
    this.observer?.disconnect();
    if (this.args.focusOnOpen) {
      this.container
        .querySelector('.upf-power-select__array-container')
        ?.removeEventListener('click', this.scrollIntoView);
    }
  }

  @action
  scrollIntoView(): void {
    this.container.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }

  noop(event: Event): void {
    event.stopPropagation();
  }

  closeDropdown(): void {
    this.container.removeAttribute('open');
  }

  private clearExistingDropdowns(): void {
    const openedDetails = document.querySelectorAll('[data-toggle="oss-dropdown"][open]');

    openedDetails.forEach((details: HTMLElement & { open?: boolean }) => {
      if (details !== this.container) {
        details.removeAttribute('open');
      }
    });
  }
}
