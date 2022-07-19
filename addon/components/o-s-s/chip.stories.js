import hbs from 'htmlbars-inline-precompile';
import { action } from '@storybook/addon-actions';

const SkinTypes = ['default', 'primary', 'success', 'danger'];

export default {
  title: 'Components/OSS::Chip',
  component: 'tag',
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
      description: 'Text content of the tag',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' }
      },
      control: {
        type: 'text'
      }
    },

    onClick: {
      type: { required: true },
      description: 'A callback that sends the click event on cross to the parent component'
    },

    disabled: {
      description: 'Text wrapping when width > 80px',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      control: {
        type: 'boolean'
      }
    },

    ellipsisWidth: {
      description: 'Max width before we apply ellispsis on text : Requirement: <br/> -be careful you have to had enabled-tooltip for hover on chip <br/> -only few class exist for ellispsis',
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
  onClick: action('onClick'),
  disabled: false,
  ellipsisWidth: 0
};

const Template = (args) => ({
  template: hbs`
    <OSS::Chip @skin={{this.skin}} @label={{this.label}} @onClick={{this.onClick}} @disabled={{this.disabled}} @ellipsisWidth={{this.ellipsisWidth}} />
  `,
  context: args
});

export const Default = Template.bind({});
Default.args = {
  ...defaultArgs
};
