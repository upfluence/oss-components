import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { htmlSafe } from '@ember/template';
import type { SafeString } from '@ember/template/-private/handlebars';

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

export interface OSSTagArgs {
  label?: string;
  skin?: string;
  icon?: string;
  suffixIcon?: string;
  hasEllipsis?: boolean;
  plain?: boolean;
  htmlSafe?: boolean;
  size?: 'xs';
}

export default class OSSTag extends Component<OSSTagArgs> {
  constructor(owner: unknown, args: OSSTagArgs) {
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

    if (this.args.size === 'xs') {
      classes.push('upf-tag--xs');
    }

    return classes.join(' ');
  }

  get safeLabel(): SafeString {
    return htmlSafe(this.args.label ?? '');
  }
}
