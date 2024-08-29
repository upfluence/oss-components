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
    min: {
      control: 'number',
      description: 'The minimal value of the slider',
      defaultValue: 0,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0 }
      }
    },
    max: {
      control: 'number',
      description: 'The maximum value of the slider',
      defaultValue: 100,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 100 }
      }
    },
    step: {
      control: 'number',
      description: 'The used increment value for the slider',
      defaultValue: 1,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1 }
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
  min: 0,
  max: 100,
  step: 1,
  displayInputValue: false,
  unit: 'percentage',
  disabled: false
};

const Template = (args) => ({
  template: hbs`
    <OSS::Slider @value={{this.value}}
                 @min={{this.min}}
                 @max={{this.max}}
                 @step={{this.step}}
                 @displayInputValue={{this.displayInputValue}}
                 @unit={{this.unit}}
                 @disabled={{this.disabled}}
    />
  `,
  context: args
});

export const Default = Template.bind({});
Default.args = defaultArgs;
