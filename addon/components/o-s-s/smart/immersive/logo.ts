import { assert } from '@ember/debug';
import { action } from '@ember/object';
import { isBlank } from '@ember/utils';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { runSmartGradientAnimation } from '@upfluence/oss-components/utils/run-smart-gradient-animation';

const FALLBACK_SVG_URL = '/assets/images/picture-frame.svg';
type size = 'sm' | 'md' | 'lg';

interface OSSSmartImmersiveLogoArgs {
  icon?: string;
  url?: string;
  editable: boolean;
  loading?: boolean;
  hasError?: boolean;
  size?: size;
  onEdit(): void;
}

const BASE_COMPONENT_CLASS = 'oss-smart__immersive-icon-container';

export default class OSSSmartImmersiveLogoComponent extends Component<OSSSmartImmersiveLogoArgs> {
  @tracked declare element: HTMLElement;
  fallbackSvgUrl = FALLBACK_SVG_URL;

  constructor(owner: unknown, args: OSSSmartImmersiveLogoArgs) {
    super(owner, args);

    if (!args.url && args.icon) {
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

  get size(): size {
    return this.args.size ?? 'md';
  }

  get computedClass(): string {
    const classes = [BASE_COMPONENT_CLASS];

    if (this.args.loading) {
      classes.push(`${BASE_COMPONENT_CLASS}--generating`);
    }
    if (this.args.hasError) {
      classes.push(`${BASE_COMPONENT_CLASS}--errored`);
    }
    if (this.size) {
      classes.push(`${BASE_COMPONENT_CLASS}--size-${this.size}`);
    }

    return classes.join(' ');
  }

  get logoColor(): string | null {
    return this.args.icon ? `smart-logo-icon-color_${this.args.icon.split(':')[1]}` : null;
  }

  get logoIcon(): string | null {
    return this.args.icon?.split(':')[0] ?? null;
  }

  get logoMode(): 'icon' | 'image' {
    return this.args.url || !this.args.icon ? 'image' : 'icon';
  }

  @action
  handleLoadingUpdate(): void {
    if (this.args.loading === false && !isBlank(this.args.url ?? this.args.icon)) {
      runSmartGradientAnimation(this.element);
    }
  }

  @action
  registerElement(element: HTMLElement): void {
    this.element = element;
  }

  @action
  onError(event: Event): void {
    (<HTMLImageElement>event.target).src = FALLBACK_SVG_URL;
  }
}
