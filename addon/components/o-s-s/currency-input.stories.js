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
    },
    onlyCurrency: {
      description: 'Display only the currency dropdown',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: false }
      },
      control: { type: 'boolean' }
    },
    allowCurrencyUpdate: {
      description: 'Allow to change the currency part of the input',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: true }
      },
      control: { type: 'boolean' }
    },
    placeholder: {
      description: 'Placeholder for the number input when no value is passed',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: null }
      },
      control: { type: 'text' }
    },
    errorMessage: {
      description: 'If provided, will display a red border and the error message below the input.',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: false }
      },
      control: { type: 'text' }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'A currency selector & input, used to set prices.'
      }
    }
  }
};

const DefaultUsageTemplate = (args) => ({
  template: hbs`
      <OSS::CurrencyInput @value={{this.value}} @currency={{this.currency}} @onChange={{this.onChange}}
                          @onlyCurrency={{this.onlyCurrency}} @errorMessage={{this.errorMessage}} />
  `,
  context: args
});
export const BasicUsage = DefaultUsageTemplate.bind({});
BasicUsage.args = {
  that: this,
  value: 42,
  currency: 'USD',
  onChange: action('onChange'),
  onlyCurrency: false,
  errorMessage: ''
};
