import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/OSS::ContentPanel',
  component: 'code-panel',
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: 'Used to display content in pages with default styling.'
      }
    }
  }
};

const defaultArgs = {};

const BasicUsageTemplate = (args) => ({
  template: hbs`
    <div class="font-color-black">
      <OSS::ContentPanel class="fx-col fx-1">
        <span>Content</span>
        <span>Goes here</span>
      </OSS::ContentPanel>
    </div>
  `,
  context: args
});

export const BasicUsage = BasicUsageTemplate.bind({});
BasicUsage.args = defaultArgs;
