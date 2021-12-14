import Component from '@glimmer/component';

type SizeType = 'sm' | 'md' | 'lg';
type SizeDefType = { [key in SizeType]: string };
const SizeDefinition: SizeDefType = {
  sm: 'upf-badge--size-sm',
  md: 'upf-badge--size-md',
  lg: 'upf-badge--size-lg'
};

interface OSSBadgeArgs {
  icon: string;
  image: string;
  text: string;
  size: SizeType;
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

  get computedClass(): string {
    const classes = ['upf-badge', 'upf-badge--shape-round'];

    classes.push(this.sizeClass);

    return classes.join(' ');
  }
}
