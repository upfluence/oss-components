import { action } from '@ember/object';
import { isEmpty } from '@ember/utils';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import Component from '@glimmer/component';

interface OSSPasswordInputArgs {
  value: string;
  errorMessage?: string;
  validateFormat?: boolean;
}

export default class OSSPasswordInput extends Component<OSSPasswordInputArgs> {
  @service intl: any;
  @tracked regexError: string | null = null;
  @tracked visibility: 'text' | 'password' = 'password';

  private _pwRegex: RegExp = new RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/);
  private _runValidation: boolean = true;

  constructor(owner: unknown, args: OSSPasswordInputArgs) {
    super(owner, args);

    if (typeof this.args.value !== 'string') {
      throw new Error('[component][OSS::PasswordInput] The @value parameter is mandatory');
    }
    if (typeof args.validateFormat !== 'undefined') {
      this._runValidation = args.validateFormat;
    }
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
    if (!this._runValidation || isEmpty(this.args.value)) return;
    if (!this._pwRegex.test(this.args.value)) {
      this.regexError = this.intl.t('oss-components.password-input.regex_error');
    }
  }

  @action
  toggleVisibility(): void {
    this.visibility = this.visibility === 'password' ? 'text' : 'password';
  }
}
