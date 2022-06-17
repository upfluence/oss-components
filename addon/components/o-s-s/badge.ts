import Component from '@glimmer/component';

type SizeType = 'sm' | 'md' | 'lg';
type SizeDefType = { [key in SizeType]: string };
const SizeDefinition: SizeDefType = {
  sm: 'upf-badge--size-sm',
  md: 'upf-badge--size-md',
  lg: 'upf-badge--size-lg'
};

type SkinType =
  | 'primary'
  | 'success'
  | 'alert'
  | 'error'
  | 'xtd-cyan'
  | 'xtd-orange'
  | 'xtd-yellow'
  | 'xtd-lime'
  | 'xtd-blue'
  | 'xtd-violet';
type SkinDefType = { [key in SkinType]: string };
export const SkinDefinition: SkinDefType = {
  primary: 'upf-badge--primary',
  success: 'upf-badge--success',
  alert: 'upf-badge--alert',
  error: 'upf-badge--error',
  'xtd-cyan': 'upf-badge--extended-cyan',
  'xtd-orange': 'upf-badge--extended-orange',
  'xtd-yellow': 'upf-badge--extended-yellow',
  'xtd-lime': 'upf-badge--extended-lime',
  'xtd-blue': 'upf-badge--extended-blue',
  'xtd-violet': 'upf-badge--extended-violet'
};

interface OSSBadgeArgs {
  icon: string;
  image: string;
  text: string;
  plain: boolean;
  size: SizeType;
  skin: SkinType;
}

export default class OSSBadge extends Component<OSSBadgeArgs> {
  constructor(owner: unknown, args: OSSBadgeArgs) {
    super(owner, args);

    const contentArguments = [args.icon, args.image, args.text].filter((arg: string) => arg);

    if (contentArguments.length !== 1) {
      throw new Error(
        `[component][OSS::Badge] One of @icon, @image or @text arguments is mandatory. You passed ${contentArguments.length} arguments`
      );
    }
  }

  get sizeClass(): string {
    const size: SizeType = this.args.size || 'md';

    if (!Object.keys(SizeDefinition).includes(size as SizeType)) {
      throw new Error(
        `[component][OSS::Badge] Unknown size. Available sizes are: ${Object.keys(SizeDefinition).join(', ')}`
      );
    }

    return SizeDefinition[size as SizeType];
  }

  get skinClass(): string {
    const skin: SkinType = this.args.skin;

    if (!skin) return '';

    if (!Object.keys(SkinDefinition).includes(skin as SkinType)) {
      throw new Error(
        `[component][OSS::Badge] Unknown skin. Available skins are: ${Object.keys(SkinDefinition).join(', ')}`
      );
    }

    return SkinDefinition[skin as SkinType];
  }

  get computedClass(): string {
    const classes = ['upf-badge', 'upf-badge--shape-round'];

    [this.sizeClass, this.skinClass].forEach((klass) => {
      classes.push(klass);
    });

    if (this.args.plain) {
      classes.push('upf-badge--plain');
    }

    return classes.join(' ');
  }
}
