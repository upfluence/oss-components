import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { runSmartGradientAnimation } from '@upfluence/oss-components/utils/run-smart-gradient-animation';

interface OSSSmartImmersiveLogoArgs {
  icon?: string;
  url?: string;
  editable: boolean;
  loading?: boolean;
  oversize?: boolean;
  onClick(): void;
}

export default class OSSSmartImmersiveLogoComponent extends Component<OSSSmartImmersiveLogoArgs> {
  @tracked declare element: HTMLElement;

  get logoColor(): string | null {
    return this.args.icon ? `logo-icon-color_${this.args.icon.split(':')[1]}` : null;
  }

  get logoIcon(): string | null {
    return this.args.icon?.split(':')[0] ?? null;
  }

  get dynamicImageStyle(): string | null {
    return this.args.url ? `background-image: url(${this.args.url})` : null;
  }

  get logoMode(): 'icon' | 'image' {
    return this.args.url ? 'image' : 'icon';
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
