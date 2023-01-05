import hbs from 'htmlbars-inline-precompile';

export default {
  title: 'Components/Stats',
  component: 'upf-stat',
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

const defaultArgs = {
  name: 'Stat',
  data: '80',
  label: 'Label'
};
const Template = (args) => ({
  template: hbs`{{upf-stat name=this.name data=this.data label=this.label}}`,
  context: args
});

export const Default = Template.bind({});
Default.args = defaultArgs;
