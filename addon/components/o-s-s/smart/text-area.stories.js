import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

const ResizeTypes = ['horizontal', 'vertical', 'none', null];

export default {
  title: 'Components/OSS::Smart::TextArea',
  component: 'smart text-area',
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
    loading: {
      description: 'Indicates if the textarea is in a loading state',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: false }
      },
      control: { type: 'boolean' }
    },
    hasError: {
      description: 'Indicates if the textarea has an error',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: false }
      },
      control: { type: 'boolean' }
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
  hasError: false,
  loading: false,
  onChange: action('onChange')
};

const DefaultUsageTemplate = (args) => ({
  template: hbs`
      <OSS::Smart::TextArea @value={{this.value}} @disabled={{this.disabled}} @placeholder={{this.placeholder}}
                     @hasError={{this.hasError}} @onChange={{this.onChange}} @rows={{this.rows}}
                     @resize={{this.resize}} @loading={{this.loading}}/>
  `,
  context: args
});

export const BasicUsage = DefaultUsageTemplate.bind({});
BasicUsage.args = defaultArgs;
