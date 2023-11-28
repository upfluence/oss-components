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
        defaultValue: { summary: 'USD' }
      },
      control: { type: 'text' }
    },
    value: {
      description: 'The value applied to the input',
      table: {
        type: {
          summary: 'number'
        },
        defaultValue: { summary: 0 }
      },
      control: { type: 'number' }
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
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    onChange: {
      type: { required: true },
      description: 'A callback that sends the modifications of the value & the currency back to the parent component',
      table: {
        category: 'Actions',
        type: { summary: 'onChange(currency: string, value: number): void' }
      }
    },
    allowedCurrencies: {
      description: 'Allows passing a custom set of selectable currencies to the component.',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'array' }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'A currency selector & input, used to set prices.'
      },
      iframeHeight: 200
    }
  }
};

const defaultArgs = {
  value: 42,
  currency: 'USD',
  onlyCurrency: false,
  errorMessage: '',
  onChange: action('onChange'),
  allowCurrencyUpdate: true,
  allowedCurrencies: undefined,
  placeholder: undefined
};

const Template = (args) => ({
  template: hbs`
      <div style="width:270px">
        <OSS::CurrencyInput @value={{this.value}} @currency={{this.currency}} @onChange={{this.onChange}}
                            @onlyCurrency={{this.onlyCurrency}} @errorMessage={{this.errorMessage}}
                            @allowCurrencyUpdate={{this.allowCurrencyUpdate}} @allowedCurrencies={{this.allowedCurrencies}}
                            @placeholder={{this.placeholder}} />
      </div>
  `,
  context: args
});

export const BasicUsage = Template.bind({});
BasicUsage.args = defaultArgs;
