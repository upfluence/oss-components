import { isBlank } from '@ember/utils';
import Component from '@glimmer/component';

type SizeType = 'sm' | 'md';

interface OSSBannerArgs {
  size?: SizeType;
  plain?: boolean;
  selected?: boolean;
  disabled?: boolean;
}

export default class OSSBanner extends Component<OSSBannerArgs> {
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
