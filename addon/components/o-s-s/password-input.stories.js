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
        defaultValue: { summary: '*************' }
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
    validateFormat: {
      description: 'Whether or not to validate the password format with the RegEx',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: true }
      },
      control: { type: 'boolean' }
    },
    validates: {
      description: 'A callback that indicates wheter or not the current input matches the regex',
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
  placeholder: '*****',
  errorMessage: undefined,
  validateFormat: true,
  validates: action('validates')
};

const DefaultUsageTemplate = (args) => ({
  template: hbs`
      <OSS::PasswordInput @value={{this.value}} @placeholder={{this.placeholder}} @validateFormat={{this.validateFormat}} @validates={{this.validates}} />
  `,
  context: args
});

export const BasicUsage = DefaultUsageTemplate.bind({});
BasicUsage.args = defaultArgs;
