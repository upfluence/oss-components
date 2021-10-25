import hbs from 'htmlbars-inline-precompile';

const SkinTypes = ['default', 'primary', 'secondary', 'destructive', 'instagram', 'facebook', 'youtube'];
const SizeTypes = ['xs', 's'];

export default {
  title: 'Components/OSS::Button',
  component: 'button',
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
    size: {
      description: 'Adjust size',
      table: {
        type: {
          summary: SizeTypes.join('|')
        },
        defaultValue: { summary: 'null' }
      },
      options: SizeTypes,
      control: { type: 'select' }
    },
    loading: {
      description: 'Display loading state',
      table: {
        type: {
          summary: 'true | false'
        },
        defaultValue: { summary: 'false' }
      }
    },
    label: {
      description: 'Text content of the button',
      control: false
    }
  }
};

const defaultArgs = {
  skin: 'default',
  size: null,
  loading: false
};

const Template = (args) => ({
  template: hbs`
    <OSS::Button @skin={{this.skin}} @size={{this.size}} @loading={{this.loading}} @label="Label" />
  `,
  context: args
});

export const Default = Template.bind({});
Default.args = {
  ...defaultArgs
};

const IconOnlyTemplate = (args) => ({
  template: hbs`
    <OSS::Button @skin={{this.skin}} @size={{this.size}} @loading={{this.loading}} @icon="fab fa-facebook-f" />
  `,
  context: args
});
export const IconOnly = IconOnlyTemplate.bind({});
IconOnly.args = {
  ...defaultArgs
};

const IconAndLabelTemplate = (args) => ({
  template: hbs`
    <OSS::Button @skin={{this.skin}} @size={{this.size}} @loading={{this.loading}} @icon="fab fa-facebook-f" @label="Facebook"/>
  `,
  context: args
});
export const IconAndLabel = IconAndLabelTemplate.bind({});
IconOnly.args = {
  ...defaultArgs
};
