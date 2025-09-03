import { assert } from '@ember/debug';
import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { runSmartGradientAnimation } from '@upfluence/oss-components/utils/run-smart-gradient-animation';

const FALLBACK_SVG_URL = '/assets/images/picture-frame.svg';

interface OSSSmartImmersiveLogoArgs {
  icon?: string;
  url?: string;
  editable: boolean;
  loading?: boolean;
  oversize?: boolean;
  hasError?: boolean;
  onEdit(): void;
}

const BASE_COMPONENT_CLASS = 'oss-smart__immersive-icon-container';

export default class OSSSmartImmersiveLogoComponent extends Component<OSSSmartImmersiveLogoArgs> {
  @tracked declare element: HTMLElement;

  constructor(owner: unknown, args: OSSSmartImmersiveLogoArgs) {
    super(owner, args);

    if (args.icon) {
      const parts = args.icon.split(':');
      if (parts) {
        assert(
          `Invalid icon format "${args.icon}". Expected format is "iconName:colorName".`,
          parts.length === 2 &&
            typeof parts[0] === 'string' &&
            typeof parts[1] === 'string' &&
            parts[0].trim().length > 0 &&
            parts[1].trim().length > 0
        );
      }
    }
  }

  get computedClass(): string {
    const classes = [BASE_COMPONENT_CLASS];

    if (this.args.loading) {
      classes.push(`${BASE_COMPONENT_CLASS}--generating`);
    }
    if (this.args.oversize) {
      classes.push(`${BASE_COMPONENT_CLASS}--oversize`);
    }
    if (this.args.hasError) {
      classes.push(`${BASE_COMPONENT_CLASS}--errored`);
    }

    return classes.join(' ');
  }

  get logoColor(): string | null {
    return this.args.icon ? `smart-logo-icon-color_${this.args.icon.split(':')[1]}` : null;
  }

  get logoIcon(): string | null {
    return this.args.icon?.split(':')[0] ?? null;
  }

  get dynamicImageStyle(): string | null {
    if (this.args.url) {
      return `background-image: url(${this.args.url})`;
    } else if (!this.args.icon) {
      return `background-image: url(${FALLBACK_SVG_URL})`;
    }
    return null;
  }

  get logoMode(): 'icon' | 'image' {
    return this.args.url || !this.args.icon ? 'image' : 'icon';
  }

  @action
  handleLoadingUpdate(): void {
    if (this.args.loading === false) {
      runSmartGradientAnimation(this.element);
    }
  }
  @action
  registerElement(element: HTMLElement): void {
    this.element = element;
  }
}
