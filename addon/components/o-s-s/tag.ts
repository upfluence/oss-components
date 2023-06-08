import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { action } from '@ember/object';

export type SkinType =
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'secondary'
  | 'xtd-orange'
  | 'xtd-cyan'
  | 'xtd-yellow'
  | 'xtd-blue'
  | 'xtd-violet';

type SkinDefType = Record<SkinType, string>;

const BASE_CLASS = 'upf-tag';

export const SkinDefinition: SkinDefType = {
  primary: 'regular',
  success: 'success',
  warning: 'alert',
  danger: 'critical',
  secondary: 'neutral',
  'xtd-orange': 'xtd-orange',
  'xtd-cyan': 'xtd-cyan',
  'xtd-yellow': 'xtd-yellow',
  'xtd-blue': 'xtd-blue',
  'xtd-violet': 'xtd-violet'
};

interface ComponentSignature {
  Element: HTMLDivElement;
  Args: {
    label?: string;
    skin?: string;
    icon?: string;
    hasEllipsis?: boolean;
    plain?: boolean;
  };
}

export default class OSSTag extends Component<ComponentSignature> {
  constructor(owner: unknown, args: ComponentSignature['Args']) {
    super(owner, args);

    assert('[component][OSS::Tag] You must pass either a @label or an @icon argument.', args.icon || args.label);
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

    if (this.args.plain) {
      classes.push('upf-tag--plain');
    }

    return classes.join(' ');
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'OSS::Tag': typeof OSSTag;
  }
}
