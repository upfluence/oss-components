import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { isEmpty } from '@ember/utils';
import { helper } from '@ember/component/helper';

interface OSSPasswordInputArgs {
  value: string | null;
  placeholder?: string;
  errorMessage?: string;
  validateFormat?: boolean;
  disabled?: boolean;
  validates?(isPassing: boolean): void;
}

type InputValidator = 'uppercase' | 'number' | 'length';
const INPUT_VALIDATORS: { [key: string]: { labelKey: string; regex: RegExp } } = {
  uppercase: { labelKey: 'oss-components.password-input.validators.uppercase', regex: /(?=.*[A-Z]).*/ },
  number: { labelKey: 'oss-components.password-input.validators.number', regex: /(?=.*\d).*/ },
  length: { labelKey: 'oss-components.password-input.validators.length', regex: /.{8,}/ }
};

type ValidationState = 'default' | 'error' | 'success';
type ValidationStateClass = 'font-color-gray-500' | 'font-color-success-500' | 'font-color-error-500';
// type ValidationStateIcon = 'fa-circle-dashed' | 'fa-times' | 'fa-check';
type ValidationTemplateAttributes = {
  class: ValidationStateClass;
  state: ValidationState;
  labelKey: string;
};

const STATE_CLASS_MAPPING: { [key: string]: ValidationStateClass } = {
  default: 'font-color-gray-500',
  success: 'font-color-success-500',
  error: 'font-color-error-500'
};
// const STATE_ICON_MAPPING: { [key: string]: ValidationStateIcon } = {
//   default: 'fa-circle-dashed',
//   success: 'fa-check',
//   error: 'fa-times'
// };

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

  get inputValidators(): string[] {
    return Object.keys(INPUT_VALIDATORS);
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

  validatorAttributes = helper((_, { type }: Record<string, InputValidator>): ValidationTemplateAttributes => {
    const state = this.validationStateFromRegex(INPUT_VALIDATORS[type].regex);
    return {
      labelKey: INPUT_VALIDATORS[type].labelKey,
      class: STATE_CLASS_MAPPING[state],
      state
    };
  });

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

  private validationStateFromRegex(regex: RegExp): ValidationState {
    if (isEmpty(this.args.value)) return 'default';
    else if (regex.test(this.args.value!)) {
      return 'success';
    } else {
      return 'error';
    }
  }
}
