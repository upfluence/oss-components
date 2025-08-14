import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/OSS::Smart::Pill',
  component: 'pill',
  argTypes: {
    label: {
      description: 'Content of the smart pill',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    selected: {
      description: 'Displays the selected version of the smart pill',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      control: {
        type: 'boolean'
      }
    },
    icon: {
      description:
        'Displays a Fontawesome icon on the left using a Fontawesome class, for example: far fa-envelope-open',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    disabled: {
      description: 'Displays the disabled version of the smart pill',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      control: {
        type: 'boolean'
      }
    },
    loading: {
      description: 'Displays the loading state when true',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      control: {
        type: 'boolean'
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'The smart version of a small pill-shaped component used to select a value'
      }
    }
  }
};

const defaultArgs = {
  label: 'Pill',
  selected: false,
  disabled: false,
  loading: false
};

const DefaultUsageTemplate = (args) => ({
  template: hbs`
      <OSS::Smart::Pill @label={{this.label}} @selected={{this.selected}} @disabled={{this.disabled}} @loading={{this.loading}} />
  `,
  context: args
});

export const BasicUsage = DefaultUsageTemplate.bind({});
BasicUsage.args = defaultArgs;
