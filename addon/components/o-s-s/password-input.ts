import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { isEmpty } from '@ember/utils';
import { helper } from '@ember/component/helper';

export type ValidatorSet = { [key: string]: { labelKey: string; regex: RegExp } };
export const INPUT_VALIDATORS: ValidatorSet = {
  uppercase: { labelKey: 'oss-components.password-input.validators.uppercase', regex: /(?=.*[A-Z]).*/ },
  number: { labelKey: 'oss-components.password-input.validators.number', regex: /(?=.*\d).*/ },
  length: { labelKey: 'oss-components.password-input.validators.length', regex: /.{8,}/ }
};

interface OSSPasswordInputArgs {
  value: string | null;
  placeholder?: string;
  errorMessage?: string;
  disabled?: boolean;
  validates?(isPassing: boolean): void;
  validatorSet?: ValidatorSet;
}

type InputValidator = 'uppercase' | 'number' | 'length';
type ValidationState = 'default' | 'error' | 'success';
type ValidationStateClass = 'font-color-gray-500' | 'font-color-success-500' | 'font-color-error-500';
type ValidationStateIcon = 'fa-circle-dashed' | 'fa-times' | 'fa-check';
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
const STATE_ICON_MAPPING: { [key: string]: ValidationStateIcon } = {
  default: 'fa-circle-dashed',
  success: 'fa-check',
  error: 'fa-times'
};

export default class OSSPasswordInput extends Component<OSSPasswordInputArgs> {
  @service intl: any;
  @tracked regexError: string | null = null;
  @tracked visibility: 'text' | 'password' = 'password';
  @tracked placeholder: string | undefined;

  private runValidation: boolean = typeof this.args.validates === 'function';

  constructor(owner: unknown, args: OSSPasswordInputArgs) {
    super(owner, args);

    assert('[component][OSS::PasswordInput] The @value parameter is mandatory', typeof this.args.value !== 'undefined');
    this.placeholder = args.placeholder || this.intl.t('oss-components.password-input.placeholder');
  }

  get validatorSet(): ValidatorSet {
    return this.args.validatorSet ?? INPUT_VALIDATORS;
  }

  get inputValidators(): string[] {
    return Object.keys(this.validatorSet);
  }

  get visibilityIcon(): 'fa-eye' | 'fa-eye-slash' {
    if (this.visibility === 'password') {
      return 'fa-eye';
    }
    return 'fa-eye-slash';
  }

  get errorMessage(): string | null {
    return this.args.validates ? null : this.args.errorMessage ?? this.regexError;
  }

  get validationIcons(): { state: ValidationState; icon: ValidationStateIcon }[] {
    return Object.keys(STATE_ICON_MAPPING).map((state: ValidationState) => {
      return {
        state: state,
        icon: STATE_ICON_MAPPING[state]
      };
    });
  }

  validatorAttributes = helper((_, { type }: { type: InputValidator }): ValidationTemplateAttributes => {
    const state = this.validationStateFromRegex(this.validatorSet[type].regex);
    return {
      labelKey: this.validatorSet[type].labelKey,
      class: STATE_CLASS_MAPPING[state],
      state
    };
  });

  validationIconVisibility = helper(
    (
      _,
      { validator, state }: { validator: ValidationTemplateAttributes; state: ValidationState }
    ): 'visible' | 'invisible' => {
      return validator.state === state ? 'visible' : 'invisible';
    }
  );

  @action
  validateInput(): void {
    this.regexError = '';
    if (!this.runValidation || !this.args.value) {
      this.args.validates?.(true);
    } else if (!this.testAllValidators()) {
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

  private testAllValidators(): boolean {
    return this.inputValidators.every((index: InputValidator) => this.validatorSet[index].regex.test(this.args.value!));
  }

  private validationStateFromRegex(regex: RegExp): ValidationState {
    if (isEmpty(this.args.value)) return 'default';
    return regex.test(this.args.value!) ? 'success' : 'error';
  }
}
