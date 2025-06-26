import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/OSS::Pill',
  component: 'pill',
  argTypes: {
    label: {
      description: 'Content of the pill',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    selected: {
      description: 'Displays the selected version of the pill',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      control: {
        type: 'boolean'
      }
    },
    disabled: {
      description: 'Displays the disabled version of the pill',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      control: {
        type: 'boolean'
      }
    },
    onChange: {
      description: 'The callback triggered when the pill status is changed',
      table: {
        category: 'Actions',
        type: {
          summary: 'onChange(): void'
        }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'A small pill-shaped component used to select a value'
      }
    }
  }
};

const defaultArgs = {
  label: 'Pill',
  selected: false,
  disabled: false,
  onChange: action('onChange')
};

const DefaultUsageTemplate = (args) => ({
  template: hbs`
      <OSS::Pill @label={{this.label}} @selected={{this.selected}} @disabled={{this.disabled}} @onChange={{this.onChange}} />
  `,
  context: args
});

export const BasicUsage = DefaultUsageTemplate.bind({});
BasicUsage.args = defaultArgs;
