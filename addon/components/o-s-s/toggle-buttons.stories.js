import hbs from 'htmlbars-inline-precompile';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/OSS::ToggleButtons',
  component: 'toggle-buttons',
  argTypes: {
    toggles: {
      type: { required: true },
      description: 'An array of toggles passed to the component',
      table: {
        type: {
          summary: 'toggles',
          object: 'test'
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
          summary: 'selectedToggle'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'object' }
    },
    onSelection: {
      type: { required: true },
      description: 'Action triggered when selecting a new toggle',
      table: {
        category: 'Actions',
        type: {
          summary: 'onSelection(selectedToggle: String): void'
        }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'The toggle-buttons item component'
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
  onSelection: action('onSelection')
};
const DefaultUsageTemplate = (args) => ({
  template: hbs`
      <div style="width: 250px">
        <OSS::ToggleButtons @toggles={{this.toggles}} @selectedToggle={{this.selectedToggle}} @onSelection={{this.onSelection}}/>
      </div>
  `,
  context: args
});

export const Default = DefaultUsageTemplate.bind({});
Default.args = defaultArgs;
