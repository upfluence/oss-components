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
      description: 'A callback sent when the edition button is pressed',
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
        component: 'A component composed of the 2 modes, one for the view and another for the edition'
      }
    }
  }
};

const defaultArgs = {
  title: 'Title',
  icon: 'fa-laptop-code',
  onSave: action('onSave'),
  onCancel: action('onCancel'),
  onEdit: action('onEdit')
};

const DefaultUsageTemplate = (args) => ({
  template: hbs`
    <div style="width: 350px; background-color: var(--color-gray-50); padding: var(--spacing-px-24);">
      <OSS::AttributesPanel @title={{this.title}} @icon={{this.icon}} @onSave={{this.onSave}}
                            @onCancel={{this.onCancel}} @onEdit={{this.onEdit}}>
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
                            @onCancel={{this.onCancel}} @onEdit={{this.onEdit}}>
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
