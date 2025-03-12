import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/OSS::SearchField',
  component: 'search-field',
  argTypes: {
    value: {
      type: { required: true },
      description: 'Value of the input',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    placeholder: {
      description: 'Placeholder of the input',
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
      description: 'Method called every time the input is updated',
      table: {
        category: 'Actions',
        type: {
          summary: 'onChange(value: string): void'
        }
      },
      control: { type: null }
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          'The OSS version of the search-field component. This component encapsulates search field input and allows user to reset the search.'
      }
    }
  }
};

const defaultArgs = {
  value: 'John',
  placeholder: 'My placeholder',
  onChange: action('onChange')
};

const Template = (args) => ({
  template: hbs`
      <OSS::SearchField @value={{this.value}} @placeholder={{this.placeholder}} @onChange={{this.onChange}} />
  `,
  context: args
});
export const BasicUsage = Template.bind({});
BasicUsage.args = defaultArgs;
