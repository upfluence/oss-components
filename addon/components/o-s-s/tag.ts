import Component from '@glimmer/component';
import { assert } from '@ember/debug';

export type SkinType =
  | 'primary'
  | 'primary-gradient'
  | 'success'
  | 'warning'
  | 'danger'
  | 'secondary'
  | 'xtd-orange'
  | 'xtd-cyan'
  | 'xtd-yellow'
  | 'xtd-blue'
  | 'xtd-violet'
  | 'xtd-lime'
  | 'chat-gpt';

type SkinDefType = {
  [key in SkinType]: string;
};
const BASE_CLASS = 'upf-tag';

export const SkinDefinition: SkinDefType = {
  primary: 'regular',
  'primary-gradient': 'primary-gradient',
  success: 'success',
  warning: 'alert',
  danger: 'critical',
  secondary: 'neutral',
  'xtd-orange': 'xtd-orange',
  'xtd-cyan': 'xtd-cyan',
  'xtd-yellow': 'xtd-yellow',
  'xtd-blue': 'xtd-blue',
  'xtd-violet': 'xtd-violet',
  'xtd-lime': 'xtd-lime',
  'chat-gpt': 'chat-gpt'
};

interface OSSTagSignature {
  Args: {
    label?: string;
    skin?: string;
    icon?: string;
    hasEllipsis?: boolean;
    plain?: boolean;
  };
  Element: HTMLDivElement;
}

export default class OSSTagComponent extends Component<OSSTagSignature> {
  constructor(owner: unknown, args: OSSTagSignature['Args']) {
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
    'OSS::Tag': typeof OSSTagComponent;
    'o-s-s/tag': typeof OSSTagComponent;
  }
}
