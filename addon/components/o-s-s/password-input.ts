import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import Component from '@glimmer/component';
import { assert } from '@ember/debug';

interface OSSPasswordInputArgs {
  value: string | null;
  placeholder?: string;
  errorMessage?: string;
  validateFormat?: boolean;
  disabled?: boolean;
  validates?(isPassing: boolean): void;
}

export default class OSSPasswordInput extends Component<OSSPasswordInputArgs> {
  @service intl: any;
  @tracked regexError: string | null = null;
  @tracked visibility: 'text' | 'password' = 'password';
  @tracked placeholder: string | undefined;

  private _pwRegex: RegExp = new RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/);
  private _runValidation: boolean = true;

  constructor(owner: unknown, args: OSSPasswordInputArgs) {
    super(owner, args);

    assert('[component][OSS::PasswordInput] The @value parameter is mandatory', typeof this.args.value !== 'undefined');

    if (typeof args.validateFormat !== 'undefined') {
      this._runValidation = args.validateFormat;
    }

    this.placeholder = args.placeholder || this.intl.t('oss-components.password-input.placeholder');
  }

  get visibilityIcon(): 'fa-eye' | 'fa-eye-slash' {
    if (this.visibility === 'password') {
      return 'fa-eye';
    }
    return 'fa-eye-slash';
  }

  get errorMessage(): string | null {
    return this.args.errorMessage || this.regexError || null;
  }

  @action
  validateInput(): void {
    this.regexError = '';
    if (!this._runValidation || !this.args.value) {
      this.args.validates?.(true);
    } else if (!this._pwRegex.test(this.args.value)) {
      this.regexError = this.intl.t('oss-components.password-input.regex_error');
      this.args.validates?.(false);
    } else {
      this.args.validates?.(true);
    }
  }

  @action
  toggleVisibility(): void {
    this.visibility = this.visibility === 'password' ? 'text' : 'password';
  }
}
