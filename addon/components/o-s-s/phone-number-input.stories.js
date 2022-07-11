import hbs from 'htmlbars-inline-precompile';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/OSS::PhoneNumberInput',
  component: 'phone-number-input',
  argTypes: {
    prefix: {
      description: 'Country code phone number prefix',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: false }
      },
      control: { type: 'text' }
    },
    number: {
      description: 'The phone number of the input',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: false }
      },
      control: { type: 'text' }
    },
    onChange: {
      description: 'A callback that sends the modifications of the prefix & the phone number'
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'A dedicated phone number input with a country code selector.'
      }
    }
  }
};

const DefaultUsageTemplate = (args) => ({
  template: hbs`
      <OSS::PhoneNumberInput @prefix={{this.prefix}} @number={{this.number}} @onChange={{this.onChange}} />
  `,
  context: args
});
export const BasicUsage = DefaultUsageTemplate.bind({});
BasicUsage.args = {
  that: this,
  prefix: '+33',
  number: '742424242',
  onChange: action('onChange')
};
