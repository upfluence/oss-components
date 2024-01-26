import { isBlank } from '@ember/utils';
import Component from '@glimmer/component';

type SizeType = 'sm' | 'md';

interface OSSBannerSignature {
  Args: {
    size?: SizeType;
    icon?: string;
    image?: string;
    title?: string;
    subtitle?: string;
    plain?: boolean;
    selected?: boolean;
    disabled?: boolean;
  };
  Blocks: {
    actions: [];
    'custom-icon': [];
    'secondary-actions': [];
    'title-suffix': [];
  };
  Element: HTMLDivElement;
}

export default class OSSBannerComponent extends Component<OSSBannerSignature> {
  get disabledClass(): string {
    return this.args.disabled ? 'upf-banner--disabled' : '';
  }

  get selectedClass(): string {
    return this.args.selected ? 'upf-banner--selected' : '';
  }

  get plainClass(): string {
    return this.args.plain ? 'background-color-gray-50' : 'background-color-white';
  }

  get sizeClass(): string {
    return this.args.size === 'sm' ? 'upf-banner--size-sm' : '';
  }

  get iconSizeClass(): string {
    return this.args.size === 'sm' ? 'upf-badge--size-sm' : 'upf-badge--size-md';
  }

  get modifierClasses(): string {
    return [this.disabledClass, this.selectedClass, this.plainClass, this.sizeClass]
      .filter((mc) => !isBlank(mc))
      .join(' ');
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'OSS::Banner': typeof OSSBannerComponent;
    'o-s-s/banner': typeof OSSBannerComponent;
  }
}
