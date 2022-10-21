import hbs from 'htmlbars-inline-precompile';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/OSS::InputGroup',
  component: 'input-group',
  argTypes: {
    value: {
      description: 'Value of the input',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: undefined }
      },
      control: { type: 'text' }
    },
    disabled: {
      description: 'Disable the default input (when not passing an input named block)',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: false }
      },
      control: { type: 'boolean' }
    },
    placeholder: {
      description: 'Placeholder of the input',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: undefined }
      },
      control: { type: 'text' }
    },
    errorMessage: {
      description: 'An error message that will be displayed below the input-group.',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: false }
      },
      control: { type: 'text' }
    },
    onChange: {
      type: { name: 'Method' },
      description: 'Method called every time the input is updated',
      table: {
        type: {
          summary: 'onChange(value: string): void'
        }
      },
      control: { type: null }
    },
    prefix: {
      description: 'The prefix label added to the input-group',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: undefined }
      },
      control: { type: 'text' }
    },
    suffix: {
      description: 'The suffix label added to the input-group',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: undefined }
      },
      control: { type: 'text' }
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          'The OSS version of the input-group component. This component exposes the same arguments as the input-container as well as a suffix & a prefix.'
      }
    }
  }
};

const DefaultUsageTemplate = (args) => ({
  template: hbs`
      <OSS::InputGroup @prefix={{this.prefix}} @suffix={{this.suffix}} @value={{this.value}}
                       @errorMessage={{this.errorMessage}} @onChange={{this.onChange}} />
  `,
  context: args
});
export const BasicUsage = DefaultUsageTemplate.bind({});
BasicUsage.args = {
  value: 'John',
  prefix: 'email',
  suffix: '@domain.com',
  errorMessage: '',
  onChange: action('')
};
