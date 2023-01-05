import hbs from 'htmlbars-inline-precompile';
import { action } from '@storybook/addon-actions';

const partialCountries = [
  {
    id: 'US',
    alpha2: 'US',
    alpha3: 'USA',
    countryCallingCodes: ['1'],
    currencies: ['USD'],
    name: 'United States',
    showOnTop: true
  },
  {
    id: 'FR',
    alpha2: 'FR',
    alpha3: 'FRA',
    countryCallingCodes: ['33'],
    currencies: ['EUR'],
    name: 'France',
    showOnTop: true
  },
  {
    id: 'GB',
    alpha2: 'GB',
    alpha3: 'GBR',
    countryCallingCodes: ['1 473'],
    currencies: ['GBP'],
    name: 'United Kingdom',
    showOnTop: true
  },
  {
    id: 'DE',
    alpha2: 'DE',
    alpha3: 'DEU',
    countryCallingCodes: ['49'],
    currencies: ['EUR'],
    name: 'Germany',
    showOnTop: true
  },
  {
    id: 'CH',
    alpha2: 'CH',
    alpha3: 'CHE',
    countryCallingCodes: ['41'],
    currencies: ['CHF', 'CHE', 'CHW'],
    name: 'Switzerland',
    showOnTop: true
  }
];

const gbProvinces = [
  {
    name: 'British Forces',
    code: 'BFP'
  },
  {
    name: 'England',
    code: 'ENG'
  },
  {
    name: 'Northern Ireland',
    code: 'NIR'
  },
  {
    name: 'Scotland',
    code: 'SCT'
  },
  {
    name: 'Wales',
    code: 'WLS'
  }
];

export default {
  title: 'Components/OSS::CountrySelector',
  component: 'country-selector',
  argTypes: {
    sourceList: {
      description:
        'The sourceList object represents an array of objects where you can pass a set of countries or prinvinces',
      table: {
        type: {
          summary: 'array'
        },
        defaultValue: { summary: '[]' }
      },
      control: { type: 'array' }
    },
    value: {
      description:
        'The value applied to the input. Use for instance when the form is already pre-filled with known data',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: undefined }
      },
      control: { type: 'text' }
    },
    onChange: {
      type: { required: true },
      description: 'A callback that sends the selected country/province object to the parent component',
      table: {
        category: 'Actions',
        type: {
          summary: 'onChange(item: Item | null): void'
        }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'A Country Selector that displays a Country list with a search function.'
      },
      iframeHeight: 200
    }
  }
};

const defaultArgs = {
  sourceList: partialCountries,
  value: undefined,
  onChange: action('onChange')
};

const Template = (args) => ({
  template: hbs`<div style="width: 200px">
      <OSS::CountrySelector @sourceList={{this.sourceList}} @value={{this.value}} @onChange={{this.onChange}} />
    </div>
  `,
  context: args
});

export const BasicUsage = Template.bind({});
BasicUsage.args = defaultArgs;

export const ProvinceUsage = Template.bind({});
ProvinceUsage.args = {
  ...defaultArgs,
  ...{ sourceList: gbProvinces }
};

export const PrefilledUsage = Template.bind({});
PrefilledUsage.args = {
  ...defaultArgs,
  ...{ value: 'FR' }
};
