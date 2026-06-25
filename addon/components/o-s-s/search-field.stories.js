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
    type: {
      description: 'input type',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'text' }
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
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/N7SDuH9mvC9zTlsLN49N4L/2.0-UI-Kit-%F0%9F%92%A0?node-id=1142-1256&p=f&t=MXQv8vcSqK6Jaxfy-0'
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
