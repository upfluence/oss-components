import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Smart::Immersive::Input',
  component: 'input',
  argTypes: {
    value: {
      description: 'Value of the input',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    type: {
      description: 'The input type',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'text' }
      },
      control: { type: 'text' }
    },
    disabled: {
      description: 'Disable the default input (when not passing an input named block)',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: false }
      },
      control: { type: 'boolean' }
    },
    placeholder: {
      description: 'Placeholder of the input',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
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
    hasError: {
      description:
        'Allows setting the error style on the input without showing an error message. Useful for form validation.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'boolean' }
    },
    onChange: {
      description: 'Method called every time the input is updated',
      table: {
        category: 'Actions',
        type: {
          summary: 'onChange(value: string): void'
        }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'The smart & immersive version of the input component. Configurable.'
      }
    }
  }
};

const defaultArgs = {
  value: 'John',
  disabled: false,
  type: undefined,
  placeholder: 'this is the placeholder',
  errorMessage: undefined,
  onChange: action('onChange')
};

const DefaultUsageTemplate = (args) => ({
  template: hbs`
      <Smart::Immersive::Input @value={{this.value}} @disabled={{this.disabled}} @placeholder={{this.placeholder}} @type={{this.type}}
                               @errorMessage={{this.errorMessage}} @onChange={{this.onChange}} />
  `,
  context: args
});

export const BasicUsage = DefaultUsageTemplate.bind({});
BasicUsage.args = defaultArgs;
