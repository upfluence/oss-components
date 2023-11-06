import { assert } from '@ember/debug';
import { isBlank } from '@ember/utils';
import Component from '@glimmer/component';

interface OSSAttributeTextArgs {
  label: string;
  value?: string;
  copyable?: boolean;
  tooltip?: string;
}

export default class OSSAttributeText extends Component<OSSAttributeTextArgs> {
  constructor(owner: unknown, args: OSSAttributeTextArgs) {
    super(owner, args);
    assert(`[component][OSS::Attribute::Text] label is required `, this.args.label);
  }

  get value(): string {
    return isBlank(this.args.value) ? '-' : this.args.value!;
  }
}
