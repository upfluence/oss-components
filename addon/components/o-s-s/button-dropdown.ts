import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { assert } from '@ember/debug';

interface OSSButtonDropdownArgs {
  icon?: string;
  square?: boolean;
  label?: string;
  mainAction?(): void;
}

export default class extends Component<OSSButtonDropdownArgs> {
  @tracked displayDropdown: boolean = false;

  constructor(owner: unknown, args: OSSButtonDropdownArgs) {
    super(owner, args);

    assert(
      '[component][OSS::ButtonDropdown] You must pass either a @label or an @icon argument.',
      args.label || args.icon
    );

    if (this.args.mainAction) {
      assert(
        '[component][OSS::ButtonDropdown] The parameter @mainAction should be a function.',
        typeof this.args.mainAction === 'function'
      );
    }
  }

  @action
  onMainAction(event: MouseEvent): void {
    if (this.args.mainAction) {
      event.stopPropagation();
      this.args.mainAction();
    }
  }

  @action
  onDropdownClick(event: MouseEvent): void {
    if (!this.args.mainAction) {
      this.toggleDropdown(event);
    }
  }

  @action
  toggleDropdown(event: MouseEvent): void {
    event.stopPropagation();
    this.displayDropdown = !this.displayDropdown;
  }

  @action
  onClickOutside(_: Element, event: PointerEvent): void {
    event.stopPropagation();
    this.closeDropdown();
  }

  @action
  setupChildrenClickHandler(element: HTMLElement): void {
    element.querySelectorAll('.oss-button-dropdown__item').forEach((child: HTMLElement) => {
      child.addEventListener('click', this.closeDropdown);
    });
  }

  @action
  teardownChildrenClickHandler(element: HTMLElement): void {
    element.querySelectorAll('.oss-button-dropdown__item').forEach((child: HTMLElement) => {
      child.removeEventListener('click', this.closeDropdown);
    });
  }

  @action
  closeDropdown(e?: Event): void {
    event?.stopPropagation();
    this.displayDropdown = false;
  }
}
