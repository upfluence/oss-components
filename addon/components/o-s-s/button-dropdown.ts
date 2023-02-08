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
  toggleDropdown(): void {
    this.displayDropdown = !this.displayDropdown;
  }

  @action
  closeDropdown(_: Element, event: PointerEvent): void {
    event.stopPropagation();
    this.hideDropdown();
  }

  @action
  setupChildrenClickHandler(element: HTMLElement) {
    element.querySelectorAll('.oss-button-dropdown__item').forEach((child: HTMLElement) => {
      child.addEventListener('click', this.hideDropdown);
    });
  }

  @action
  teardownChildrenClickHandler(element: HTMLElement) {
    element.querySelectorAll('.oss-button-dropdown__item').forEach((child: HTMLElement) => {
      child.removeEventListener('click', this.hideDropdown);
    });
  }

  private hideDropdown(): void {
    this.displayDropdown = false;
  }
}
