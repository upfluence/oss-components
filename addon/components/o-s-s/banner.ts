import { isBlank } from '@ember/utils';
import Component from '@glimmer/component';
import { FEEDBACK_TYPES, type FeedbackMessage } from './input-container';

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

  get plainClass(): string {
    return this.args.plain ? 'background-color-gray-50' : 'background-color-white';
  }

  get sizeClass(): string {
    return SIZE_CLASSES[this.args.size ?? 'md'] ?? '';
  }

  get feedbackMessage(): FeedbackMessage | undefined {
    if (this.args.feedbackMessage && FEEDBACK_TYPES.includes(this.args.feedbackMessage.type)) {
      return this.args.feedbackMessage;
    }
    return undefined;
  }

  get borderColorClass(): string {
    if (this.feedbackMessage) return `upf-banner--${this.feedbackMessage.type}`;
    return '';
  }

  get feedbackMarginClass(): string {
    return this.feedbackMessage?.value ? 'margin-bottom-px-24' : '';
  }

  get modifierClasses(): string {
    return [
      this.disabledClass,
      this.selectedClass,
      this.plainClass,
      this.sizeClass,
      this.borderColorClass,
      this.feedbackMarginClass
    ]
      .filter((mc) => !isBlank(mc))
      .join(' ');
  }
}
