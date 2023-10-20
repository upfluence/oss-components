import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { IconNames } from './iconName.enum';

export type IconStyle = 'solid' | 'regular' | 'light' | 'duotone' | 'brand';

interface OSSIconArgs {
  icon: keyof typeof IconNames | string;
  style?: IconStyle;
}

export const STYLE_CLASSES = {
  solid: 'fas',
  regular: 'far',
  light: 'fal',
  duotone: 'fad',
  brand: 'fab'
};

export default class OSSIcon extends Component<OSSIconArgs> {
  constructor(owner: unknown, args: OSSIconArgs) {
    super(owner, args);
    assert('[component][OSS::Icon] The @icon parameter is mandatory', typeof args.icon !== 'undefined');
    assert(
      '[component][OSS::Icon] The @icon parameter should be a valid IconName or have fa- at the start',
      IconNames[args.icon as keyof typeof IconNames] || args.icon.includes('fa-')
    );
  }

  get iconClass(): string {
    if (typeof this.args.icon === 'string' && this.args.icon.includes('fa-')) {
      return this.args.icon;
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
