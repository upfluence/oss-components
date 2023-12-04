import hbs from 'htmlbars-inline-precompile';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/OSS::PasswordInput',
  component: 'password-input',
  argTypes: {
    value: {
      description: 'Value of the password input',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    placeholder: {
      description: 'Value of the placeholder',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: '••••••••••••' }
      },
      control: { type: 'text' }
    },
    errorMessage: {
      description: 'Error message that is displayed when the password pattern is invalid',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    disabled: {
      description: 'Whether or not the input is disabled',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'boolean' }
    },
    validates: {
      description:
        'A callback that indicates whether or not the current input matches the regex. It also enables the input validation.',
      table: {
        category: 'Actions',
        type: {
          summary: 'validates?(isPassing: boolean): void'
        }
      }
    },
    validatorSet: {
      description:
        'An optional parameter that allows to overwrite the Validator set that is used by the component. The original set is exported and is available for external usage.',
      table: {
        type: {
          summary: 'validatorSet: { [key: string]: { labelKey: string; regex: RegExp } };'
        }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'A dedicated password input that checks the validity of the text entered.'
      }
    }
  }
};

const defaultArgs = {
  value: 'myPassword',
  disabled: false,
  placeholder: '*****',
  errorMessage: undefined,
  validates: action('validates'),
  validatorSet: undefined
};

const DefaultUsageTemplate = (args) => ({
  template: hbs`
      <OSS::PasswordInput @value={{this.value}} @placeholder={{this.placeholder}} @validates={{this.validates}}
                          @disabled={{this.disabled}} @validatorSet={{this.validatorSet}} />
  `,
  context: args
});

export const BasicUsage = DefaultUsageTemplate.bind({});
BasicUsage.args = defaultArgs;
