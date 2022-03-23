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
const DEFAULT_COUNTER_TIME = 5000;
const DEFAULT_STEP_COUNTER_TIME = 1000;

interface ButtonArgs {
  skin?: string;
  size?: string;
  loading?: boolean;
  icon?: string;
  label?: string;
  theme?: string;
  square?: boolean;
  countDown?: {
    callback: () => {};
    time?: number;
  };
}

export default class OSSButton extends Component<ButtonArgs> {
  @tracked DOMElement: HTMLElement | undefined;
  @tracked intervalID: ReturnType<typeof setInterval> | undefined;
  @tracked intervalState: boolean = false;
  @tracked counterTimeLeft: number = 0;

  constructor(owner: unknown, args: ButtonArgs) {
    super(owner, args);

    if (!args.label && !args.icon) {
      throw new Error('[component][OSS::Button] You must pass either a @label or an @icon argument.');
    }

    if (args.countDown && !args.countDown.callback) {
      throw new Error(
        "[component][OSS::Button] You must pass either a hash with 'callback' value to @countDown argument."
      );
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

  get counterTimeLeftSecond() {
    return this.counterTimeLeft / 1000;
  }

  @action
  didInsert(element: HTMLElement): void {
    this.DOMElement = element;
  }

  @action
  onclick() {
    if (!this.args?.countDown) {
      return;
    }

    if (this.intervalID) {
      this.clearInterval(this.intervalID);
    } else {
      this.counterTimeLeft = this.args.countDown.time || DEFAULT_COUNTER_TIME;
      this.intervalState = true;

      this.intervalID = setInterval(this.updateCounter, DEFAULT_STEP_COUNTER_TIME, this);
    }
  }

  updateCounter(ctx: any): void {
    if (ctx.counterTimeLeft > DEFAULT_STEP_COUNTER_TIME) {
      ctx.counterTimeLeft -= DEFAULT_STEP_COUNTER_TIME;
    } else {
      ctx.clearInterval(ctx.intervalID);
      ctx.args.countDown?.callback();
    }
  }

  clearInterval(intervalID: ReturnType<typeof setInterval>) {
    clearInterval(intervalID);
    this.intervalID = undefined;
    this.intervalState = false;
  }
}
