import hbs from 'htmlbars-inline-precompile';

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
  <div class="background-color-white padding-px-6">
    <OSS::Panel
    >
      <:header>
        <h2>Header</h2>
      </:header>
      <:content>
        <h2>Content</h2>
      </:content>
      <:footer>
        <h2>Footer</h2>
      </:footer>
    </OSS::Panel>
  </div>
  `,
  context: args
});

export const Default = Template.bind({});
