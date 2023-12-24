import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import Component from '@glimmer/component';

interface OSSUrlInputSignature {
  Args: {
    value?: string;
    disabled?: boolean;
    errorMessage?: string;
    placeholder?: string;
    prefix?: string;
    suffix?: string;
    validationRegex?: RegExp;
    onChange?(value: string, isValid: boolean): void;
  };
  Element: HTMLElement;
}

export default class OSSUrlInputComponent extends Component<OSSUrlInputSignature> {
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

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'OSS::UrlInput': typeof OSSUrlInputComponent;
    'o-s-s/url-input': typeof OSSUrlInputComponent;
  }
}
