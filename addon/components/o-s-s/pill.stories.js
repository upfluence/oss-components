import { hbs } from 'ember-cli-htmlbars';

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
      description: 'Displays the disabled version of the pill',
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
        component: 'A small pill-shaped component used to select a value'
      }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/N7SDuH9mvC9zTlsLN49N4L/2.0-UI-Kit-%F0%9F%92%A0?node-id=8613-473117&p=f&t=pVIlyZlo6oyvIQxs-0'
    }
  }
};

const defaultArgs = {
  label: 'Pill',
  selected: false,
  disabled: false
};

const DefaultUsageTemplate = (args) => ({
  template: hbs`
      <OSS::Pill @label={{this.label}} @selected={{this.selected}} @disabled={{this.disabled}} />
  `,
  context: args
});

export const BasicUsage = DefaultUsageTemplate.bind({});
BasicUsage.args = defaultArgs;
