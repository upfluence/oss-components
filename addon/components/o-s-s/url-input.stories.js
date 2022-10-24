import hbs from 'htmlbars-inline-precompile';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/OSS::UrlInput',
  component: 'url-input',
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
    },
    validationRegex: {
      description: 'A regex that will be used to validate the input',
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
          'A URL input component where prefix/suffix can be set and where a Regex parameter can be specified to test against the input value.'
      }
    }
  }
};

const DefaultUsageTemplate = (args) => ({
  template: hbs`
      <OSS::UrlInput @prefix={{this.prefix}} @suffix={{this.suffix}} @value={{this.value}}
                     @placeholder={{this.placeholder}}
                     @disabled={{this.disabled}} @validationRegex={{this.validationRegex}}
                     @errorMessage={{this.errorMessage}} @onChange={{this.onChange}} />
  `,
  context: args
});
export const BasicUsage = DefaultUsageTemplate.bind({});
BasicUsage.args = {
  value: '',
  prefix: 'https://',
  suffix: '@shopify.com',
  placeholder: 'subdomain',
  disbaled: 'false',
  errorMessage: 'Not a valid subdomain',
  validationRegex: /^[a-zA-Z0-9]+[a-zA-Z0-9-._]*[a-zA-Z0-9]+$/,
  onChange: action('')
};
