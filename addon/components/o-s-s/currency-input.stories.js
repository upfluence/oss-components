import hbs from 'htmlbars-inline-precompile';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/OSS::CurrencyInput',
  component: 'currency-input',
  argTypes: {
    currency: {
      description: 'The currency applied to the component (EUR, USD, etc.)',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: false }
      },
      control: { type: 'text' }
    },
    value: {
      description: 'The value applied to the input',
      table: {
        type: {
          summary: 'number'
        },
        defaultValue: { summary: false }
      },
      control: { type: 'text' }
    },
    onChange: {
      type: { required: true },
      description: 'A callback that sends the modifications of the value & the currency back to the parent component'
    }
  }
};

const DefaultUsageTemplate = (args) => ({
  template: hbs`
      <OSS::CurrencyInput @value={{this.value}} @currency={{this.currency}} @onChange={{this.onChange}} />
  `,
  context: args
});
export const BasicUsage = DefaultUsageTemplate.bind({});
BasicUsage.args = {
  that: this,
  value: 42,
  currency: 'USD',
  onChange: action('onChange')
};
