import { hbs } from 'ember-cli-htmlbars';

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
    },
    loading: {
      description: 'Display loading state',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: 'false' }
      },
      control: { type: 'boolean' }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'An avatar component that can display an image or initials, and has a loading state.'
      },
      iframeHeight: 120
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/N7SDuH9mvC9zTlsLN49N4L/2.0-UI-Kit-%F0%9F%92%A0?node-id=1134-326&p=f&t=pVIlyZlo6oyvIQxs-0'
    }
  }
};

const defaultArgs = {
  size: 'md',
  image: undefined,
  initials: undefined,
  loading: false
};

const Template = (args) => ({
  template: hbs`
    <OSS::Avatar @image={{this.image}} @initials={{this.initials}} @size={{this.size}} @loading={{this.loading}} />
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
