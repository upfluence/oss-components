import { hbs } from 'ember-cli-htmlbars';

const Template = (args) => ({
  template: hbs`{{upf-stat name=this.name data=this.data label=this.label}}`,
  context: args
});

const defaultArgs = {
  name: 'Stat',
  data: '80',
  label: 'Label'
};

export default {
  title: 'Components/Stats',
  component: 'upf-stat',
  render: Template,
  args: defaultArgs,
  argTypes: {
    name: {
      description: "Insight's name",
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: 'text'
    },
    data: {
      description: "Insight's value.",
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: 'text'
    },
    label: {
      description: "Insight's label",
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: 'text'
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'Upf stat component'
      },
      iframeHeight: 150
    }
  }
};

export const Default = {};
