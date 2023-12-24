import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { assert } from '@ember/debug';

type Mode = 'view' | 'edition';

interface OSSAttributesPanelSignature {
  Args: {
    title: string;
    icon?: string;
    isSaveDisabled?: boolean;
    customEditIcon?: string;
    onSave(): Promise<void>;
    onEdit?(): void;
    onCancel?(): void;
  };
  Blocks: {
    'contextual-action': [];
    'edition-mode': [];
    'view-mode': [];
  };
  Element: HTMLDivElement;
}

export default class OSSAttributesPanelComponent extends Component<OSSAttributesPanelSignature> {
  @tracked modeSelected: Mode = 'view';
  @tracked isLoading: boolean = false;

  constructor(owner: unknown, args: OSSAttributesPanelSignature['Args']) {
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

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'OSS::AttributesPanel': typeof OSSAttributesPanelComponent;
    'o-s-s/attributes-panel': typeof OSSAttributesPanelComponent;
  }
}
