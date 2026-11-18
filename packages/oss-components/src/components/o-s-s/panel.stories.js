import { hbs } from 'ember-cli-htmlbars';

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

export default {
  title: 'Components/OSS::Panel',
  component: 'Panel',
  render: Template,
  parameters: {
    docs: {
      description: {
        component: 'A Panel component to display links & row components'
      }
    }
  }
};

export const Default = {};
