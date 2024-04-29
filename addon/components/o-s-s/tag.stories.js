import { hbs } from 'ember-cli-htmlbars';

const SkinTypes = [
  'primary',
  'primary-gradient',
  'success',
  'warning',
  'danger',
  'secondary',
  'xtd-orange',
  'xtd-cyan',
  'xtd-yellow',
  'xtd-blue',
  'xtd-violet',
  'xtd-lime',
  'chat-gpt'
];
const Sizes = [null, 'xs'];

export default {
  title: 'Components/OSS::Tag',
  component: 'tag',
  argTypes: {
    skin: {
      description: 'Adjust appearance',
      table: {
        type: {
          summary: SkinTypes.join('|')
        },
        defaultValue: { summary: 'primary' }
      },
      options: SkinTypes,
      control: { type: 'select' }
    },
    size: {
      description: 'Adjust size',
      table: {
        type: {
          summary: Sizes.join('|')
        },
        defaultValue: { summary: 'undefined' }
      },
      options: Sizes,
      control: { type: 'select' }
    },
    label: {
      description: 'Text content of the tag',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' }
      },
      control: {
        type: 'text'
      }
    },
    icon: {
      description: 'Icon placed before the label if any. Font Awesome class, for example: far fa-envelope-open',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' }
      },
      control: {
        type: 'text'
      }
    },
    suffixIcon: {
      description: 'Icon placed after the label if any. Font Awesome class, for example: far fa-envelope-open',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' }
      },
      control: {
        type: 'text'
      }
    },
    hasEllipsis: {
      description: 'Text wrapping when width > 80px',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      control: {
        type: 'boolean'
      }
    },
    plain: {
      description: 'Whether to use the plain style or not',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      control: {
        type: 'boolean'
      }
    },
    htmlSafe: {
      description: "Allows html code to be passed in the @label argument. Bypasses the tag's default styling.",
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      control: {
        type: 'boolean'
      }
    }
  }
};

const defaultArgs = {
  skin: 'primary',
  label: 'Label',
  icon: 'far fa-thumbs-up',
  suffixIcon: null,
  hasEllipsis: false,
  plain: false,
  htmlSafe: false,
  size: undefined
};

const Template = (args) => ({
  template: hbs`
    <OSS::Tag @skin={{this.skin}} @label={{this.label}} @icon={{this.icon}} @hasEllipsis={{this.hasEllipsis}}
              @plain={{this.plain}} @htmlsafe={{this.htmlSafe}} @size={{this.size}} @suffixIcon={{this.suffixIcon}} />
  `,
  context: args
});

export const Default = Template.bind({});
Default.args = defaultArgs;
