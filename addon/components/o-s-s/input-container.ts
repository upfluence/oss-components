import { action } from '@ember/object';
import Component from '@glimmer/component';

interface OSSInputArgs {
  value?: string;
  placeholder?: string;
  onChange?: (arg0: string) => void;
}

export default class OSSInput extends Component<OSSInputArgs> {
  @action
  _onChange(value: string): void {
    if (this.args.onChange) {
      this.args.onChange(value);
    }
  }
}
