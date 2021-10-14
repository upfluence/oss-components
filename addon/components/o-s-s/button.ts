import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

enum SkinDefinition {
  DEFAULT = 'default',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  DESTRUCTIVE = 'destructive',
  SOCIAL_INSTAGRAM = 'social-instagram',
  SOCIAL_FACEBOOK = 'social-facebook',
  SOCIAL_YOUTUBE = 'social-youtube'
}

enum SizeDefinition {
  X_SMALL = 'x-small',
  SMALL = 'small'
}

interface ButtonArgs {
  skin: string;
  size: string;
  loading: boolean;
}

export default class OSSButton extends Component<ButtonArgs> {
  @tracked btnSize: number | undefined;
  @tracked DOMElement: HTMLElement | undefined;

  _getDefinitionKey(key: string): string {
    return key.toUpperCase().replace(/-/g, '_');
  }

  get skin(): string {
    if (this.args.skin) {
      return SkinDefinition[this._getDefinitionKey(this.args.skin) as keyof typeof SkinDefinition];
    }
    return SkinDefinition.DEFAULT;
  }

  get size(): string | null {
    return SizeDefinition[this._getDefinitionKey(this.args.size) as keyof typeof SizeDefinition];
  }

  get computedClass() {
    let classes = ['upf-btn'];

    if (this.args.size) {
      classes.push(`upf-btn--${this.size}`);
    }
    classes.push(`upf-btn--${this.skin}`);

    return classes.join(' ');
  }

  get loadingState(): boolean {
    if (!this.args.loading) {
      this.btnSize = this.DOMElement?.offsetWidth;
    } else if (this.btnSize && this.DOMElement) {
      this.DOMElement.style.width = `${this.btnSize}px`;
    }

    return this.args.loading;
  }

  @action
  didInsert(element: HTMLElement): void {
    this.DOMElement = element;
  }
}
