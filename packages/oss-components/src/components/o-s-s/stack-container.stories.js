import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/OSS::StackContainer',
  component: 'stack-container',
  argTypes: {
    direction: {
      description: 'Whether the stack is displayed in a column or row. Default is row.',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'row' }
      },
      options: ['row', 'column'],
      control: { type: 'select' }
    },
    style: {
      description: 'Whether to display the next items under the previous ones or over. Default is under.',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'under' }
      },
      options: ['under', 'over'],
      control: { type: 'select' }
    },
    pxMargin: {
      description:
        'Horizontal margin between items in the stack. The passed value is always transformed to be negative. Default is -6px',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: '-6px' }
      },
      control: { type: 'text' }
    },
    bringToFrontOnHover: {
      description: 'Whether to bring the hovered item to the front. Default is false.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: false }
      },
      control: { type: 'boolean' }
    },
    subElementClass: {
      description: 'Class to be applied to each sub-element in the stack.',
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
        component:
          'A stack container component that allows stacking elements in a row or column with customizable styles.'
      }
    }
  }
};

const defaultArgs = {
  direction: 'row',
  style: 'under',
  pxMargin: '-6px',
  bringToFrontOnHover: false,
  subElementClass: undefined
};

const DefaultUsageTemplate = (args) => ({
  template: hbs`
    <OSS::StackContainer
      @direction={{this.direction}}
      @style={{this.style}}
      @pxMargin={{this.pxMargin}}
      @bringToFrontOnHover={{this.bringToFrontOnHover}}
      @subElementClass={{this.subElementClass}}
    >
      <div class="stack-item" style="border-radius: 8px; color: black; background-color: white; border: 1px solid blue">Item 1</div>
      <div class="stack-item" style="border-radius: 8px; color: black; background-color: pink; border: 1px solid blue">Item 2</div>
      <div class="stack-item" style="border-radius: 8px; color: black; background-color: yellow; border: 1px solid blue">Item 3</div>
    </OSS::StackContainer>
  `,
  context: args
});

export const BasicUsage = DefaultUsageTemplate.bind({});
BasicUsage.args = defaultArgs;
