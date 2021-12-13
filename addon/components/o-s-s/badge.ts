import Component from '@glimmer/component';

type ShapeType = 'round' | 'square';
type ShapeDefType = { [key in ShapeType]: string };
const ShapeDefinition: ShapeDefType = {
  round: 'upf-badge--shape-round',
  square: 'upf-badge--shape-square',
}

type SizeType = 'sm' | 'md';
type SizeDefType = { [key in SizeType]: string };
const SizeDefinition: SizeDefType = {
  sm: 'upf-badge--size-sm',
  md: 'upf-badge--size-md'
};

interface OSSBadgeArgs {
  icon: string;
  image: string;
  shape: ShapeType;
  size: SizeType;
}

export default class OSSBadge extends Component<OSSBadgeArgs> {
  constructor(owner: unknown, args: OSSBadgeArgs) {
    super(owner, args);

    if (!args.icon && !args.image) {
      throw new Error('[component][OSS::Badge] You must pass either a @icon or a @image argument.');
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

  get shapeClass(): string {
    const shape: ShapeType = this.args.shape || 'round';

    if (!Object.keys(ShapeDefinition).includes(shape as ShapeType)) {
      throw new Error(
        `[component][OSS::Badge] Unknown shape. Available shapes are: ${Object.keys(ShapeDefinition).join(', ')}`
      );
    }

    return ShapeDefinition[shape as ShapeType];
  }

  get computedClass(): string {
    const classes = ['upf-badge', 'fx-row', 'fx-malign-center', 'fx-xalign-center'];

    classes.push(this.sizeClass);
    classes.push(this.shapeClass);

    return classes.join(' ');
  }
}
