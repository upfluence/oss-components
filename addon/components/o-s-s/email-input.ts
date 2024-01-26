import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { assert } from '@ember/debug';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

interface OSSEmailInputSignature {
  Args: {
    value: string | null;
    placeholder?: string;
    errorMessage?: string;
    validateFormat?: boolean;
    validates?(isPassing: boolean): void;
    onChange?(value: string | null): void;
  };
  Element: HTMLElement;
}

const DEFAULT_PLACEHOLDER = 'e.g: john.doe@example.com';

export const EMAIL_REGEXP = new RegExp(
  /^(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-zA-Z0-9-]*[a-zA-Z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/
);

export default class OSSEmailInputComponent extends Component<OSSEmailInputSignature> {
  @service intl: any;

  private _runValidation: boolean = true;

  @tracked regexError: string | null = null;

  constructor(owner: unknown, args: OSSEmailInputSignature['Args']) {
    super(owner, args);

    assert('[component][OSS::EmailInput] The @value parameter is mandatory', typeof args.value !== 'undefined');

    if (typeof args.validateFormat === 'boolean') {
      this._runValidation = args.validateFormat;
    }
  }

  get placeholder(): string {
    return this.args.placeholder ?? DEFAULT_PLACEHOLDER;
  }

  get errorMessage(): string | null {
    return this.args.errorMessage || this.regexError || null;
  }

  @action
  validateInput(): void {
    this.regexError = '';
    this.args.onChange?.(this.args.value ? this.args.value.toLowerCase() : this.args.value);

    if (!this._runValidation || !this.args.value) {
      this.args.validates?.(true);
    } else if (!EMAIL_REGEXP.test(this.args.value)) {
      this.regexError = this.intl.t('oss-components.email-input.regex_error');
      this.args.validates?.(false);
    } else {
      this.args.validates?.(true);
    }
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'OSS::EmailInput': typeof OSSEmailInputComponent;
    'o-s-s/email-input': typeof OSSEmailInputComponent;
  }
}
