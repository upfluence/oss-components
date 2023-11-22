import hbs from 'htmlbars-inline-precompile';

const ProgressBarSkins = ['primary', 'warning', 'success'];

export default {
  title: 'Components/OSS::ProgressBar',
  component: 'progress-bar',
  argTypes: {
    value: {
      type: { required: true },
      description: 'Numbered value between 0 & 100',
      table: {
        type: {
          summary: 'number'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'number' }
    },
    label: {
      description: 'Displayed label',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'Hello' }
      },
      control: { type: 'text' }
    },
    valueIsVisible: {
      description: 'Boolean to check if @value should be displayed on the right side of the bar',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: true }
      },
      control: { type: 'boolean' }
    },
    small: {
      description: 'Boolean to adjust height of progress bar',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: true }
      },
      control: { type: 'boolean' }
    },
    skin: {
      description: 'Adjust appearance',
      table: {
        type: {
          summary: ProgressBarSkins.join('|')
        },
        defaultValue: { summary: 'primary' }
      },
      options: ProgressBarSkins,
      control: { type: 'select' }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'Configurable component that can be used to display progression in a bar'
      }
    }
  }
};

const defaultArgs = {
  value: 30,
  label: 'Hello',
  valueIsVisible: true,
  skin: 'primary',
  small: true
};

const BasicUsageTemplate = (args) => ({
  template: hbs`
      <OSS::ProgressBar @value={{this.value}}
                       @label={{this.label}}
                       @valueIsVisible={{this.valueIsVisible}}
                       @skin={{this.skin}}
                       @small={{this.small}}  />
  `,
  context: args
});

export const Usage = BasicUsageTemplate.bind({});
Usage.args = defaultArgs;
