import hbs from 'htmlbars-inline-precompile';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/OSS::TextArea',
  component: 'text-area',
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
    errorMessage: {
      description: 'An error message that will be displayed below the input-group.',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
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
        component: 'The OSS version of the textarea component. Configurable & skinable.'
      }
    }
  }
};

const defaultArgs = {
  value: 'John',
  disabled: false,
  placeholder: 'this is the placeholder',
  errorMessage: undefined,
  onChange: action('onChange')
};

const DefaultUsageTemplate = (args) => ({
  template: hbs`
      <OSS::TextArea @value={{this.value}} @disabled={{this.disabled}} @placeholder={{this.placeholder}}
                           @errorMessage={{this.errorMessage}} @onChange={{this.onChange}} />
  `,
  context: args
});

export const BasicUsage = DefaultUsageTemplate.bind({});
BasicUsage.args = defaultArgs;
