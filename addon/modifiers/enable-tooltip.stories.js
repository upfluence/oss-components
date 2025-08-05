import { hbs } from 'ember-cli-htmlbars';

const PlacementDefinitions = ['bottom', 'top', 'left', 'right'];
const TriggerDefinitions = ['hover focus', 'hover', 'focus'];

export default {
  title: 'Helpers & Modifiers/Modifiers/Tooltip/Definition',
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
    },
    displayOnlyOnOverflow: {
      name: 'displayOnlyOnOverflow',
      description: 'Enables the tooltip on hover only when the container is to small to display the full text.',
      table: {
        type: {
          summary: 'false'
        },
        defaultValue: { summary: 'false' }
      },
      control: { type: 'boolean' }
    },
    disableOnMobile: {
      name: 'disableOnMobile',
      description: 'Disables the tooltip on mobile.',
      table: {
        type: {
          summary: 'false'
        },
        defaultValue: { summary: 'false' }
      },
      control: { type: 'boolean' }
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
const defaultArgs = {
  title: 'Title',
  subtitle: 'A very nice subtitle',
  icon: 'far fa-fire',
  placement: 'bottom',
  triggerValue: 'hover focus',
  displayOnlyOnOverflow: false,
  disableOnMobile: false
};

const DefaultUsageTemplate = (args) => ({
  template: hbs`
    <div class="fx-col" style="justify-content: center; height: 200px; width: 750px; background-color: white">
      <div class="fx-row" style="justify-content: center;">
        <span style="color: var(--color-gray-900)" {{enable-tooltip title=this.title subtitle=this.subtitle icon=this.icon
                                                                    placement=this.placement trigger=this.triggerValue
                                                                    displayOnlyOnOverflow=this.displayOnlyOnOverflow
                                                                    disableOnMobile=this.disableOnMobile}}>
          I have a tooltip
        </span>
      </div>
    </div>
  `,
  context: args
});

const OverflowUsageTemplate = (args) => ({
  template: hbs`
    <div class="fx-col" style="justify-content: center; height: 200px; width: 750px; background-color: white">
      <div class="fx-row" style="justify-content: center;">
        <span class="text-ellipsis-160" style="color: var(--color-gray-900)" {{enable-tooltip title=this.title subtitle=this.subtitle icon=this.icon
                                                                    placement=this.placement trigger=this.triggerValue
                                                                    displayOnlyOnOverflow=this.displayOnlyOnOverflow}}>
          I have a very very very long content to display a tooltip
        </span>
      </div>
    </div>
  `,
  context: args
});

export const BasicUsage = DefaultUsageTemplate.bind({});
BasicUsage.args = defaultArgs;

export const OverflowUsage = OverflowUsageTemplate.bind({});
OverflowUsage.args = defaultArgs;
