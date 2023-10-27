import hbs from 'htmlbars-inline-precompile';

export default {
  title: 'Components/OSS::Attribute::Text',
  component: 'text',
  argTypes: {
    label: {
      type: { required: true },
      description: 'The value of the label',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    value: {
      description: 'The value of the field',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    tooltip: {
      description: 'The value of the tooltip',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    copyable: {
      type: { name: 'boolean' },
      description: 'Set to true to enable copy',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: false }
      },
      control: { type: 'boolean' }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'A text component designed to have a label, a value & a copy value button'
      },
      iframeHeight: 150
    }
  }
};

const defaultArgs = {
  label: 'Label',
  value: 'Your copied value'
};

const BasicUsageTemplate = (args) => ({
  template: hbs`<div class="fx-col"><OSS::Attribute::Text @value={{this.value}} @label={{this.label}} @tooltip={{this.tooltip}} @copyable={{this.copyable}} /></div>`,
  context: args
});

export const Default = BasicUsageTemplate.bind({});
Default.args = defaultArgs;
