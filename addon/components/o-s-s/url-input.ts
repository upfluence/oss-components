import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import Component from '@glimmer/component';

interface OSSUrlInputArgs {
  value?: string;
  disabled?: boolean;
  errorMessage?: string;
  placeholder?: string;
  prefix?: string;
  suffix?: string;
  validationRegex?: RegExp;
  onChange?(value: string, isValid: boolean): void;
}

export default class OSSUrlInput extends Component<OSSUrlInputArgs> {
  @service declare intl: any;
  @tracked validInput: boolean = true;

  get errorLabel(): string {
    if (!this.validInput)
      return this.args?.errorMessage || this.intl.t('oss-components.url-input.default_format_error');
    return '';
  }

  @action
  onInputChanged(newValue: string): void {
    if (this.args.validationRegex) {
      this.validInput = this.args.validationRegex.test(newValue);
    }
    this.args.onChange?.(newValue, this.validInput);
  }
}
