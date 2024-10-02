import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/OSS::ScrollablePanel',
  component: 'scrollable-panel',
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: 'Container which automatically handle scroll behavior with top and bottom shadow'
      }
    }
  }
};

const defaultArgs = {};

const Template = (args) => ({
  template: hbs`
      <div style="height:200px; width: 300px; background-color: white; " >
        <OSS::ScrollablePanel>
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
