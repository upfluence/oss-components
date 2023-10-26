import hbs from 'htmlbars-inline-precompile';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/OSS::Attribute::Country',
  component: 'country',
  argTypes: {
    countryCode: {
      description: 'The country-code in alpha2 format that will be used to display the flag and country name.',
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
          'Part of the Attribute displays. The OSS::Attribute::Country displays the flag and name of the country passed in parameter.'
      }
    }
  }
};

const defaultArgs = {
  countryCode: 'FR'
};

const Template = (args) => ({
  template: hbs`
    <div style="padding: 12px; background: white">
      <OSS::Attribute::Country @countryCode={{this.countryCode}} />
    </div>
  `,
  context: args
});

export const Default = Template.bind({});
Default.args = defaultArgs;
