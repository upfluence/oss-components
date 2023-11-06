import hbs from 'htmlbars-inline-precompile';
import { action } from '@storybook/addon-actions';

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
  onSave: action('onSave'),
  onCancel: action('onCancel'),
  onEdit: action('onEdit')
};

const DefaultUsageTemplate = (args) => ({
  template: hbs`
    <div style="width: 350px; background-color: var(--color-gray-50); padding: var(--spacing-px-24);">
      <OSS::AttributesPanel @title={{this.title}} @icon={{this.icon}} @onSave={{this.onSave}}
                            @onCancel={{this.onCancel}} @onEdit={{this.onEdit}} @isSaveDisabled={{this.isSaveDisabled}} >
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
                            @onCancel={{this.onCancel}} @onEdit={{this.onEdit}} @isSaveDisabled={{this.isSaveDisabled}}>
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
