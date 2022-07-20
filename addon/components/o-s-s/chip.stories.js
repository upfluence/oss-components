import hbs from 'htmlbars-inline-precompile';
import { action } from '@storybook/addon-actions';

const SkinTypes = ['default', 'primary', 'success', 'danger'];

export default {
  title: 'Components/OSS::Chip',
  component: 'chip',
  argTypes: {
    skin: {
      description: 'Adjust appearance',
      table: {
        type: {
          summary: SkinTypes.join('|')
        },
        defaultValue: { summary: 'primary' }
      },
      options: SkinTypes,
      control: { type: 'select' }
    },

    label: {
      type: { required: true },
      description: 'Text content of the chip',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' }
      },
      control: {
        type: 'text'
      }
    },

    onRemove: {
      type: { required: true },
      description: 'A callback that sends the click event on cross to the parent component'
    },

    disabled: {
      description: 'Disabled chip style with no trigger onRemove event',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      control: {
        type: 'boolean'
      }
    },

    displayMaxWidth: {
      description: 'Set width for the ellipsis on label ',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'undefined' }
      },
      control: {
        type: 'number'
      }
    }
  }
};

const defaultArgs = {
  skin: 'default',
  label: 'Label',
  onRemove: action('onRemove'),
  disabled: false,
  displayMaxWidth: 0
};

const Template = (args) => ({
  template: hbs`
    <OSS::Chip @skin={{this.skin}} @label={{this.label}} @onRemove={{this.onRemove}} @disabled={{this.disabled}} @displayMaxWidth={{this.displayMaxWidth}} />
  `,
  context: args
});

export const Default = Template.bind({});
Default.args = {
  ...defaultArgs
};
