import { isBlank } from '@ember/utils';
import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { assert } from '@ember/debug';

interface OSSAttributeRemovableTextSignature {
  Args: {
    label: string;
    value?: string;
    removeTooltip?: string;
    onRemove(): Promise<unknown>;
  };
  Element: HTMLElement;
}

export default class OSSAttributeRemovableTextComponent extends Component<OSSAttributeRemovableTextSignature> {
  @service declare intl: any;
  @tracked loading: boolean = false;

  constructor(owner: unknown, args: OSSAttributeRemovableTextSignature['Args']) {
    super(owner, args);
    assert('[component][OSS::Attribute::RemovableText] @label parameter is required', typeof args.label === 'string');
    assert(
      '[component][OSS::Attribute::RemovableText] @onRemove method is required',
      typeof args.onRemove === 'function'
    );
  }

  get value(): string {
    return isBlank(this.args.value) ? '-' : this.args.value!;
  }

  get removeTooltip(): string {
    return this.args.removeTooltip ?? this.intl.t('oss-components.attribute.removable_text.remove_tooltip');
  }

  @action
  onRemove(): void {
    this.loading = true;
    this.args.onRemove().finally(() => (this.loading = false));
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'OSS::Attribute::RemovableText': typeof OSSAttributeRemovableTextComponent;
    'o-s-s/attribute/removable-text': typeof OSSAttributeRemovableTextComponent;
  }
}
