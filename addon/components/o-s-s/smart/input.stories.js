import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/OSS::Smart::Input',
  component: 'button',
  argTypes: {
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
    loading: {
      type: { required: true },
      control: 'boolean',
      description: 'Flag to display loading state',
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    }
  }
};

const Template = (args) => ({
  template: hbs`
     <OSS::Smart::Input
          @value={{this.value}} 
          @disabled={{this.disabled}}
          @placeholder={{this.placeholder}}
          @type={{this.type}}
          @errorMessage={{this.errorMessage}}
          @onChange={{this.onChange}}
          @loading={{this.loading}}
        />
  `,
  context: args
});

const defaultArgs = {
  value: 'John',
  disabled: false,
  type: undefined,
  placeholder: 'this is the placeholder',
  errorMessage: undefined,
  onChange: action('onChange'),
  loading: false
};

export const Default = Template.bind({});
Default.args = defaultArgs;
