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
  validates: action('validates')
};

const DefaultUsageTemplate = (args) => ({
  template: hbs`
      <OSS::PasswordInput @value={{this.value}} @placeholder={{this.placeholder}} @validates={{this.validates}}
                          @disabled={{this.disabled}} />
  `,
  context: args
});

export const BasicUsage = DefaultUsageTemplate.bind({});
BasicUsage.args = defaultArgs;
