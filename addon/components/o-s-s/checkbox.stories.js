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
          summary: 'sm'
        },
        defaultValue: { summary: '' }
      },
      options: [null, 'sm'],
      control: { type: 'select' }
    },
    disabled: {
      description: 'Whether the checkbox is disabled or not',
      table: {
        type: { summary: 'true | false' },
        defaultValue: { summary: 'false' }
      },
      control: {
        type: 'boolean'
      }
    },
    checked: {
      description: 'State of the checkbox',
      table: {
        type: { summary: 'true | false' },
        defaultValue: { summary: 'false' }
      },
      control: {
        type: 'boolean'
      }
    }
  }
};

const defaultArgs = {
  size: null,
  disabled: false,
  checked: false,
  onChange: action('onSelect')
};

const Template = (args) => ({
  template: hbs`
    <OSS::Checkbox
      @checked={{this.checked}} @disabled={{this.disabled}} @size={{this.size}} @onChange={{this.onChange}} />
  `,
  context: args
});

export const Default = Template.bind({});
Default.args = {
  ...defaultArgs
};
