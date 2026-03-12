import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/OSS::RadioButton',
  component: 'radio-button',
  argTypes: {
    selected: {
      description: 'Whether the radio-button is selected or not',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      control: { type: 'boolean' }
    },
    disabled: {
      description: 'Optional - defines whether the radio-button is in a disabled state or not',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      control: { type: 'boolean' }
    },
    onChange: {
      description: 'A callback that sends the new value of the radio-button.',
      table: {
        category: 'Actions',
        type: {
          summary: 'onChange?(value: boolean): void'
        }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'An OSS version of the radio-button component.'
      }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/N7SDuH9mvC9zTlsLN49N4L/2.0-UI-Kit-%F0%9F%92%A0?node-id=8613-473116&p=f&t=pVIlyZlo6oyvIQxs-0'
    }
  }
};

const defaultArgs = {
  selected: false,
  disabled: false,
  onChange: action('onChange')
};

const Template = (args) => ({
  template: hbs`
      <OSS::RadioButton @selected={{this.selected}} @disabled={{this.disabled}} @onChange={{this.onChange}}/>
  `,
  context: args
});

export const BasicUsage = Template.bind({});
BasicUsage.args = defaultArgs;
