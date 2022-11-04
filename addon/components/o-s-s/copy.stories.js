import hbs from 'htmlbars-inline-precompile';

export default {
  title: 'Components/OSS::Copy',
  component: 'copy',
  argTypes: {
    value: {
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
      }
    }
  }
};

const BasicUsageTemplate = (args) => ({
  template: hbs`<OSS::Copy @value={{this.value}} />`,
  context: args
});

export const Default = BasicUsageTemplate.bind({});
Default.args = {
  value: 'Copied to clipboard!'
};
