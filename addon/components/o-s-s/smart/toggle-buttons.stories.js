import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/OSS::Smart::ToggleButtons',
  component: 'smart toggle-buttons',
  argTypes: {
    toggles: {
      type: { required: true },
      description: 'An array of toggles passed to the component',
      table: {
        type: {
          summary: '{value: string, label: string}[]'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'object' }
    },
    selectedToggle: {
      type: { required: true },
      description: 'Value selected',
      table: {
        type: {
          summary: 'string | null'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    disabled: {
      type: { required: false },
      description: 'Disabled state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'boolean' }
    },
    onSelection: {
      type: { required: true },
      description: 'Action triggered when selecting a new toggle',
      table: {
        category: 'Actions',
        type: {
          summary: 'onSelection(selectedToggle: string): void'
        }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'The smart version of the toggle-buttons item component'
      },
      iframeHeight: 200
    }
  }
};

const defaultArgs = {
  toggles: [
    { value: 'categories', label: 'Categories' },
    { value: 'products', label: 'Products' }
  ],
  selectedToggle: 'categories',
  onSelection: action('onSelection'),
  disabled: false
};
const DefaultUsageTemplate = (args) => ({
  template: hbs`
    <div style="width: 250px">
      <OSS::Smart::ToggleButtons @toggles={{this.toggles}} @selectedToggle={{this.selectedToggle}} @onSelection={{this.onSelection}} @disabled={{this.disabled}} />
    </div>
  `,
  context: args
});

export const Default = DefaultUsageTemplate.bind({});
Default.args = defaultArgs;
