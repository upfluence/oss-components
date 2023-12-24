import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';

export const AVAILABLE_SIZES = ['sm'];
type SizeType = 'sm';
type SizeDefType = { [key in SizeType]: string };
const SizeDefinition: SizeDefType = {
  sm: 'upf-checkbox--sm'
};

interface OSSCheckboxSignature {
  Args: {
    checked: boolean;
    partial?: boolean;
    disabled?: boolean;
    size?: SizeType;
    onChange(value: boolean): void;
  };
  Element: HTMLDivElement;
}

export default class OSSCheckboxComponent extends Component<OSSCheckboxSignature> {
  constructor(owner: unknown, args: OSSCheckboxSignature['Args']) {
    super(owner, args);

    assert('[component][OSS::Checkbox] Boolean @checked argument is mandatory.', typeof args.checked === 'boolean');
    assert('[component][OSS::Checkbox] @onChange argument is mandatory.', args.onChange);
  }

  get elementId(): string {
    return guidFor(this);
  }

  get modifierClasses(): string {
    const classes = [];

    if (this.args.disabled) {
      classes.push('upf-checkbox--disabled');
    }

    if (this.args.size && Object.keys(SizeDefinition).includes(this.args.size as SizeType)) {
      classes.push(SizeDefinition[this.args.size]);
    }

    return classes.join(' ');
  }

  get checkboxClasses(): string {
    const classes = ['upf-checkbox__fake-checkbox'];

    if (this.args.partial) {
      classes.push('upf-checkbox__fake-checkbox--partial');
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

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'OSS::Checkbox': typeof OSSCheckboxComponent;
    'o-s-s/checkbox': typeof OSSCheckboxComponent;
  }
}
