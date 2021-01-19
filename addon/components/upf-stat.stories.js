import hbs from 'htmlbars-inline-precompile';
import UpfStat from './upf-stat';

export default {
  title: 'Components/Stats',
  component: UpfStat,
  args : {
    name: 'Stat',
    data: '80',
    label: 'Label'
  },
  argTypes: {
    name: {
      description: "Insight's name",
      control: 'text'
    },
    data: {
      description: "Insight's value.",
      control: 'text'
    },
    label: {
      description: "Insight's label",
      control: 'text'
    }
  },
  parameters: {
    docs: {
      iframeHeight: 400
    }
  }
}

export let Default = (args) => {
  return {
    template: hbs`{{upf-stat name=name data=data label=label}}`,
    context: {
      ...args
    }
  }
}
