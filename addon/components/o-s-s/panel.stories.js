import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/OSS::Panel',
  component: 'Panel',
  parameters: {
    docs: {
      description: {
        component: 'A Panel component to display links & row components'
      }
    }
  }
};

const Template = (args) => ({
  template: hbs`
    <OSS::Panel
    >
      <:header>
        <span>Header named-block</span>
      </:header>
      <:content>
        <span>Content named-block</span>
      </:content>
      <:footer>
        <span>Footer named-block</span>
      </:footer>
    </OSS::Panel>
  `,
  context: args
});

export const Default = Template.bind({});
