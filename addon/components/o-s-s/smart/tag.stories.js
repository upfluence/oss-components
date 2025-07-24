import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/OSS::Smart::Tag',
  component: 'smart-tag',
  argTypes: {
    label: {
      description: 'The text content of the tag.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    type: {
      description: 'The type of tag, which determines color and icon. Defaults to "keyword".',
      table: {
        type: { summary: '"keyword" | "hashtag" | "mention"' },
        defaultValue: { summary: 'keyword' }
      },
      control: {
        type: 'select',
        options: ['keyword', 'hashtag', 'mention']
      }
    },
    size: {
      description: 'The size of the tag. "md" (default) or "lg".',
      table: {
        type: { summary: '"md" | "lg"' },
        defaultValue: { summary: 'md' }
      },
      control: {
        type: 'select',
        options: ['md', 'lg']
      }
    },
    successAnimationOnInsertion: {
      description: 'If true, plays a success animation when the tag is inserted.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      control: { type: 'boolean' }
    },
    onRemove: {
      description: 'Callback triggered when the close icon is clicked. If set, the tag is closable.',
      table: {
        category: 'Actions',
        type: { summary: '() => void' }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'A colored tag component for keywords, hashtags, or mentions.'
      }
    }
  }
};

const defaultArgs = {
  label: 'Tag',
  type: 'keyword',
  size: 'md',
  successAnimationOnInsertion: false
};

const Template = (args) => ({
  template: hbs`
    <OSS::Smart::Tag
      @label={{this.label}}
      @type={{this.type}}
      @size={{this.size}}
      @successAnimationOnInsertion={{this.successAnimationOnInsertion}}
      @onRemove={{this.onRemove}}
    />
  `,
  context: args
});

export const Default = Template.bind({});
Default.args = defaultArgs;
