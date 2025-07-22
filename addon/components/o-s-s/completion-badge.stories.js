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
  'xtd-violet',
  'xtd-smart'
];

export default {
  title: 'Components/OSS::CompletionBadge',
  component: 'completion-badge',
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
    },
    progress: {
      description: 'Progress percentage to display around the badge',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' }
      },
      control: { type: 'number' }
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          'A badge component that displays a progress ring around the badge content. It can be used to indicate completion status or progress of a task.'
      }
    }
  }
};

const defaultArgs = {
  progress: 42,
  size: 'md',
  icon: undefined,
  image: undefined,
  text: undefined,
  plain: false,
  skin: undefined
};

const Template = (args) => ({
  template: hbs`
    <OSS::CompletionBadge @progress={{this.progress}} @image={{this.image}} @icon={{this.icon}} @text={{this.text}}
                          @flag={{this.flag}} @size={{this.size}} @skin={{this.skin}} @plain={{this.plain}} />
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
  ...{ image: '/@upfluence/oss-components/assets/heart.svg' }
};

export const WithText = Template.bind({});
WithText.args = {
  ...defaultArgs,
  ...{ text: '2x' }
};
