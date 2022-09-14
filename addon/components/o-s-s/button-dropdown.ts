import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { assert } from '@ember/debug';

interface OSSButtonDropdownArgs {
  icon?: string;
  label?: string;
}

export default class extends Component<OSSButtonDropdownArgs> {
  @tracked displayDropdown: boolean = false;

  constructor(owner: unknown, args: OSSButtonDropdownArgs) {
    super(owner, args);

    assert(
      '[component][OSS::ButtonDropdown] You must pass either a @label or an @icon argument.',
      args.label || args.icon
    );
  }

  @action
  toggleDropdown(event: MouseEvent): void {
    event.stopPropagation();
    this.displayDropdown = !this.displayDropdown;
  }

  @action
  closeDropdown(): void {
    this.displayDropdown = false;
  }

  @action
  setupChildrenClickHandler(element: HTMLElement) {
    element.querySelectorAll('.oss-button-dropdown__item').forEach((child: HTMLElement) => {
      child.addEventListener('click', this.closeDropdown);
    });
  }

  @action
  teardownChildrenClickHandler(element: HTMLElement) {
    element.querySelectorAll('.oss-button-dropdown__item').forEach((child: HTMLElement) => {
      child.removeEventListener('click', this.closeDropdown);
    });
  }
}
