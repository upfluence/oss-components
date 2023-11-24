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
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    number: {
      description: 'The phone number of the input',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    placeholder: {
      description: 'Value of the placeholder',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: '(415) 000 0000' }
      },
      control: { type: 'text' }
    },
    onChange: {
      description: 'A callback that sends the modifications of the prefix & the phone number',
      table: {
        category: 'Actions',
        type: {
          summary: 'onChange(prefix: string, number: string): void'
        }
      }
    },
    validates: {
      description: 'A callback that indicates whether or not the current input matches the regex',
      table: {
        category: 'Actions',
        type: {
          summary: 'validates?(isPassing: boolean): void'
        }
      }
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

const defaultArgs = {
  prefix: '+33',
  number: '742424242',
  placeholder: '(415) 000 0000',
  onChange: action('onChange'),
  validates: action('validates')
};

const DefaultUsageTemplate = (args) => ({
  template: hbs`
      <OSS::PhoneNumberInput @prefix={{this.prefix}} @number={{this.number}} @onChange={{this.onChange}}
                             @validates={{this.validates}} @placeholder={{this.placeholder}} />
  `,
  context: args
});

export const BasicUsage = DefaultUsageTemplate.bind({});
BasicUsage.args = defaultArgs;
