import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/OSS::ScrollablePanel',
  component: 'scrollable-panel',
  argTypes: {
    plain: {
      description: 'When plain is true, the top and bottom shadows are displayed in white, otherwise in grey',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      control: {
        type: 'boolean'
      }
    },
    disableShadows: {
      description: 'When disableShadows is true, the top and bottom shadows are not displayed',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      control: {
        type: 'boolean'
      }
    },
    onBottomReached: {
      description: 'Function to be called when the scroll hits the bottom',
      table: {
        category: 'Actions',
        type: {
          summary: 'onBottomReached(): void'
        }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'Container which automatically handle scroll behavior with top and bottom shadow'
      }
    }
  }
};

const defaultArgs = {
  plain: false,
  disableShadows: false,
  onBottomReached: action('onBottomReached')
};

const Template = (args) => ({
  template: hbs`
    <div style="height:200px; width: 300px; background-color: white; " >
      <OSS::ScrollablePanel @plain={{this.plain}} @disableShadows={{this.disableShadows}} @onBottomReached={{this.onBottomReached}} >
        <div class="fx-col fx-gap-px-12 padding-px-12">
          <div class="background-color-gray-200" style="height: 50px; width: 100%;" />
          <div class="background-color-gray-200" style="height: 50px; width: 100%;" />
          <div class="background-color-gray-200" style="height: 50px; width: 100%;" />
          <div class="background-color-gray-200" style="height: 50px; width: 100%;" />
          <div class="background-color-gray-200" style="height: 50px; width: 100%;" />
        </div>
      </OSS::ScrollablePanel>
    </div>
  `,

  context: args
});

export const BasicUsage = Template.bind({});
BasicUsage.args = defaultArgs;
