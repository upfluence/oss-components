import hbs from 'htmlbars-inline-precompile';

const SizeTypes = ['xs', 'sm', 'md', 'lg'];

export default {
  title: 'Components/OSS::Avatar',
  component: 'avatar',
  argTypes: {
    size: {
      description: 'Adjust the size of the avatar component',
      table: {
        type: {
          summary: SizeTypes.join('|')
        },
        defaultValue: { summary: 'md' }
      },
      options: SizeTypes,
      control: { type: 'select' }
    },
    image: {
      description: 'URL of an image',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: {
        type: 'text'
      }
    },
    initials: {
      description: 'Initials to display inside the avatar component',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: {
        type: 'text'
      }
    }
  }
};

const defaultArgs = {
  size: 'md',
  image: undefined,
  initials: undefined
};

const Template = (args) => ({
  template: hbs`
    <OSS::Avatar @image={{this.image}} @initials={{this.initials}} @size={{this.size}} />
  `,
  context: args
});

export const WithImage = Template.bind({});
WithImage.args = {
  ...defaultArgs,
  ...{ image: 'https://images.frandroid.com/wp-content/uploads/2019/11/jony-ive-apple.jpg' }
};

export const WithInitials = Template.bind({});
WithInitials.args = {
  ...defaultArgs,
  ...{ initials: 'TS' }
};

export const WithoutParam = Template.bind({});
WithoutParam.args = defaultArgs;
