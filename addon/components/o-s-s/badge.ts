import Component from '@glimmer/component';
import { assert } from '@ember/debug';

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
  | 'xtd-violet'
  | 'xtd-smart';
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
  'xtd-violet': 'upf-badge--extended-violet',
  'xtd-smart': 'upf-badge--extended-smart'
};

interface OSSBadgeArgs {
  icon: string;
  image: string;
  text: string;
  skin?: SkinType;
  plain?: boolean;
  size?: SizeType;
}

export default class OSSBadge extends Component<OSSBadgeArgs> {
  constructor(owner: unknown, args: OSSBadgeArgs) {
    super(owner, args);

    const contentArguments = [args.icon, args.image, args.text].filter((arg: string) => arg);

    assert(
      `[component][OSS::Badge] One of @icon, @image or @text arguments is mandatory. You passed ${contentArguments.length} arguments`,
      contentArguments.length === 1
    );
  }

  get sizeClass(): string {
    const size: SizeType = this.args.size || 'md';

    assert(
      `[component][OSS::Badge] Unknown size. Available sizes are: ${Object.keys(SizeDefinition).join(', ')}`,
      Object.keys(SizeDefinition).includes(size as SizeType)
    );

    return SizeDefinition[size as SizeType];
  }

  get skinClass(): string {
    const skin: SkinType | undefined = this.args?.skin;

    if (!skin) return '';

    assert(
      `[component][OSS::Badge] Unknown skin. Available skins are: ${Object.keys(SkinDefinition).join(', ')}`,
      Object.keys(SkinDefinition).includes(skin as SkinType)
    );

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
