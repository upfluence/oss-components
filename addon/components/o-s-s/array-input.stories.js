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
          summary: 'array'
        },
        defaultValue: { summary: '[]' }
      },
      control: { type: 'array' }
    },
    placeholder: {
      description: 'The placeholder to show when the input is empty',
      table: {
        type: {
          summary: 'text'
        },
        defaultValue: { summary: false }
      },
      control: { type: 'text' }
    },
    onChange: {
      type: { required: false },
      description:
        'A callback that sends the new array to the parent component when the input is changed (adding or removing items)',
      table: {
        type: {
          summary: 'onChange(values: string[]): void'
        }
      }
    },
    validator: {
      type: { required: false },
      description:
        'The method that validates the current content of the input. If the result is true, then on enter, the input is added to the values array.',
      table: {
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
  onChange: action('onChange'),
  validator: action('validator'),
  placeholder: 'Enter a super hero name'
};
