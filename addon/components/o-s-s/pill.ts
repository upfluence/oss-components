import { assert } from '@ember/debug';
// import { action } from '@ember/object';
import Component from '@glimmer/component';

export interface OSSPillArgs {
  label: string;
  selected: boolean;
  // onChange?(): void;
  disabled?: boolean;
}

export default class OSSPill<T extends OSSPillArgs> extends Component<T> {
  constructor(owner: unknown, args: OSSPillArgs, preventDefaultAssertions?: boolean) {
    super(owner, args);

    if (preventDefaultAssertions) return;

    assert('[component][OSS::Pill] You must pass a @label argument.', args.label);
  }

  get computedClasses(): string {
    const computedClasses = ['oss-pill'];

    if (this.args.selected) {
      computedClasses.push('oss-pill--selected');
    }

    if (this.args.disabled) {
      computedClasses.push('oss-pill--disabled');
    }

    return computedClasses.join(' ');
  }

  // @action
  // onChange(): void {
  //   if (this.args.onChange) {
  //     this.args.onChange();
  //   }
  // }
}
