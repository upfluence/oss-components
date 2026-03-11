import { hbs } from 'ember-cli-htmlbars';
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
        defaultValue: { summary: 'e.g., john.doe@example.com' }
      },
      control: { type: 'text' }
    },
    feedbackMessage: {
      description: 'A success, warning or error message that will be displayed below the input-group.',
      table: {
        type: {
          summary: '{ type: string, value: string }'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'object' }
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
    },
    onChange: {
      description: 'A callback that sends the new value to the parent component when the input is changed',
      table: {
        category: 'Actions',
        type: { summary: 'onChange?(value: string | undefined): void' }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'A dedicated email input that checks the validity of the inputted text.'
      }
    }
  }
};

const defaultArgs = {
  value: 'john.doe@example.com',
  placeholder: 'foo@bar.org',
  errorMessage: undefined,
  feedbackMessage: undefined,
  validateFormat: false,
  validates: action('validates')
};

const Template = (args) => ({
  template: hbs`
      <OSS::EmailInput @value={{this.value}} @placeholder={{this.placeholder}} @validateFormat={{this.validateFormat}}
                       @validates={{this.validates}} @errorMessage={{this.errorMessage}} @feedbackMessage={{this.feedbackMessage}} />
  `,
  context: args
});
export const BasicUsage = Template.bind({});
BasicUsage.args = defaultArgs;
