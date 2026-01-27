import { isBlank } from '@ember/utils';
import Component from '@glimmer/component';
import type { FeedbackMessage } from './input-container';

type SizeType = 'sm' | 'md' | 'lg';

interface OSSBannerArgs {
  size?: SizeType;
  plain?: boolean;
  selected?: boolean;
  disabled?: boolean;
  feedbackMessage?: FeedbackMessage;
}

const SIZE_CLASSES: Record<string, string> = {
  sm: 'upf-banner--size-sm',
  lg: 'upf-banner--size-lg'
};

export default class OSSBanner extends Component<OSSBannerArgs> {
  get disabledClass(): string {
    return this.args.disabled ? 'upf-banner--disabled' : '';
  }

  get selectedClass(): string {
    return this.args.selected ? 'upf-banner--selected' : '';
  }

  get errorClass(): string {
    return this.args.feedbackMessage ? 'upf-banner--error' : '';
  }

  get plainClass(): string {
    return this.args.plain ? 'background-color-gray-50' : 'background-color-white';
  }

  get sizeClass(): string {
    return SIZE_CLASSES[this.args.size ?? 'md'] ?? '';
  }

  get modifierClasses(): string {
    return [this.disabledClass, this.selectedClass, this.plainClass, this.sizeClass, this.errorClass]
      .filter((mc) => !isBlank(mc))
      .join(' ');
  }
}
