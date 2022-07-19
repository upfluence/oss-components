import hbs from 'htmlbars-inline-precompile';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/OSS::ToggleSwitch',
  component: 'toggle-switch',
  argTypes: {
    value: {
      description: 'The value applied to the input/switch',
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
      description: 'A callback that sends the modifications of the value & the currency back to the parent component'
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

const DefaultUsageTemplate = (args) => ({
  template: hbs`
      <OSS::ToggleSwitch @value={{this.value}} @onChange={{this.onChange}} />
  `,
  context: args
});
export const BasicUsage = DefaultUsageTemplate.bind({});
BasicUsage.args = {
  value: true,
  onChange: action('onChange')
};
