import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { IconNames } from './iconName.enum';

export type IconStyle = 'solid' | 'regular' | 'light' | 'duotone' | 'brand' | 'flag' | 'duotone-regular';

export interface OSSIconArgs {
  icon: keyof typeof IconNames | string;
  style?: IconStyle;
}

export const STYLE_CLASSES: Record<IconStyle, string> = {
  solid: 'fas',
  regular: 'far',
  light: 'fal',
  duotone: 'fad',
  brand: 'fab',
  'duotone-regular': 'fadr',
  flag: 'fflag'
};

export default class OSSIcon extends Component<OSSIconArgs> {
  constructor(owner: unknown, args: OSSIconArgs) {
    super(owner, args);
    assert('[component][OSS::Icon] The @icon parameter is mandatory', typeof args.icon !== 'undefined');
  }

  get iconClass(): string {
    if (typeof this.args.icon === 'string' && this.args.icon.includes('fa-')) {
      return this.args.icon;
    }
    if (typeof this.args.icon === 'string' && this.args.style === 'flag') {
      return `fflag-${this.args.icon} ff-sm ff-round`;
    }
    return IconNames[this.args.icon as keyof typeof IconNames];
  }

  get computedClass(): string {
    const classes: string[] = [];
    classes.push(STYLE_CLASSES[this.args.style ?? 'regular']);
    classes.push(this.iconClass);
    return classes.join(' ');
  }
}
