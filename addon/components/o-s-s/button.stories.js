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
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' }
      },
      control: {
        type: 'text'
      }
    },
    icon: {
      description: 'Font Awesome class, for exemple',
      table: {
        type: { summary: 'far fa-envelope-open | fas fa-volume-up' },
        defaultValue: { summary: 'undefined' }
      },
      control: {
        type: 'text'
      }
    }
  }
};

const defaultArgs = {
  skin: 'default',
  size: null,
  loading: false,
  label: 'Label',
  icon: 'far fa-envelope-open'
};

const Template = (args) => ({
  template: hbs`
    <OSS::Button @skin={{this.skin}} @size={{this.size}} @loading={{this.loading}} @label={{this.label}} @icon={{this.icon}} />
  `,
  context: args
});

export const Default = Template.bind({});
Default.args = {
  ...defaultArgs
};
