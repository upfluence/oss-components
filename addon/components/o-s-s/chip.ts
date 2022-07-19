import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { action } from '@ember/object';

export type SkinType = 'default' | 'primary' | 'success' | 'danger';

type SkinDefType = {
  [key in SkinType]: string;
};

export const SkinDefinition: SkinDefType = {
  default: 'default',
  primary: 'primary',
  success: 'success',
  danger: 'danger'
};

const BASE_CLASS_CHIP: string = 'upf-chip';
interface OSSChipArgs {
  skin?: string;
  label?: string;
  onClick(crossClick: boolean): void;
  disabled?: boolean;
  ellipsisWidth?: number;
}

export default class OSSChip extends Component<OSSChipArgs> {
  constructor(owner: unknown, args: OSSChipArgs) {
    super(owner, args);

    assert(
      '[component][OSS::Chip] The parameter @onClick of type function is mandatory',
      typeof this.args.onClick === 'function'
    );
  }

  get skin(): string {
    return SkinDefinition[this.args.skin as SkinType] ?? SkinDefinition.primary;
  }

  get ellipsisWidth(): string {
    return this.args.ellipsisWidth ? `text-ellipsis-${this.args.ellipsisWidth}` : '';
  }

  get computedClass(): string {
    let classes = [BASE_CLASS_CHIP];

    if (this.skin) {
      classes.push(`upf-chip--${this.skin}`);
    }

    if (this.args.disabled) {
      classes.push(`upf-chip--disabled`);
    }

    return classes.join(' ');
  }

  @action
  notifyClick(): void {
    if (this.args.disabled) {
      return;
    }
    this.args.onClick(true);
  }
}
