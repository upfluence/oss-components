import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

type Mode = 'view' | 'edition';

interface OSSAttributesPanelArgs {
  title: string;
  icon?: string;
  onSave(): Promise<void>;
  onEdit?(mode: Mode): void;
  onCancel?(): void;
}

export default class OSSAttributesPanel extends Component<OSSAttributesPanelArgs> {
  @tracked modeSelected: Mode = 'view';
  @tracked isLoading: boolean = false;

  get containerClasses(): string {
    const classes = ['attributes-panel__container'];
    const modeClass =
      this.modeSelected === 'view' ? 'attributes-panel__container--view' : 'attributes-panel__container--edition';
    classes.push(modeClass);
    return classes.join(' ');
  }

  @action
  toggleMode(): void {
    this.modeSelected = this.modeSelected === 'view' ? 'edition' : 'view';
    this.args.onEdit?.(this.modeSelected);
  }

  @action
  onCancel(): void {
    this.toggleMode();
    this.args.onCancel?.();
  }

  @action
  onSave(): void {
    this.isLoading = true;
    this.args
      .onSave()
      .then(() => {
        this.toggleMode();
      })
      .catch(() => {})
      .finally(() => (this.isLoading = false));
  }
}
