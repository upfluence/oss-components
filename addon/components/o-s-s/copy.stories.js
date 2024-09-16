import { hbs } from 'ember-cli-htmlbars';

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
    },
    inline: {
      type: { name: 'boolean' },
      description: 'Set to true for inline copy',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: false }
      },
      control: { type: 'boolean' }
    },
    icon: {
      type: { name: 'string' },
      description: 'Set the custom icon',
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
  value: 'Your copied value',
  inline: false,
  icon: undefined
};

const BasicUsageTemplate = (args) => ({
  template: hbs`<div class="fx-col"><OSS::Copy @value={{this.value}} @inline={{this.inline}} @icon={{this.icon}}/></div>`,
  context: args
});

export const Default = BasicUsageTemplate.bind({});
Default.args = defaultArgs;
