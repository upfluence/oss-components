import Component from '@glimmer/component';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';

const AVAILABLE_SIZES = ['sm'];

interface OSSCheckboxArgs {
  checked: boolean;
  disabled: boolean;
  size: string;
  onChange(value: boolean): void;
}

export default class OSSCheckbox extends Component<OSSCheckboxArgs> {
  constructor(owner: unknown, args: OSSCheckboxArgs) {
    super(owner, args);

    if (typeof args.checked !== 'boolean') {
      throw new Error(`[component][OSS::Checkbox] Boolean @checked argument is mandatory.`);
    }

    if (!args.onChange) {
      throw new Error(`[component][OSS::Checkbox] @onChange argument is mandatory.`);
    }
  }

  get elementId(): string {
    return guidFor(this);
  }

  get modifierClasses(): string {
    const classes = [];

    if (this.args.disabled) {
      classes.push('upf-checkbox--disabled');
    }

    if (this.args.size && AVAILABLE_SIZES.includes(this.args.size)) {
      classes.push(`upf-checkbox--${this.args.size}`);
    }

    return classes.join(' ');
  }

  @action
  updateValue(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();

    if (!this.args.disabled) {
      this.args.onChange(!this.args.checked);
    }
  }
}
