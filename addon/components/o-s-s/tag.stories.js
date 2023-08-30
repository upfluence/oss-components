import hbs from 'htmlbars-inline-precompile';

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
      description: 'Font Awesome class, for example: far fa-envelope-open',
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
    }
  }
};

const defaultArgs = {
  skin: 'primary',
  label: 'Label',
  icon: 'far fa-thumbs-up',
  hasEllipsis: false
};

const Template = (args) => ({
  template: hbs`
    <OSS::Tag @skin={{this.skin}} @label={{this.label}} @icon={{this.icon}} @hasEllipsis={{this.hasEllipsis}}/>
  `,
  context: args
});

export const Default = Template.bind({});
Default.args = defaultArgs;
