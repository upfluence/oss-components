import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

type SkinType = 'default' | 'primary' | 'secondary' | 'destructive' | 'instagram' | 'facebook' | 'youtube';
type SkinDefType = {
  [key in SkinType]: string;
};

type SizeType = 'xs' | 's';
type SizeDefType = {
  [key in SizeType]: string;
};

const SkinDefinition: SkinDefType = {
  default: 'default',
  primary: 'primary',
  secondary: 'secondary',
  destructive: 'destructive',
  instagram: 'social-instagram',
  facebook: 'social-facebook',
  youtube: 'social-youtube'
};
const SizeDefinition: SizeDefType = {
  xs: 'x-small',
  s: 'small'
};

const BASE_CLASS = 'upf-btn';

interface ButtonArgs {
  skin?: string;
  size?: string;
  loading?: boolean;
}

export default class OSSButton extends Component<ButtonArgs> {
  @tracked DOMElement: HTMLElement | undefined;

  get skin(): string {
    if (!this.args.skin) {
      return SkinDefinition.default;
    }
    return SkinDefinition[this.args.skin as SkinType] ?? SkinDefinition.default;
  }

  get size(): string | null {
    if (!this.args.size) {
      return null;
    }
    return SizeDefinition[this.args.size as SizeType];
  }

  get computedClass() {
    let classes = [BASE_CLASS];

    if (this.size) {
      classes.push(`upf-btn--${this.size}`);
    }
    classes.push(`upf-btn--${this.skin}`);

    return classes.join(' ');
  }

  get loadingState(): boolean {
    if (!this.DOMElement) {
      return false;
    }

    if (this.args.loading) {
      this.DOMElement.style.width = `${this.DOMElement?.offsetWidth}px`;
    } else {
      this.DOMElement.style.removeProperty('width');
    }

    return this.args.loading || false;
  }

  @action
  didInsert(element: HTMLElement): void {
    this.DOMElement = element;
  }
}
