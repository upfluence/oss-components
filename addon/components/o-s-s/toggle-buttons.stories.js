import hbs from 'htmlbars-inline-precompile';
import { action } from '@storybook/addon-actions';

const PrivacyTypes = ['public', 'private'];

export default {
  title: 'Components/OSS::ToggleButtons',
  component: 'upload-item',
  argTypes: {
    toggles: {
      type: { required: true },
      description: 'The uploader instance. The uploader can extend BaseUploader class in service/base-uploader.ts',
      table: {
        type: {
          summary: 'toggles'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'object' }
    },
    selectedToggle: {
      type: { required: false },
      description: 'Value selected',
      table: {
        type: {
          summary: 'selectedToggle'
        },
        defaultValue: { summary: 'First element of toggles' }
      },
      control: { type: 'object' }
    },
    onSelection: {
      type: { required: true },
      description: 'Action triggers when selecting new toggle',
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
  toggles: [{'value':'categories','label':'Categories'},{'value':'products','label':'Products'}],
  selectedToggle: 'categories',
  onSelection: action('onSelection'),
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
