import { action } from '@ember/object';
import Component from '@glimmer/component';

interface OSSInputContainerArgs {
  value?: string;
  disabled?: boolean;
  errorMessage?: string;
  hasError?: boolean;
  placeholder?: string;
  type?: string;
  onChange?(value: string): void;
}

export default class OSSInputContainer extends Component<OSSInputContainerArgs> {
  get displayErrorStyle(): boolean {
    return Boolean(this.args.errorMessage) || Boolean(this.args.hasError);
  }

  get type(): string {
    return this.args.type ?? 'text';
  }

  @action
  _onChange(value: string): void {
    if (this.args.onChange) {
      this.args.onChange(value);
    }
  }
}
