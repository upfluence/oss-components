import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { run } from '@ember/runloop';

interface OssSidePanelArgs {
  visible: boolean;
  backdrop: boolean;
  size?: 'sm' | 'md';
  onClose(): void;
}

export default class OssSidePanel extends Component<OssSidePanelArgs> {
  @tracked showReturnButton: boolean = false;
  declare initialTarget: HTMLElement | null;

  get sidePanelSize(): string {
    if (this.args.size) {
      return `oss-side-panel--${this.args.size}`;
    }
    return 'oss-side-panel--sm';
  }

  @action
  onDestroy(): void {
    run(() => {
      document.removeEventListener('mousedown', this.trackInitialTarget);
    });
  }

  @action
  initialize(enableListeners: boolean = true): void {
    if (enableListeners) {
      run(() => {
        document.addEventListener('mousedown', this.trackInitialTarget);
      });
    }
  }

  @action
  onClickOutside(_: any, event: Event): void {
    const sidePanelElement = document.querySelector('.oss-side-panel');
    if (sidePanelElement?.contains(event.target as Node)) return;

    if (event.target === this.initialTarget) {
      this.args.onClose();
    }
  }

  @action
  private trackInitialTarget(event: MouseEvent): void {
    this.initialTarget = event.target as HTMLElement;
  }
}
