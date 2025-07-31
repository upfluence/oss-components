import { hbs } from 'ember-cli-htmlbars';

const Sizes = ['sm', 'md'];

export default {
  title: 'Components/OSS::TIP',
  component: 'tip',
  argTypes: {
    label: {
      description: 'Text content of the tip',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' },
      type: { required: true }
    },
    active: {
      description: 'Applies a blue background to the tip',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      control: { type: 'boolean' },
      type: { required: true }
    },
    icon: {
      description: 'Icon placed before the tip if any. Font Awesome class, for example: fa-envelope-open',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    important: {
      description: 'Makes the label bold if true',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      control: { type: 'boolean' }
    },
    size: {
      description: 'Adjust size',
      table: {
        type: {
          summary: Sizes.join('|')
        },
        defaultValue: { summary: 'sm' }
      },
      options: Sizes,
      control: { type: 'select' }
    }
  }
};

const defaultArgs = {
  label: 'Label',
  active: false,
  icon: 'fa-handshake',
  important: false,
  size: 'sm'
};

const DefaultUsageTemplate = (args) => ({
  template: hbs`
    <OSS::Tip
      @label={{this.label}}
      @active={{this.active}}
      @icon={{this.icon}}
      @important={{this.important}}
      @size={{this.size}}
    />
  `,
  context: args
});

const CustomContentTemplate = (args) => ({
  template: hbs`
    <OSS::Tip
      @label={{this.label}}
      @active={{this.active}}
      @important={{this.important}}
      @size={{this.size}}
    >
      <:custom-icon><div class="fflag fflag-FR ff-sm ff-round" /></:custom-icon>
    </OSS::Tip>
  `,
  context: args
});

export const Default = DefaultUsageTemplate.bind({});
Default.args = defaultArgs;

export const CustomContent = CustomContentTemplate.bind({});
CustomContent.args = {
  ...defaultArgs
};
