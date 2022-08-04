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
  label: string;
  disabled?: boolean;
  maxDisplayWidth?: number;
  onRemove(): void;
}

export default class OSSChip extends Component<OSSChipArgs> {
  constructor(owner: unknown, args: OSSChipArgs) {
    super(owner, args);

    assert(
      '[component][OSS::Chip] The parameter @onRemove of type function is mandatory',
      typeof this.args.onRemove === 'function'
    );
    assert('[component][OSS::Chip] The @label parameter is mandatory', args.label);
  }

  get skin(): string {
    return SkinDefinition[this.args.skin as SkinType] ?? SkinDefinition.default;
  }

  get ellipsisStyle(): string {
    return `max-width: ${this.args.maxDisplayWidth}px;`;
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
  stopPropagation(event: MouseEvent) {
    event.stopPropagation();
  }

  @action
  onCrossClick(event: MouseEvent): void {
    event.stopPropagation();

    if (this.args.disabled) {
      return;
    }
    this.args.onRemove();
  }
}
