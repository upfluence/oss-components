import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/OSS::RadioButton',
  component: 'radio-button',
  argTypes: {
    selected: {
      description: 'Whether the radio-button is selected or not',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      control: { type: 'boolean' }
    },
    disabled: {
      description: 'Optional - defines whether the radio-button is in a disabled state or not',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      control: { type: 'boolean' }
    },
    onChange: {
      description: 'A callback that sends the new value of the radio-button.',
      table: {
        category: 'Actions',
        type: {
          summary: 'onChange?(value: boolean): void'
        }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'An OSS version of the radio-button component.'
      }
    }
  }
};

const defaultArgs = {
  selected: false,
  disabled: false,
  onChange: action('onChange')
};

const Template = (args) => ({
  template: hbs`
      <OSS::RadioButton @selected={{this.selected}} @disabled={{this.disabled}} @onChange={{this.onChange}}/>
  `,
  context: args
});

export const BasicUsage = Template.bind({});
BasicUsage.args = defaultArgs;
