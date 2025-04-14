import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { assert } from '@ember/debug';

export type Mode = 'view' | 'edition';

interface OSSAttributesPanelArgs {
  title: string;
  icon?: string;
  isSaveDisabled?: boolean;
  customEditIcon?: string;
  initialMode?: Mode;
  onSave(): Promise<void>;
  onEdit?(): void;
  onCancel?(): void;
}

export default class OSSAttributesPanel extends Component<OSSAttributesPanelArgs> {
  @tracked modeSelected: Mode = this.args.initialMode ?? 'view';
  @tracked isLoading: boolean = false;

  constructor(owner: unknown, args: OSSAttributesPanelArgs) {
    super(owner, args);

    assert('[component][OSS::AttributesPanel] The @title parameter is mandatory', typeof args.title === 'string');
    assert('[component][OSS::AttributesPanel] The @onSave parameter is mandatory', typeof args.onSave === 'function');
  }

  get editIcon(): string {
    return this.args.customEditIcon ?? 'fa-pen';
  }

  @action
  toggleMode(): void {
    this.modeSelected = this.modeSelected === 'view' ? 'edition' : 'view';
  }

  @action
  onEdit(event: MouseEvent): void {
    event.stopPropagation();

    this.toggleMode();
    this.args.onEdit?.();
  }

  @action
  onCancel(): void {
    this.toggleMode();
    this.args.onCancel?.();
  }

  @action
  onSave(): void {
    if (!this.isLoading) {
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
}
