import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/OSS::Panel::Row',
  component: 'Row',
  argTypes: {
    icon: {
      description: 'The icon displayed left to the button label. Font Awesome class, for example: far fa-user',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    label: {
      description: 'The label of the row',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    disabled: {
      description: 'Display disabled state',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: 'false' }
      },
      control: { type: 'boolean' }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'Row component to display within a panel'
      },
      iframeHeight: 120
    }
  }
};

const defaultArgs = {
  label: 'Label',
  icon: 'fa-search',
  disabled: false
};

const Template = (args) => ({
  template: hbs`
    <OSS::Panel>
      <:content>
        <OSS::Panel::Row @label={{this.label}} @icon={{this.icon}} @disabled={{this.disabled}}/>
      </:content>
    </OSS::Panel>
  `,
  context: args
});

export const BasicUsage = Template.bind({});
BasicUsage.args = defaultArgs;
