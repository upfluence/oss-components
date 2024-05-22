import { action } from '@ember/object';
import Component from '@glimmer/component';

interface OSSInputContainerArgs {
  value?: string;
  disabled?: boolean;
  errorMessage?: string;
  hasError?: boolean;
  placeholder?: string;
  onChange?(value: string): void;
}

export default class OSSInputContainer extends Component<OSSInputContainerArgs> {
  get displayErrorStyle(): boolean {
    return Boolean(this.args.errorMessage) || Boolean(this.args.hasError);
  }

  @action
  _onChange(value: string): void {
    if (this.args.onChange) {
      this.args.onChange(value);
    }
  }
}
