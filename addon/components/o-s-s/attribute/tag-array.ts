import { assert } from '@ember/debug';
import Component from '@glimmer/component';

interface OSSAttributeTagArraySignature {
  Args: {
    label: string;
    tags?: Array<string>;
  };
  Element: HTMLElement;
}

export default class OSSAttributeTagArrayComponent extends Component<OSSAttributeTagArraySignature> {
  constructor(owner: unknown, args: OSSAttributeTagArraySignature['Args']) {
    super(owner, args);
    assert('[component][OSS::Attribute::TagArray] @label parameter is required', typeof args.label === 'string');
  }

  get displayTags(): boolean {
    return (this.args.tags || []).length > 0;
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'OSS::Attribute::TagArray': typeof OSSAttributeTagArrayComponent;
    'o-s-s/attribute/tag-array': typeof OSSAttributeTagArrayComponent;
  }
}
