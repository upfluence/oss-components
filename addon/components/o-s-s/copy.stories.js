import hbs from 'htmlbars-inline-precompile';

export default {
  title: 'Components/OSS::Copy',
  component: 'copy',
  argTypes: {
    value: {
      type: { required: true },
      description: 'The value to copy value in clipboard',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'Button to copy value to the clipboard'
      },
      iframeHeight: 150
    }
  }
};

const defaultArgs = {
  value: 'Your copied value'
};

const BasicUsageTemplate = (args) => ({
  template: hbs`<div class="fx-col"><OSS::Copy @value={{this.value}} /></div>`,
  context: args
});

export const Default = BasicUsageTemplate.bind({});
Default.args = defaultArgs;
