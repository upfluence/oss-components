import hbs from 'htmlbars-inline-precompile';

export default {
  title: 'Components/OSS::Attribute::PhoneNumber',
  component: 'phone-number',
  argTypes: {
    countryCode: {
      description:
        'The country-code in alpha2 format that will be used to display the country flag if it matches the dictionary.',
      table: {
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    prefix: {
      description: 'The phone number prefix to be displayed with a space before the number. (e.g. "+33")',
      table: {
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    number: {
      description: 'The phone number that will be displayed',
      table: {
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          'Member of the Attribute displays. The OSS::Attribute::PhoneNumber displays a phone number and a country flag if the country-code is provided.'
      }
    }
  }
};

const defaultArgs = {
  countryCode: 'FR',
  prefix: '+33',
  number: '6 12 34 56 78'
};

const Template = (args) => ({
  template: hbs`
    <div style="padding: 12px; background: white">
      <OSS::Attribute::PhoneNumber @countryCode={{this.countryCode}} @prefix={{this.prefix}} @number={{this.number}} />
    </div>
  `,
  context: args
});

export const Default = Template.bind({});
Default.args = defaultArgs;
