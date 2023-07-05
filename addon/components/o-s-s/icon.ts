import Component from '@glimmer/component';
import { assert } from '@ember/debug';

export type IconType = 'solid' | 'regular' | 'light' | 'duotone' | 'brand';

interface OSSIconArgs {
  icon: string;
  type?: IconType;
}

export const TYPE_CLASSES = {
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
    classes.push(TYPE_CLASSES[this.args.type ?? 'regular']);
    classes.push(this.args.icon);
    return classes.join(' ');
  }
}
