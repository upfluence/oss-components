import { hbs } from 'ember-cli-htmlbars';

const PlacementDefinitions = [
  'bottom',
  'top',
  'left',
  'right',
  'bottom-start',
  'top-start',
  'left-start',
  'right-start',
  'bottom-end',
  'top-end',
  'left-end',
  'right-end'
];

export default {
  title: 'Helpers & Modifiers/Modifiers/Attach Element/Definition',
  argTypes: {
    placement: {
      description: 'The placement definition',
      table: {
        type: {
          summary: PlacementDefinitions.join('|')
        },
        defaultValue: { summary: 'bottom' }
      },
      options: PlacementDefinitions,
      control: { type: 'select' }
    },
    offset: {
      description: 'Distance between the attached element and the reference element',
      table: {
        type: {
          summary: 'number'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'number' }
    },
    width: {
      description: 'Width of the attached element',
      table: {
        type: {
          summary: 'number'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'number' }
    },
    maxHeight: {
      description: 'Max-Height of the attached element',
      table: {
        type: {
          summary: 'number'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'number' }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'A modifier to attach a floating element to another'
      }
    }
  }
};

const DefaultUsageTemplate = (args) => ({
  template: hbs`
    <div class="fx-col" style="justify-content: center; height: 500px; width: 750px; background-color: white">
      <div class="fx-row" style="justify-content: center;">
        <span style="color: var(--color-gray-900)" class="attached-element-reference">
          I am the reference element
        </span>

        <div style="background-color: var(--color-primary-500); color: var(--color-white); position: absolute;" {{attach-element to=".attached-element-reference" placement=this.placement}}>
          Floating element
        </div>
      </div>
    </div>
  `,
  context: args
});
export const BasicUsage = DefaultUsageTemplate.bind({});
BasicUsage.args = {
  placement: 'bottom',
  offset: null,
  width: null,
  maxHeight: null
};
