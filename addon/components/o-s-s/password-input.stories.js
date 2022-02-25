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
        defaultValue: { summary: false }
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
        defaultValue: { summary: false }
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
      description: 'A callback that indicates wheter or not the current input matches the regex'
    }
  }
};

const DefaultUsageTemplate = (args) => ({
  template: hbs`
      <OSS::PasswordInput @value={{this.value}} @placeholder={{this.placeholder}} @validateFormat={{this.validateFormat}} @validates={{this.validates}} />
  `,
  context: args
});
export const BasicUsage = DefaultUsageTemplate.bind({});
BasicUsage.args = {
  value: 'myPassword',
  placeholder: '*****',
  errorMessage: '',
  validateFormat: false,
  validates: action('validates')
};
