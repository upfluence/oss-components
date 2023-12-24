import { hbs } from 'ember-cli-htmlbars';

const SizeTypes = ['sm', 'md', 'lg'];
const SkinTypes = [
  'primary',
  'success',
  'alert',
  'error',
  'xtd-cyan',
  'xtd-orange',
  'xtd-yellow',
  'xtd-lime',
  'xtd-blue',
  'xtd-violet'
];

export default {
  title: 'Components/OSS::Badge',
  component: 'badge',
  argTypes: {
    size: {
      description: 'Adjust the size of the badge',
      table: {
        type: {
          summary: SizeTypes.join('|')
        },
        defaultValue: { summary: 'md' }
      },
      options: SizeTypes,
      control: { type: 'select' }
    },
    skin: {
      description: 'Adjust the skin of the badge',
      table: {
        type: {
          summary: SkinTypes.join('|')
        },
        defaultValue: { summary: 'undefined' }
      },
      options: SkinTypes,
      control: { type: 'select' }
    },
    plain: {
      description: 'Displays the badge with a plain background',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      control: {
        type: 'boolean'
      }
    },
    icon: {
      description: 'Font Awesome class, for example: far fa-envelope-open',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    image: {
      description: 'URL of an image',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    text: {
      description: 'Text to display inside the badge',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'Displays an icon or an image in a round badge.'
      }
    }
  }
};

const defaultArgs = {
  size: 'md',
  icon: undefined,
  image: undefined,
  text: undefined,
  plain: false,
  skin: undefined
};

const Template = (args) => ({
  template: hbs`
    <OSS::Badge @image={{this.image}} @icon={{this.icon}} @text={{this.text}} @size={{this.size}} @skin={{this.skin}}
                @plain={{this.plain}} />
  `,
  context: args
});

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...defaultArgs,
  ...{ icon: 'fas fa-volume-up' }
};

export const WithImage = Template.bind({});
WithImage.args = {
  ...defaultArgs,
  ...{ image: 'https://images.frandroid.com/wp-content/uploads/2019/11/jony-ive-apple.jpg' }
};

export const WithText = Template.bind({});
WithText.args = {
  ...defaultArgs,
  ...{ text: '2x' }
};
