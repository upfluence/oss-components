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
        defaultValue: { summary: 'null' }
      },
      control: { type: 'text' }
    },
    placeholder: {
      description: 'Value of the placeholder',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'e.g: john.doe@example.com' }
      },
      control: { type: 'text' }
    },
    errorMessage: {
      description: 'Error message that is displayed when the email pattern is invalid',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'null' }
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
      description: 'A callback that indicates whether or not the current input matches the regex',
      table: {
        category: 'Actions',
        type: { summary: 'validates?(isPassing: boolean): void' }
      }
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

const defaultArgs = {
  value: 'john.doe@example.com',
  placeholder: 'foo@bar.org',
  errorMessage: undefined,
  validateFormat: false,
  validates: action('validates')
};

const Template = (args) => ({
  template: hbs`
      <OSS::EmailInput @value={{this.value}} @placeholder={{this.placeholder}} @validateFormat={{this.validateFormat}} 
                       @validates={{this.validates}} @errorMessage={{this.errorMessage}} />
  `,
  context: args
});
export const BasicUsage = Template.bind({});
BasicUsage.args = {
  ...defaultArgs
};
