import { action } from '@ember/object';
import Component from '@glimmer/component';

interface OSSInputContainerArgs {
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}

export default class OSSInputContainer extends Component<OSSInputContainerArgs> {
  @action
  _onChange(value: string): void {
    if (this.args.onChange) {
      this.args.onChange(value);
    }
  }
}
