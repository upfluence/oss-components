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
  title: 'Components/OSS::ExpandableBadge',
  component: 'expandable-badge',
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
    expandedLabel: {
      description: 'Label for the expandable badge',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' },
      type: { required: true }
    },
    flag: {
      description: 'Allows passing a Alpha2 country code to display a flag as the icon.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    iconColorClass: {
      description: 'Allows passing a color class to the icon.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    labelColorClass: {
      description: 'Allows passing a color class to the label.',
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
        component:
          'A badge component with the ability to expand to display additional content. On desktop, it expands on hover whereas on mobile, it expands on tap.'
      }
    }
  }
};

const defaultArgs = {
  size: 'md',
  expandedLabel: 'Content',
  icon: undefined,
  image: undefined,
  text: undefined,
  flag: undefined,
  plain: false,
  skin: undefined
};

const Template = (args) => ({
  template: hbs`
    <OSS::ExpandableBadge @expandedLabel={{this.expandedLabel}} @image={{this.image}} @icon={{this.icon}} @text={{this.text}}
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

export const WithFlag = Template.bind({});
WithFlag.args = {
  ...defaultArgs,
  ...{ flag: 'us' }
};

export const WithText = Template.bind({});
WithText.args = {
  ...defaultArgs,
  ...{ text: '2x' }
};
