import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/OSS::NumberInput',
  component: 'number-input',
  argTypes: {
    value: {
      description: '[OPTIONAL] The starting value the input will take. Defaults to 0.',
      table: {
        type: {
          summary: 'number'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'number' }
    },
    min: {
      description: '[OPTIONAL] The minimum value the number can be.',
      table: {
        type: {
          summary: 'number'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'number' }
    },
    max: {
      description: '[OPTIONAL] The maximum value the number can be.',
      table: {
        type: {
          summary: 'number'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'number' }
    },
    step: {
      description: '[OPTIONAL] The increase & decrease value of each button press. Defaults to 1.',
      table: {
        type: {
          summary: 'number'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'number' }
    },
    minReachedTooltip: {
      description: '[OPTIONAL] The tooltip to render when the minimum is reached',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    maxReachedTooltip: {
      description: '[OPTIONAL] The tooltip to render when the maximum is reached',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    disabled: {
      description: '[OPTIONAL] Disables all the buttons and the input field. Defaults to false.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'boolean' }
    },
    onChange: {
      description: '[OPTIONAL] A callback that sends back the new value of the input',
      table: {
        category: 'Actions',
        type: {
          summary: 'onChange(value): void'
        }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          'A number input wrapper with decrease & increase buttons. (Up & Right arrow increase, Down & Left arrow decrease)'
      }
    }
  }
};

const DefaultUsageTemplate = (args) => ({
  template: hbs`
    <OSS::NumberInput @value={{this.value}} @min={{this.min}} @max={{this.max}} @step={{this.step}} @onChange={{this.onChange}}
                      @minReachedTooltip={{this.minReachedTooltip}} @maxReachedTooltip={{this.maxReachedTooltip}} @disabled={{this.disabled}} />
  `,
  context: args
});
export const BasicUsage = DefaultUsageTemplate.bind({});
BasicUsage.args = {
  value: 0,
  min: 0,
  max: 15,
  step: 3,
  minReachedTooltip: '',
  maxReachedTooltip: '',
  disabled: false,
  onChange: action('onChange')
};
