import hbs from 'htmlbars-inline-precompile';

const PlacementDefinitions = ['bottom', 'top', 'left', 'right'];
const TriggerDefinitions = ['hover focus', 'hover', 'focus'];

export default {
  title: 'Helpers & Modifiers/Modifiers/Tooltip',
  argTypes: {
    title: {
      description: 'The title value',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' },
      type: { required: true }
    },
    subtitle: {
      description: 'The subtitle value',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    icon: {
      description: 'The icon definition',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
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
    triggerValue: {
      name: 'trigger',
      description: 'The trigger definition',
      table: {
        type: {
          summary: TriggerDefinitions.join('|')
        },
        defaultValue: { summary: 'hover focus' }
      },
      options: TriggerDefinitions,
      control: { type: 'select' }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'A modifier to generate a tooltip on a selected target'
      }
    }
  }
};

const DefaultUsageTemplate = (args) => ({
  template: hbs`
    <div class="fx-col" style="justify-content: center; height: 200px; width: 750px; background-color: white">
      <div class="fx-row" style="justify-content: center;">
        <span style="color: var(--color-gray-900)" {{enable-tooltip title=this.title subtitle=this.subtitle icon=this.icon 
                                                                    placement=this.placement trigger=this.triggerValue}}>
          I have a tooltip
        </span>
      </div>
    </div>
  `,
  context: args
});
export const BasicUsage = DefaultUsageTemplate.bind({});
BasicUsage.args = {
  title: 'Title',
  subtitle: 'A very nice subtitle',
  icon: 'far fa-fire',
  placement: 'bottom',
  triggerValue: 'hover focus'
};
