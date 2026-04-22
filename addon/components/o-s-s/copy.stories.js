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
        defaultValue: { summary: 'far fa-copy' }
      },
      control: { type: 'text' }
    },
    tooltip: {
      type: { name: 'string' },
      description: 'Set the custom tooltip value',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'Copy' }
      },
      control: { type: 'text' }
    },
    withAnimation: {
      type: { name: 'boolean' },
      description: 'Enable green checkmark animation on click (3 second, no toast)',
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
        component: 'Button to copy value to the clipboard'
      },
      iframeHeight: 150
    }
  }
};

const defaultArgs = {
  value: 'Your copied value',
  inline: false,
  icon: undefined,
  tooltip: undefined,
  withAnimation: false
};

const BasicUsageTemplate = (args) => ({
  template: hbs`
    <div class="fx-col">
      <OSS::Copy @value={{this.value}} @inline={{this.inline}} @icon={{this.icon}} @tooltip={{this.tooltip}} @withAnimation={{this.withAnimation}} />
    </div>`,
  context: args
});

export const Default = BasicUsageTemplate.bind({});
Default.args = defaultArgs;

export const WithAnimation = BasicUsageTemplate.bind({});
WithAnimation.args = {
  ...defaultArgs,
  withAnimation: true
};
WithAnimation.parameters = {
  docs: {
    description: {
      story: 'Shows the green checkmark animation on click for 3 seconds. No toast notification is displayed.'
    }
  }
};

export const InlineWithAnimation = BasicUsageTemplate.bind({});
InlineWithAnimation.args = {
  ...defaultArgs,
  inline: true,
  withAnimation: true
};
InlineWithAnimation.parameters = {
  docs: {
    description: {
      story: 'Inline version with the green checkmark animation on click.'
    }
  }
};
