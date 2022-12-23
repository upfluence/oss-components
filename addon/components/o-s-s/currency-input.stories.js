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

const defaultArgs = {
  value: 42,
  currency: 'USD',
  onlyCurrency: false,
  errorMessage: '',
  onChange: action('onChange')
};

const Template = (args) => ({
  template: hbs`
      <OSS::CurrencyInput @value={{this.value}} @currency={{this.currency}} @onChange={{this.onChange}}
                          @onlyCurrency={{this.onlyCurrency}} @errorMessage={{this.errorMessage}} />
  `,
  context: args
});

export const BasicUsage = Template.bind({});
BasicUsage.args = {
  ...defaultArgs
};
