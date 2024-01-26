import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/OSS::ToggleSwitch',
  component: 'toggle-switch',
  argTypes: {
    value: {
      type: { required: true },
      description: 'The value applied to the input/switch',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: false }
      },
      control: { type: 'boolean' }
    },
    disabled: {
      description: 'Disables the toggle switch',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: false }
      },
      control: { type: 'boolean' }
    },
    onChange: {
      type: { required: true },
      description: 'A callback that sends the modifications of the value & the currency back to the parent component',
      table: {
        category: 'Actions',
        type: {
          summary: 'onClose(value): void'
        }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'A themed toggle switch.'
      }
    }
  }
};

const defaultArgs = {
  value: false,
  disabled: false,
  onChange: action('onChange')
};
const DefaultUsageTemplate = (args) => ({
  template: hbs`
      <OSS::ToggleSwitch @value={{this.value}} @disabled={{this.disabled}} @onChange={{this.onChange}} />
  `,
  context: args
});

export const BasicUsage = DefaultUsageTemplate.bind({});
BasicUsage.args = defaultArgs;
