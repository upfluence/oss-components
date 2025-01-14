import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/OSS::Slider',
  component: 'slider',
  argTypes: {
    value: {
      type: { required: true },
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
      description: 'The minimal value of the slider. If inputOptions is defined, this value is ignored',
      defaultValue: 0,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0 }
      }
    },
    max: {
      control: 'number',
      description: 'The maximum value of the slider. If inputOptions is defined, this value is ignored',
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
    },
    defaultValue: {
      control: 'text',
      description: 'The default value when no value is provided',
      defaultValue: 50,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '50' }
      }
    },
    tooltipLabel: {
      control: 'text',
      description: 'Specific tooltip label for the slider handle',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' }
      }
    },
    inputOptions: {
      description: 'Options min and max for the input field and slider',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'object' }
    },
    onChange: {
      type: { required: true },
      description: 'Method called every time the input / range is updated',
      table: {
        category: 'Actions',
        type: {
          summary: 'onChange(value: number | null): void'
        }
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
  defaultValue: undefined,
  displayInputValue: false,
  tooltipLabel: undefined,
  unit: 'percentage',
  disabled: false,
  inputOptions: { min: 0, max: 100 },
  onChange: action('onChange')
};

const Template = (args) => ({
  template: hbs`
    <OSS::Slider @value={{this.value}}
                 @min={{this.min}}
                 @max={{this.max}}
                 @step={{this.step}}
                 @tooltipLabel={{this.tooltipLabel}}
                 @defaultValue={{this.defaultValue}}
                 @displayInputValue={{this.displayInputValue}}
                 @unit={{this.unit}}
                 @disabled={{this.disabled}}
                 @inputOptions={{this.inputOptions}}
                 @onChange={{this.onChange}}
    />
  `,
  context: args
});

export const Default = Template.bind({});
Default.args = defaultArgs;
