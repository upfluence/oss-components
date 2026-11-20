import { assert } from '@ember/debug';
import type Owner from '@ember/owner';
import Component from '@glimmer/component';

interface OSSAttributeTagArrayArgs {
  label: string;
  tags?: Array<string>;
}

export default class OSSAttributeTagArray extends Component<OSSAttributeTagArrayArgs> {
  constructor(owner: Owner, args: OSSAttributeTagArrayArgs) {
    super(owner, args);
    assert('[component][OSS::Attribute::TagArray] @label parameter is required', typeof args.label === 'string');
  }

  get displayTags(): boolean {
    return (this.args.tags || []).length > 0;
  }
}
