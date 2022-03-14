import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

type SkinType =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'destructive'
  | 'success'
  | 'alert'
  | 'instagram'
  | 'facebook'
  | 'youtube';

type SkinDefType = {
  [key in SkinType]: string;
};

type SizeType = 'xs' | 'sm' | 'md' | 'lg';
type SizeDefType = {
  [key in SizeType]: string;
};

type ThemeType = 'light' | 'dark';
type ThemeDefType = {
  [key in ThemeType]?: string;
};

const SkinDefinition: SkinDefType = {
  default: 'default',
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
  destructive: 'destructive',
  success: 'success',
  alert: 'alert',
  instagram: 'social-instagram',
  facebook: 'social-facebook',
  youtube: 'social-youtube'
};

const SizeDefinition: SizeDefType = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg'
};
const ThemeDefinition: ThemeDefType = {
  dark: 'dark-bg'
};

const BASE_CLASS = 'upf-btn';
const SQUARE_CLASS = 'upf-square-btn';

interface ButtonArgs {
  skin?: string;
  size?: string;
  loading?: boolean;
  icon?: string;
  label?: string;
  theme?: string;
  square?: boolean;
}

export default class OSSButton extends Component<ButtonArgs> {
  @tracked DOMElement: HTMLElement | undefined;

  constructor(owner: unknown, args: ButtonArgs) {
    super(owner, args);

    if (!args.label && !args.icon) {
      throw new Error('[component][OSS::Button] You must pass either a @label or an @icon argument.');
    }
  }

  get skin(): string {
    if (!this.args.skin) {
      return SkinDefinition.default;
    }
    return SkinDefinition[this.args.skin as SkinType] ?? SkinDefinition.default;
  }

  get size(): string | null {
    if (!this.args.size) {
      return null;
    }
    return SizeDefinition[this.args.size as SizeType];
  }

  get theme() {
    if (!this.args.theme || !Object.keys(ThemeDefinition).includes(this.args.theme)) {
      return 'light';
    }

    return this.args.theme;
  }

  get computedClass() {
    let classes = [this.args.square ? SQUARE_CLASS : BASE_CLASS, `upf-btn--${this.skin}`];

    if (this.size) {
      classes.push(this.args.square ? `upf-square-btn--${this.size}` : `upf-btn--${this.size}`);
    }

    if (this.theme !== 'light') {
      classes.push(`upf-btn--${ThemeDefinition[this.args.theme as ThemeType]}`);
    }

    return classes.join(' ');
  }

  get loadingState(): boolean {
    if (!this.DOMElement) {
      return false;
    }

    if (this.args.loading) {
      this.DOMElement.style.width = `${this.DOMElement?.offsetWidth}px`;
    } else {
      this.DOMElement.style.removeProperty('width');
    }

    return this.args.loading || false;
  }

  @action
  didInsert(element: HTMLElement): void {
    this.DOMElement = element;
  }
}
