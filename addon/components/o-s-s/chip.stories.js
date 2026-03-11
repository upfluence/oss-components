import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

const SkinTypes = ['default', 'primary', 'success', 'danger'];

export default {
  title: 'Components/OSS::Chip',
  component: 'chip',
  argTypes: {
    skin: {
      description: 'Adjust appearance',
      table: {
        type: {
          summary: SkinTypes.join('|')
        },
        defaultValue: { summary: 'default' }
      },
      options: SkinTypes,
      control: { type: 'select' }
    },

    label: {
      type: { required: true },
      description: 'Text content of the chip',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' }
      },
      control: {
        type: 'text'
      }
    },

    disabled: {
      description: 'Disabled state of the component',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      control: {
        type: 'boolean'
      }
    },

    maxDisplayWidth: {
      description:
        'Sets the max width of the component. If the label is too long to fit inside, an ellipsis will be shown and a tooltip with the full contents will be available.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'undefined' }
      },
      control: {
        type: 'number'
      }
    },

    onRemove: {
      type: { required: true },
      description: 'A callback triggered when the cross icon has been clicked.',
      table: {
        category: 'Actions',
        type: { summary: 'onRemove(): void' }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'A rounded and colored chip with a label and possibly a prefix and a cross icon to remove the chip.'
      }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/N7SDuH9mvC9zTlsLN49N4L/2.0-UI-Kit-%F0%9F%92%A0?node-id=1142-1255&p=f&t=pVIlyZlo6oyvIQxs-0'
    }
  }
};

const defaultArgs = {
  skin: 'default',
  label: 'Label',
  disabled: false,
  maxDisplayWidth: 0,
  onRemove: action('onRemove')
};

const Template = (args) => ({
  template: hbs`
    <OSS::Chip @skin={{this.skin}} @label={{this.label}} @onRemove={{this.onRemove}} @disabled={{this.disabled}} @maxDisplayWidth={{this.maxDisplayWidth}} />
  `,
  context: args
});

const WithPrefixTemplate = (args) => ({
  template: hbs`
    <OSS::Chip @skin={{this.skin}} @label={{this.label}} @onRemove={{this.onRemove}} @disabled={{this.disabled}} @maxDisplayWidth={{this.maxDisplayWidth}}>
      <:prefix>
        <OSS::Icon @icon="fa-check" />
      </:prefix>
    </OSS::Chip>
  `,
  context: args
});

export const Default = Template.bind({});
Default.args = defaultArgs;

export const UsageWithPrefix = WithPrefixTemplate.bind({});
UsageWithPrefix.args = defaultArgs;
