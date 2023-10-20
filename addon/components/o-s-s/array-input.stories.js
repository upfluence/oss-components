import hbs from 'htmlbars-inline-precompile';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/OSS::ArrayInput',
  component: 'array-input',
  argTypes: {
    values: {
      description: 'An array of values which will be displayed as deletable items',
      table: {
        type: {
          summary: 'string[]'
        },
        defaultValue: { summary: '[]' }
      },
      control: { type: 'array' }
    },
    placeholder: {
      description: 'The placeholder to show when the input is empty',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: undefined }
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
    keyboardTriggers: {
      description:
        'An array of keyboard event keys that can be used to trigger an entry validation in addition to Enter',
      table: {
        type: {
          summary: 'string[]'
        },
        defaultValue: { summary: '[]' }
      },
      control: { type: 'array' }
    },
    onChange: {
      description:
        'A callback that sends the new array to the parent component when the input is changed (adding or removing items)',
      table: {
        category: 'Actions',
        type: {
          summary: 'onChange(values: string[]): void'
        }
      }
    },
    validator: {
      description:
        'The method that validates the current content of the input. If the result is true, then on enter, the input is added to the values array.',
      table: {
        category: 'Actions',
        type: {
          summary: 'validator?(value: string): boolean'
        }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          'A component for adding and removing items from an array in an input. It can be used for instance in a CC/BCC component.'
      },
      iframeHeight: 100
    }
  }
};

const DefaultUsageTemplate = (args) => ({
  template: hbs`<div style="display: flex; justify-content: center">
      <OSS::ArrayInput @values={{this.values}} @onChange={{this.onChange}} @placeholder={{this.placeholder}} @validator={{this.validator}}
                       @disabled={{this.disabled}} @errorMessage={{this.errorMessage}} />
    </div>
  `,
  context: args
});
export const BasicUsage = DefaultUsageTemplate.bind({});
BasicUsage.args = {
  values: ['Iron Man', 'Thor', 'Loki', 'Hulk'],
  placeholder: 'Enter a super hero name',
  errorMessage: '',
  disabled: false,
  onChange: action('onChange'),
  validator: action('validator')
};
