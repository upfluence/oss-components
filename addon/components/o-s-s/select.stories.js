import hbs from 'htmlbars-inline-precompile';
import { action } from '@storybook/addon-actions';

const FAKE_DATA = [
  { name: 'Batman', characters: 'Bruce Wayne' },
  { name: 'Superman', characters: 'Kal-El' },
  { name: 'Green Arrow', characters: 'Oliver Queen' },
  { name: 'Wonder Woman', characters: 'Princess Diana' },
  { name: 'Martian Manhunter', characters: 'Martian Manhunter' },
  { name: 'Robin/Nightwing', characters: 'Dick Grayson' },
  { name: 'Spider Man', characters: 'Peter Parker' }
];

export default {
  title: 'Components/OSS::Select',
  component: 'select',
  argTypes: {
    items: {
      description: 'Items to display',
      table: {
        type: {
          summary: 'array'
        },
        defaultValue: { summary: '[]' }
      },
      control: { type: 'array' }
    },
    value: {
      description: 'The selected value',
      table: {
        defaultValue: { summary: 'undefined' },
        type: {
          summary: 'object'
        }
      },
      control: { type: 'object' }
    },
    targetLabel: {
      description: 'The attribute to use to display the selected value',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'label' }
      },
      control: { type: 'text' }
    },
    placeholder: {
      description: 'Placeholder',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'Select' }
      },
      control: { type: 'text' }
    },
    disabled: {
      description: 'Whether or not the select should be disabled',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: false }
      },
      control: { type: 'boolean' }
    },
    errorMessage: {
      description: 'Error message to display',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    successMessage: {
      description: 'Success message to display',
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
      description: 'Function to be called with the clicked item',
      table: {
        category: 'Actions',
        type: {
          summary: 'onChange(item): void'
        }
      }
    },
    onSearch: {
      description: 'Function to be called every time the user searches',
      table: {
        category: 'Actions',
        type: {
          summary: 'onSearch(keyword: string): void'
        }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'An OSS version of the HTML Select component.'
      },
      iframeHeight: 250
    }
  }
};

const defaultArgs = {
  items: FAKE_DATA,
  value: FAKE_DATA[0],
  targetLabel: 'name',
  placeholder: undefined,
  disabled: false,
  errorMessage: undefined,
  successMessage: undefined,
  onSearch: action('onSearch'),
  onChange: action('onChange')
};

const Template = (args) => ({
  template: hbs`
  <div style="width: 250px">
    <OSS::Select
      @items={{this.items}} @value={{this.value}} @targetLabel={{this.targetLabel}} @placeholder={{this.placeholder}}
      @disabled={{this.disabled}} @errorMessage={{this.errorMessage}} @successMessage={{this.successMessage}}
      @onSearch={{this.onSearch}} @onChange={{this.onChange}}>
      <:option as |item|>
        {{item.name}}
      </:option>
    </OSS::Select>
  </div>
  `,
  context: args
});

const WithSelectedNamedBlockTemplate = (args) => ({
  template: hbs`
  <div style="width: 250px">
    <OSS::Select
      @items={{this.items}} @value={{this.value}} @placeholder={{this.placeholder}}
      @disabled={{this.disabled}} @errorMessage={{this.errorMessage}} @successMessage={{this.successMessage}}
      @onSearch={{this.onSearch}} @onChange={{this.onChange}}>
      <:selected as |option|>
        With named block — {{option.name}}
      </:selected>
      <:option as |item|>
        {{item.name}}
      </:option>
    </OSS::Select>
  </div>
  `,
  context: args
});

export const Default = Template.bind({});
Default.args = defaultArgs;

export const WithSelectedNamedBlock = WithSelectedNamedBlockTemplate.bind({});
WithSelectedNamedBlock.args = defaultArgs;
