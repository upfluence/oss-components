import hbs from 'htmlbars-inline-precompile';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/OSS::Checkbox',
  component: 'checkbox',
  argTypes: {
    size: {
      description: 'Adjust the size of the checkbox',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      options: [undefined, 'sm'],
      control: { type: 'select' }
    },
    disabled: {
      description: 'Whether the checkbox is disabled or not',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      control: {
        type: 'boolean'
      }
    },
    checked: {
      type: { required: true },
      description: 'State of the checkbox',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      control: {
        type: 'boolean'
      }
    },
    partial: {
      description: 'Partial state of the checkbox',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      control: {
        type: 'boolean'
      }
    },
    onChange: {
      type: { required: true },
      description: 'The action triggered when the checkbox status is changed',
      table: {
        category: 'Actions',
        type: { summary: 'onChange(value: boolean): void' }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'The OSS and configurable version of the HTML Checkbox component.'
      }
    }
  }
};

const defaultArgs = {
  checked: false,
  partial: false,
  disabled: false,
  size: null,
  onChange: action('onSelect')
};

const Template = (args) => ({
  template: hbs`
    <OSS::Checkbox
      @checked={{this.checked}} @partial={{this.partial}} @disabled={{this.disabled}} @size={{this.size}} @onChange={{this.onChange}} />
  `,
  context: args
});

export const Default = Template.bind({});
Default.args = defaultArgs;
