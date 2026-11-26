import { hbs } from 'ember-cli-htmlbars';

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

const defaultArgs = {};

export default {
  title: 'Components/OSS::ContentPanel',
  component: 'code-panel',
  render: BasicUsageTemplate,
  args: defaultArgs,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: 'Used to display content in pages with default styling.'
      }
    }
  }
};

export const BasicUsage = {};
