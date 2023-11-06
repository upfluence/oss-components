import { isBlank } from '@ember/utils';
import Component from '@glimmer/component';

interface OSSAttributeBaseArgs {
  value: string;
  copyable?: boolean;
}

export default class OSSAttributeBase extends Component<OSSAttributeBaseArgs> {
  get isCopyable(): boolean {
    return (this.args.copyable ?? true) && !isBlank(this.args.value) && this.args.value !== '-';
  }
}
