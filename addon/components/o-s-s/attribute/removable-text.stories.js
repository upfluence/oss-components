import hbs from 'htmlbars-inline-precompile';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/OSS::Attribute::RemovableText',
  component: 'removable-text',
  argTypes: {
    label: {
      description: 'The label of the component.',
      table: {
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' },
      type: { required: true }
    },
    removeTooltip: {
      description: 'Overwrites the default "Remove" tooltip that is visible on component hover',
      table: {
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    onRemove: {
      description:
        'The callback method triggered when a user clicks on the trash icon. It should return a promise which allows the spinner to stop being displayed when needed',
      type: { required: true },
      table: {
        category: 'Actions',
        type: {
          summary: 'onRemove(): Promise<void>'
        }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          'Member of the Attribute displays. The OSS::Attribute::RemovableText displays a label, a value and a remove icon on hover.'
      }
    }
  }
};

const defaultArgs = {
  label: 'City',
  value: 'Paris',
  removeTooltip: undefined,
  onRemove: action('onRemove')
};

const Template = (args) => ({
  template: hbs`
    <div style="padding: 12px; background: white">
      <OSS::Attribute::RemovableText @label={{this.label}} @value={{this.value}}
                                    @removeTooltip={{this.lockTooltip}} @onRemove={{this.onRemove}} />
    </div>
  `,
  context: args
});

export const Default = Template.bind({});
Default.args = defaultArgs;
