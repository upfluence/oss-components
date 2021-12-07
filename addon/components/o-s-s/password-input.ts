import { action } from '@ember/object';
import { isEmpty } from '@ember/utils';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import Component from '@glimmer/component';

interface OSSPasswordInputArgs {
  value: string;
  errorMessage?: string;
}

export default class OSSPasswordInput extends Component<OSSPasswordInputArgs> {
  @service intl: any;
  pwRegex: RegExp = new RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/);
  @tracked regexError: string | null = null;
  @tracked visibility: 'text' | 'password' = 'password';

  constructor(owner: unknown, args: OSSPasswordInputArgs) {
    super(owner, args);

    if (typeof this.args.value !== 'string') {
      throw new Error('[component][OSS::PasswordInput] The @value parameter is mandatory');
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
    console.log('validateInput :' + this.regexError);
    this.regexError = '';
    if (isEmpty(this.args.value)) return;
    if (!this.pwRegex.test(this.args.value)) {
      this.regexError = this.intl.t('oss-components.password-input.regex_error');
    }
  }

  @action
  toggleVisibility(): void {
    this.visibility = this.visibility === 'password' ? 'text' : 'password';
  }
}
