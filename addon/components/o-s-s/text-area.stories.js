import hbs from 'htmlbars-inline-precompile';
import { action } from '@storybook/addon-actions';

const ResizeTypes = ['horizontal', 'vertical', 'none', null];

export default {
  title: 'Components/OSS::TextArea',
  component: 'text-area',
  argTypes: {
    value: {
      description: 'Value of the textarea',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    rows: {
      description: 'Number of rows dispayed in the textarea',
      table: {
        type: {
          summary: 'number'
        },
        defaultValue: { summary: 2 }
      },
      control: { type: 'number' }
    },
    resize: {
      description: 'Define direction in which textarea can be resized (By default the resize is set to Both)',
      table: {
        type: {
          summary: ResizeTypes.join('|')
        },
        defaultValue: { summary: 'both' }
      },
      options: ResizeTypes,
      control: { type: 'select' }
    },
    disabled: {
      description: 'Disable the default textarea',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: false }
      },
      control: { type: 'boolean' }
    },
    placeholder: {
      description: 'Placeholder of the textarea',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    errorMessage: {
      description: 'An error message that will be displayed below the textarea-group.',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    onChange: {
      description: 'Method called every time the textarea is updated',
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
        component: 'The OSS version of the textarea component.'
      }
    }
  }
};

const defaultArgs = {
  value: 'John',
  rows: 2,
  resize: null,
  disabled: false,
  placeholder: 'this is the placeholder',
  errorMessage: undefined,
  onChange: action('onChange')
};

const DefaultUsageTemplate = (args) => ({
  template: hbs`
      <OSS::TextArea @value={{this.value}} @disabled={{this.disabled}} @placeholder={{this.placeholder}}
                     @errorMessage={{this.errorMessage}} @onChange={{this.onChange}} @rows={{this.rows}}
                     @resize={{this.resize}} />
  `,
  context: args
});

export const BasicUsage = DefaultUsageTemplate.bind({});
BasicUsage.args = defaultArgs;
