import { hbs } from 'ember-cli-htmlbars';

const DirectionTypes = ['row', 'col', 'column'];

export default {
  title: 'Components/OSS::Smart::Skeleton',
  component: 'smart-skeleton',
  argTypes: {
    height: {
      description: 'Box height in px',
      table: {
        type: {
          summary: 'number'
        },
        defaultValue: { summary: '36' }
      },
      control: { type: 'number' }
    },
    width: {
      description: 'Box width in px',
      table: {
        type: {
          summary: 'number'
        },
        defaultValue: { summary: '36' }
      },
      control: { type: 'number' }
    },
    multiple: {
      description: 'How many skeleton effects should be displayed',
      table: {
        type: {
          summary: 'number'
        },
        defaultValue: { summary: '1' }
      },
      control: { type: 'number' }
    },
    gap: {
      description: 'Gap between multiple rows in px',
      table: {
        type: {
          summary: 'number'
        },
        defaultValue: { summary: '9' }
      },
      control: { type: 'number' }
    },
    randomize: {
      description: 'Randomize skeleton effect width within a 15% range',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: false }
      },
      control: { type: 'boolean' }
    },
    direction: {
      description: 'Direction of the skeleton',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'row' }
      },
      options: DirectionTypes,
      control: { type: 'select' }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'Component used to create a smart skeleton effect.'
      },
      iframeHeight: 250
    }
  }
};

const defaultArgs = {
  height: 200,
  width: 300,
  multiple: 1,
  gap: 9,
  randomize: false
};

const Template = (args) => ({
  template: hbs`
    <div class="bg-color-white padding-px-6">
      <OSS::Smart::Skeleton @height={{this.height}} @width={{this.width}} @multiple={{this.multiple}} @gap={{this.gap}}
                     @direction={{this.direction}}
                     @randomize={{this.randomize}}/>
    </div>
  `,
  context: args
});

export const Default = Template.bind({});
Default.args = defaultArgs;
