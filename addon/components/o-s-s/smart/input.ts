import OSSInputContainer from '../input-container';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { runSmartGradientAnimation } from '@upfluence/oss-components/utils/run-smart-gradient-animation';
import { isEmpty } from '@ember/utils';

interface SmartInputArgs {
  value?: string;
  placeholder?: string;
  loading: boolean;
  onChange?: (value: string) => void;
}

export default class OSSSmartInput extends OSSInputContainer<SmartInputArgs> {
  @tracked declare element: HTMLElement;

  constructor(owner: unknown, args: SmartInputArgs) {
    super(owner, args);
  }

  get hasGeneratedValue(): boolean {
    return !this.args.loading && !isEmpty(this.args.value);
  }

  get hasValue(): boolean {
    return !isEmpty(this.args.value);
  }

  @action
  handleUpdate(): void {
    if (!this.args.loading && !isEmpty(this.args.value)) {
      runSmartGradientAnimation(this.element);
    }
  }

  @action
  registerElement(element: HTMLElement): void {
    this.element = element;
  }
}
