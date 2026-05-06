import { hbs } from 'ember-cli-htmlbars';

const ProgressBarSkins = ['warning', 'success', 'danger'];
const ProgressBarSizes = ['xs', 'sm'];

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
    size: {
      description: 'Adjust size',
      table: {
        type: {
          summary: ProgressBarSizes.join('|')
        }
      },
      options: ProgressBarSizes,
      control: { type: 'select' }
    },
    skin: {
      description: 'Adjust appearance',
      table: {
        type: {
          summary: ProgressBarSkins.join('|')
        }
      },
      options: ProgressBarSkins,
      control: { type: 'select' }
    },
    coloredBackground: {
      description: 'Shows a lighter colored background matching the selected skin.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: undefined }
      },
      control: { type: 'boolean' }
    },
    secondarySkin: {
      description: 'Set the secondary skin to be used for the progress bar.',
      table: {
        type: {
          summary: ProgressBarSkins.join('|')
        }
      },
      options: ProgressBarSkins,
      control: { type: 'select' }
    },
    skins: {
      description:
        'Sets the multiple skins to be used for the progress bar. Sum of all values must be between 0 and 100 included. E.g { warning: 20, danger: 20, success: 40 } or { pending: 30 }',
      table: {
        type: {
          summary: '{ pending?: number, success?: number, warning?: number, danger?: number }'
        },
        defaultValue: { summary: undefined }
      },
      control: {
        type: 'object'
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'Configurable component that can be used to display progression in a bar'
      }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/N7SDuH9mvC9zTlsLN49N4L/2.0-UI-Kit-%F0%9F%92%A0?node-id=9252-80010&p=f&t=AsdGbaychQPIaGnK-0'
    }
  }
};

const defaultArgs = {
  value: 30,
  label: 'Hello',
  displayValue: true,
  coloredBackground: false,
  secondarySkin: undefined,
  skins: undefined
};

const BasicUsageTemplate = (args) => ({
  template: hbs`
    <div style="background-color: #1c1c1c;width:200px">
      <OSS::ProgressBar
        @value={{this.value}}
        @label={{this.label}}
        @displayValue={{this.displayValue}}
        @skin={{this.skin}}
        @size={{this.size}}
        @coloredBackground={{this.coloredBackground}}
        @secondarySkin={{this.secondarySkin}}
        @skins={{this.skins}}
      />
    </div>
  `,
  context: args
});

export const Usage = BasicUsageTemplate.bind({});
Usage.args = defaultArgs;
