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
        defaultValue: { summary: true }
      },
      control: { type: 'boolean' }
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          'Member of the Attribute displays. The OSS::Attribute::Text is a component that displays a label, a value & a copy button when needed.'
      },
      iframeHeight: 150
    }
  }
};

const defaultArgs = {
  label: 'Label',
  value: 'Your copied value',
  copyable: true
};

const BasicUsageTemplate = (args) => ({
  template: hbs`
    <div style="padding: 12px; background: white">
      <OSS::Attribute::Text @value={{this.value}} @label={{this.label}} @tooltip={{this.tooltip}}
                            @copyable={{this.copyable}} />
    </div>
  `,
  context: args
});

export const Default = BasicUsageTemplate.bind({});
Default.args = defaultArgs;
