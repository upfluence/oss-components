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
        type: {
          category: 'Actions',
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
      }
    }
  }
};

const DefaultUsageTemplate = (args) => ({
  template: hbs`<div style="display: flex; justify-content: center">
      <OSS::ArrayInput @values={{this.values}} @onChange={{this.onChange}} @placeholder={{this.placeholder}} @validator={{this.validator}} />
    </div>
  `,
  context: args
});
export const BasicUsage = DefaultUsageTemplate.bind({});
BasicUsage.args = {
  values: ['Iron Man', 'Thor', 'Loki', 'Hulk'],
  placeholder: 'Enter a super hero name',
  onChange: action('onChange'),
  validator: action('validator')
};
