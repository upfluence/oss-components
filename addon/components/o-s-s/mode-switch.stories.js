import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/OSS::ModeSwitch',
  component: 'ModeSwitch',
  argTypes: {
    options: {
      description: 'The options of the switch',
      table: {
        type: {
          summary: 'object'
        },
        defaultValue: { summary: 'undefined' }
      },
      options: '',
      control: { type: 'object' }
    },
    selected: {
      description: 'The selected option',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    onSelect: {
      description: 'A callback triggered when an option is clicked',
      table: {
        category: 'Actions',
        type: {
          summary: 'onSelect():void'
        }
      }
    },
    plain: {
      description: 'Display the switch with a grey background',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: 'false' }
      },
      control: { type: 'boolean' }
    },
    size: {
      description: 'Changes the size of the switch',
      table: {
        type: {
          summary: 'xs' | null
        },
        defaultValue: { summary: 'undefined' }
      },
      options: ['xs', null],
      control: { type: 'select' }
    }
  }
};

const Template = (args) => ({
  template: hbs`<ModeSwitch @options={{this.options}} @selected={{this.selected}} @plain={{this.plain}} @size={{this.size}} @onSelect={{this.onSelect}} />`,
  context: { ...args, onSelect: action('onSelect') }
});

export const Default = Template.bind({});
Default.args = {
  options: [
    { key: 'option1', label: 'Option 1', icon: 'check', skin: 'primary' },
    { key: 'option2', label: 'Option 2', tag: { label: 'New', skin: 'primary' }, skin: 'xtd-blue' }
  ],
  selected: 'option1',
  plain: false,
  size: undefined
};
