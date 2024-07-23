import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/OSS::Slider',
  component: 'slider',
  argTypes: {
    value: {
      control: 'number',
      description: 'The value of the slider',
      defaultValue: 30,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 30 }
      }
    },
    displayInputValue: {
      control: 'boolean',
      description: 'Flag to display input value',
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    unit: {
      control: 'text',
      description: 'The unit of the slider value',
      defaultValue: '%',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '%' }
      }
    },
    disabled: {
      control: 'boolean',
      description: 'The unit of the slider value',
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'Displays a slider.'
      }
    }
  }
};

const defaultArgs = {
  value: 30,
  displayInputValue: false,
  unit: '%',
  disabled: false
};

const Template = (args) => ({
  template: hbs`
    <OSS::Slider @value={{this.value}}
                 @displayInputValue={{this.displayInputValue}}
                 @unit={{this.unit}}
                 @disabled={{this.disabled}}
    />
  `,
  context: args
});

export const Default = Template.bind({});
Default.args = defaultArgs;
