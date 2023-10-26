import { assert } from '@ember/debug';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

interface OSSAttributeTextArgs {
  label: string;
  value?: string;
  copyable?: boolean;
  tooltip?: string;
}

export default class OSSAttributeText extends Component<OSSAttributeTextArgs> {
  @tracked hasError: boolean = false;
  @tracked displayInitials: boolean = false;

  constructor(owner: unknown, args: OSSAttributeTextArgs) {
    super(owner, args);
  }

  get label(): string {
    assert(`[component][OSS::Attribute::Text] label is required `, this.args.label);
    return this.args.label;
  }

  get value(): string | undefined {
    return this.args.value ?? '-';
  }

  get copyable(): boolean | undefined {
    return this.args.copyable ?? false;
  }
}
