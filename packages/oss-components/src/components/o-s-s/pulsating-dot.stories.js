import { hbs } from 'ember-cli-htmlbars';

const SkinTypes = ['primary', 'success', 'error', 'warning'];

const Template = (args) => ({
  template: hbs`<OSS::PulsatingDot @skin={{this.skin}} />`,
  context: args
});

const defaultArgs = {
  skin: 'primary'
};

export default {
  title: 'Components/OSS::PulsatingDot',
  component: 'PulsatingDot',
  render: Template,
  args: defaultArgs,
  argTypes: {
    skin: {
      description: 'Adjust the color of the dot and the pulsating animation.',
      table: {
        type: {
          summary: SkinTypes.join('|')
        },
        defaultValue: { summary: 'primary' }
      },
      options: SkinTypes,
      control: { type: 'select' }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'A simple dot that has a pulsating animation.'
      }
    }
  }
};

export const Default = {};
