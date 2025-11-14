import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/OSS::Smart::NumberInput',
  component: 'smart-number-input',
  argTypes: {
    value: {
      description: '[OPTIONAL] The current value of the input',
      table: {
        type: {
          summary: 'number'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'number' }
    },
    min: {
      description: '[OPTIONAL] The minimum value the number can be',
      table: {
        type: {
          summary: 'number'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'number' }
    },
    max: {
      description: '[OPTIONAL] The maximum value the number can be',
      table: {
        type: {
          summary: 'number'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'number' }
    },
    step: {
      description: '[OPTIONAL] The increase & decrease value of each button press. Defaults to 1',
      table: {
        type: {
          summary: 'number'
        },
        defaultValue: { summary: '1' }
      },
      control: { type: 'number' }
    },
    loading: {
      description: '[OPTIONAL] Shows loading state with animated placeholder',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: 'false' }
      },
      control: { type: 'boolean' }
    },
    placeholder: {
      description: '[OPTIONAL] Placeholder text shown during loading state',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    hasError: {
      description: '[OPTIONAL] Applies error styling to the component',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: 'false' }
      },
      control: { type: 'boolean' }
    },
    disabled: {
      description: '[OPTIONAL] Disables all interactions with the component',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: 'false' }
      },
      control: { type: 'boolean' }
    },
    onChange: {
      description: '[OPTIONAL] Callback triggered when the value changes',
      table: {
        category: 'Actions',
        type: {
          summary: 'onChange(value: number): void'
        }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          'A smart number input component with loading states, error handling, and gradient animations. Features decrease & increase buttons with keyboard navigation support.'
      }
    }
  }
};

const DefaultTemplate = (args) => ({
  template: hbs`
    <OSS::Smart::NumberInput
      @value={{this.value}}
      @min={{this.min}}
      @max={{this.max}}
      @step={{this.step}}
      @loading={{this.loading}}
      @placeholder={{this.placeholder}}
      @hasError={{this.hasError}}
      @errorMessage={{this.errorMessage}}
      @feedbackMessage={{this.feedbackMessage}}
      @disabled={{this.disabled}}
      @onChange={{this.onChange}}
    />
  `,
  context: args
});

export const Default = DefaultTemplate.bind({});
Default.args = {
  value: 10,
  onChange: action('onChange')
};

export const Loading = DefaultTemplate.bind({});
Loading.args = {
  loading: true,
  placeholder: 'Loading...',
  onChange: action('onChange')
};

export const Filled = DefaultTemplate.bind({});
Filled.args = {
  value: 100,
  onChange: action('onChange')
};

export const Error = DefaultTemplate.bind({});
Error.args = {
  value: 50,
  hasError: true,
  errorMessage: 'Invalid value',
  onChange: action('onChange')
};

export const Disabled = DefaultTemplate.bind({});
Disabled.args = {
  value: 25,
  disabled: true,
  onChange: action('onChange')
};
