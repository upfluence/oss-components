import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

const MODES = ['view', 'edition'];

export default {
  title: 'Components/OSS::AttributesPanel',
  component: 'attributes-panel',
  argTypes: {
    title: {
      description: 'The title of the panel',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' },
      type: { required: true }
    },
    icon: {
      description: 'The icon rendered next to the title',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    customEditIcon: {
      description: 'The icon rendered inside the button to switch to edit mode',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'fa-pen' }
      },
      control: { type: 'text' }
    },
    isSaveDisabled: {
      description: 'If the save button is disabled or not',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'boolean' }
    },
    initialMode: {
      description: 'Allows setting the initial mode of the component. Can be either "edition" or "view"',
      table: {
        type: {
          summary: MODES.join('|')
        },
        defaultValue: { summary: 'undefined' }
      },
      options: MODES,
      control: { type: 'select' }
    },
    onSave: {
      description: 'A callback sent when the saved button is pressed',
      table: {
        category: 'Actions',
        type: {
          summary: 'onSave(): Promise<void>'
        }
      },
      type: { required: true }
    },
    onEdit: {
      description: 'A callback sent when the edit button is pressed',
      table: {
        category: 'Actions',
        type: {
          summary: 'onEdit?(): void'
        }
      }
    },
    onCancel: {
      description: 'A callback sent when the cancel button is pressed',
      table: {
        category: 'Actions',
        type: {
          summary: 'onCancel?(): void'
        }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          'A component meant to display OSS::Attributes. It has 2 modes: a view panel where information will be read-only and an edit mode where the information will be editable.'
      }
    }
  }
};

const defaultArgs = {
  title: 'Title',
  icon: 'fa-laptop-code',
  isSaveDisabled: false,
  customEditIcon: 'fa-pen',
  initialMode: 'view',
  onSave: action('onSave'),
  onCancel: action('onCancel'),
  onEdit: action('onEdit')
};

const DefaultUsageTemplate = (args) => ({
  template: hbs`
    <div style="width: 350px; background-color: var(--color-gray-50); padding: var(--spacing-px-24);">
      <OSS::AttributesPanel @title={{this.title}} @icon={{this.icon}} @onSave={{this.onSave}}
                            @onCancel={{this.onCancel}} @onEdit={{this.onEdit}} @isSaveDisabled={{this.isSaveDisabled}}
                            @customEditIcon={{this.customEditIcon}} @initialMode={{this.initialMode}}>
          <:view-mode>
            View mode
          </:view-mode>
          <:edition-mode>
            Edition mode
          </:edition-mode>
        </OSS::AttributesPanel>
      </div>
  `,
  context: args
});

const WithContextualActionTemplate = (args) => ({
  template: hbs`
    <div style="width: 350px; background-color: var(--color-gray-50); padding: var(--spacing-px-24);">
      <OSS::AttributesPanel @title={{this.title}} @icon={{this.icon}} @onSave={{this.onSave}}
                            @onCancel={{this.onCancel}} @onEdit={{this.onEdit}} @isSaveDisabled={{this.isSaveDisabled}}
                            @customEditIcon={{this.customEditIcon}} @initialMode={{this.initialMode}}>
          <:contextual-action>
            <OSS::Button @icon="fa-plus" @square={{true}} />
          </:contextual-action>
          <:view-mode>
            View mode
          </:view-mode>
          <:edition-mode>
            Edition mode
          </:edition-mode>
        </OSS::AttributesPanel>
      </div>
  `,
  context: args
});

export const BasicUsage = DefaultUsageTemplate.bind({});
BasicUsage.args = defaultArgs;

export const WithContextualAction = WithContextualActionTemplate.bind({});
WithContextualAction.args = defaultArgs;
