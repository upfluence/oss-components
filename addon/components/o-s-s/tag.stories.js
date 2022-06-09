import hbs from 'htmlbars-inline-precompile';

const SkinTypes = ['primary', 'success', 'warning', 'danger', 'secondary'];

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
        defaultValue: { summary: 'regular' }
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
      description: 'Font Awesome class, for example',
      table: {
        type: { summary: 'far fa-envelope-open | fas fa-volume-up' },
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
    }
  }
};

const defaultArgs = {
  skin: 'default',
  label: 'Label',
  icon: 'far fa-thumbs-up',
  hasEllipsis: 'false'
};

const Template = (args) => ({
  template: hbs`
    <div style="padding: 2em; {{if (eq this.theme 'dark') 'background-color: #060666'}}">
    <OSS::Tag @skin={{this.skin}} @label={{this.label}} @icon={{this.icon}} @hasEllipsis={{this.hasEllipsis}}/>
    </div>
  `,
  context: args
});

export const Default = Template.bind({});
Default.args = {
  ...defaultArgs
};
