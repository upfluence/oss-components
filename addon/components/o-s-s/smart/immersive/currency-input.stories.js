import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/OSS::Smart::Immersive::CurrencyInput',
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
          summary: '{ code: string, symbol: string }[]'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'array' }
    }
  },
  hasError: {
    description: 'Displays an error border around the input.',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' }
    },
    control: {
      type: 'boolean'
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'A smart and immersive currency selector & input, used to set prices.'
      },
      iframeHeight: 200
    }
  }
};

const defaultArgs = {
  value: 42,
  currency: 'USD',
  onChange: action('onChange'),
  hasError: false,
  allowedCurrencies: undefined,
  placeholder: undefined
};

const Template = (args) => ({
  template: hbs`
      <div style="width:270px">
        <OSS::Smart::Immersive::CurrencyInput @value={{this.value}} @currency={{this.currency}} @onChange={{this.onChange}}
                                              @hasError={{this.hasError}} @allowedCurrencies={{this.allowedCurrencies}}
                                              @placeholder={{this.placeholder}} />
      </div>
  `,
  context: args
});

export const BasicUsage = Template.bind({});
BasicUsage.args = defaultArgs;
