import { hbs } from 'ember-cli-htmlbars';
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
        component: 'The toggle-buttons item component'
      },
      iframeHeight: 200
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/N7SDuH9mvC9zTlsLN49N4L/2.0-UI-Kit-%F0%9F%92%A0?node-id=8652-57552&t=MXQv8vcSqK6Jaxfy-4'
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
      <OSS::ToggleButtons @toggles={{this.toggles}} @selectedToggle={{this.selectedToggle}} @onSelection={{this.onSelection}} @disabled={{this.disabled}} />
    </div>
  `,
  context: args
});

export const Default = DefaultUsageTemplate.bind({});
Default.args = defaultArgs;
