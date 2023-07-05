import Component from '@glimmer/component';
import { assert } from '@ember/debug';

export type IconStyle = 'solid' | 'regular' | 'light' | 'duotone' | 'brand';

interface OSSIconArgs {
  icon: string;
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
  }

  get computedClass(): string {
    const classes: string[] = [];
    classes.push(STYLE_CLASSES[this.args.style ?? 'regular']);
    classes.push(this.args.icon);
    return classes.join(' ');
  }
}
