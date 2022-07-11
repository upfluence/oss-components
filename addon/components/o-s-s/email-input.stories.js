import hbs from 'htmlbars-inline-precompile';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/OSS::EmailInput',
  component: 'email-input',
  argTypes: {
    value: {
      description: 'Value of the email input',
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
      description: 'Error message that is displayed when the email pattern is invalid',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: false }
      },
      control: { type: 'text' }
    },
    validateFormat: {
      description: 'Whether or not to validate the email format with the RegEx',
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
  },
  parameters: {
    docs: {
      description: {
        component: 'A dedicated email input that checks the validity of the inputed text.'
      }
    }
  }
};

const DefaultUsageTemplate = (args) => ({
  template: hbs`
      <OSS::EmailInput @value={{this.value}} @placeholder={{this.placeholder}} @validateFormat={{this.validateFormat}} @validates={{this.validates}} />
  `,
  context: args
});
export const BasicUsage = DefaultUsageTemplate.bind({});
BasicUsage.args = {
  value: 'john.doe@example.com',
  placeholder: 'foo@bar.org',
  errorMessage: '',
  validateFormat: false,
  validates: action('validates')
};
