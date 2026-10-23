import { assert } from '@ember/debug';
import Component from '@glimmer/component';

export interface OSSPillArgs {
  label: string;
  selected: boolean;
  icon?: string;
  disabled?: boolean;
}

export default class OSSPill<T extends OSSPillArgs> extends Component<T> {
  constructor(owner: unknown, args: OSSPillArgs) {
    super(owner, args);

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
}
