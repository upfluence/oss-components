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
        <OSS::Panel::Row @label="Header named-block" @icon="fa-cog" />
      </:header>
      <:content>
        <OSS::Panel::Row @label="Content named-block" @icon="fa-search" />
      </:content>
      <:footer>
        <OSS::Panel::Row @label="Footer named-block" @icon="fa-sign-out" @disabled={{true}} />
      </:footer>
    </OSS::Panel>
  `,
  context: args
});

export const Default = Template.bind({});
