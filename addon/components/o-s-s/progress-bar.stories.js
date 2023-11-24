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
        defaultValue: { summary: 42 }
      },
      control: { type: 'number' }
    },
    label: {
      description: 'Displayed label',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: undefined }
      },
      control: { type: 'text' }
    },
    displayValue: {
      description: 'Boolean to check if @value should be displayed on the right side of the bar',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: undefined }
      },
      control: { type: 'boolean' }
    },
    small: {
      description: 'If true, the height will be 4px. The default height is 10px',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: 'undefined' }
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
  displayValue: true,
  skin: 'primary',
  small: true
};

const BasicUsageTemplate = (args) => ({
  template: hbs`
    <div style="background-color: #1c1c1c;width:200px">
      <OSS::ProgressBar 
        @value={{this.value}}
        @label={{this.label}}
        @displayValue={{this.displayValue}}
        @skin={{this.skin}}
        @small={{this.small}}  />
    </div>
  `,
  context: args
});

export const Usage = BasicUsageTemplate.bind({});
Usage.args = defaultArgs;
