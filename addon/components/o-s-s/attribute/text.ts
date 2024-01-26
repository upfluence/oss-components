import { assert } from '@ember/debug';
import { isBlank } from '@ember/utils';
import Component from '@glimmer/component';

interface OSSAttributeTextSignature {
  Args: {
    label: string;
    value?: string;
    copyable?: boolean;
    tooltip?: string;
  };
  Element: HTMLElement;
}

export default class OSSAttributeTextComponent extends Component<OSSAttributeTextSignature> {
  constructor(owner: unknown, args: OSSAttributeTextSignature['Args']) {
    super(owner, args);
    assert('[component][OSS::Attribute::Text] @label is required', typeof args.label === 'string');
  }

  get value(): string {
    return isBlank(this.args.value) ? '-' : this.args.value!;
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'OSS::Attribute::Text': typeof OSSAttributeTextComponent;
    'o-s-s/attribute/text': typeof OSSAttributeTextComponent;
  }
}
