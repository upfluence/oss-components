import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { IconNames } from './iconName.enum';

export type IconStyle = 'solid' | 'regular' | 'light' | 'duotone' | 'brand';

interface OSSIconSignature {
  Args: {
    icon: keyof typeof IconNames | string; // TODO: See https://github.com/FortAwesome/Font-Awesome/blob/6.x/js-packages/%40fortawesome/fontawesome-common-types/index.d.ts.
    style?: IconStyle;
  };
  Element: HTMLElement;
}

export const STYLE_CLASSES = {
  solid: 'fas',
  regular: 'far',
  light: 'fal',
  duotone: 'fad',
  brand: 'fab'
};

export default class OSSIconComponent extends Component<OSSIconSignature> {
  constructor(owner: unknown, args: OSSIconSignature['Args']) {
    super(owner, args);
    assert('[component][OSS::Icon] The @icon parameter is mandatory', typeof args.icon !== 'undefined');
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

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'OSS::Icon': typeof OSSIconComponent;
    'o-s-s/icon': typeof OSSIconComponent;
  }
}
