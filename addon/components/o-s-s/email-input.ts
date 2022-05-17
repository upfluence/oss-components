import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

interface OSSEmailInputArgs {
  value: string | null;
  placeholder?: string;
  errorMessage?: string;
  validateFormat?: boolean;
  validates?(isPassing: boolean): void;
}

const DEFAULT_PLACEHOLDER = 'e.g: john.doe@example.com';

export const EMAIL_REGEXP = new RegExp(/^\w+([\+\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/);

export default class OSSEmailInput extends Component<OSSEmailInputArgs> {
  @service intl: any;

  private _runValidation: boolean = true;

  @tracked regexError: string | null = null;

  constructor(owner: unknown, args: OSSEmailInputArgs) {
    super(owner, args);

    if (typeof args.value === 'undefined') {
      throw new Error('[component][OSS::EmailInput] The @value parameter is mandatory');
    }

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

    if (!this._runValidation || !this.args.value) {
      this.args.validates?.(true);
    } else if (!EMAIL_REGEXP.test(this.args.value)) {
      this.regexError = this.intl.t('oss-components.email-input.regex_error');
      this.args.validates?.(false);
    } else {
      this.args.validates?.(true);
    }
  }
}
