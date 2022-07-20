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
const BASE_CLASS_ELLIPSIS_CHIP: string = 'overflow: hidden;text-overflow: ellipsis;white-space: nowrap;';
interface OSSChipArgs {
  skin?: string;
  label: string;
  onRemove(): void;
  disabled?: boolean;
  displayMaxWidth?: number;
}

export default class OSSChip extends Component<OSSChipArgs> {
  constructor(owner: unknown, args: OSSChipArgs) {
    super(owner, args);

    assert(
      '[component][OSS::Chip] The parameter @onRemove of type function is mandatory',
      typeof this.args.onRemove === 'function'
    );
    assert('[component][OSS::Chip] The parameter @label have to be set', args.label);
  }

  get skin(): string {
    return SkinDefinition[this.args.skin as SkinType] ?? SkinDefinition.default;
  }

  get ellipsisStyle(): string {
    const style: string = `max-width: ${this.args.displayMaxWidth}px;`;
    return BASE_CLASS_ELLIPSIS_CHIP.concat(style);
  }

  get disabled(): boolean {
    return true;
  }

  get computedClass(): string {
    const classes = [BASE_CLASS_CHIP];

    if (this.skin) {
      classes.push(`upf-chip--${this.skin}`);
    }

    if (this.args.disabled) {
      classes.push('upf-chip--disabled');
    }

    return classes.join(' ');
  }

  @action
  onCrossClick(): void {
    this.args.onRemove();
  }
}
