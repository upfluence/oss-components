import Component from '@glimmer/component';

export type SkinType = 'primary' | 'success' | 'warning' | 'danger' | 'secondary';

type SkinDefType = {
  [key in SkinType]: string;
};
const BASE_CLASS = 'upf-tag';

export const SkinDefinition: SkinDefType = {
  primary: 'regular',
  success: 'success',
  warning: 'alert',
  danger: 'critical',
  secondary: 'neutral'
};

interface OSSTagArgs {
  label?: string;
  skin?: string;
  icon?: string;
  hasEllipsis?: boolean;
}

export default class OSSTag extends Component<OSSTagArgs> {
  constructor(owner: unknown, args: OSSTagArgs) {
    super(owner, args);

    if (!args.icon && !args.label) {
      throw new Error('[component][OSS::Tag] You must pass either a @label or an @icon argument.');
    }
  }

  get skin(): string {
    return SkinDefinition[this.args.skin as SkinType] ?? SkinDefinition.primary;
  }

  get hasEllipsis(): boolean {
    return this.args.hasEllipsis || false;
  }

  get computedClass(): string {
    let classes = [BASE_CLASS];

    if (this.skin) {
      classes.push(`upf-tag--${this.skin}`);
    }

    return classes.join(' ');
  }
}
