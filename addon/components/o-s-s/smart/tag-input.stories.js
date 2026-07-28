import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/OSS::Smart::TagInput',
  component: 'smart-tag-input',
  argTypes: {
    value: {
      description: 'The current value of the input field.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      control: { type: 'text' }
    },
    loading: {
      description: 'Whether the input is in a loading state (shows animated overlay).',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      control: { type: 'boolean' }
    },
    hasError: {
      description: 'If true, applies error styling to the input.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      control: { type: 'boolean' }
    },
    onKeydown: {
      description:
        'Callback triggered when a key is pressed. Called with a `{ value, type }` object when Enter is pressed.',
      table: {
        category: 'Actions',
        type: { summary: '(keyword: { value: string, type: "keyword" | "hashtag" | "mention" }) => void' }
      }
    },
    placeholder: {
      description: 'The placeholder to show when the input is empty',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: undefined }
      },
      control: { type: 'text' }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'A smart tag input component for entering keywords, @mentions, and #hashtags.'
      }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/N7SDuH9mvC9zTlsLN49N4L/2.0-UI-Kit-%F0%9F%92%A0?node-id=8613-473117&p=f&t=pVIlyZlo6oyvIQxs-0'
    }
  }
};

const defaultArgs = {
  value: 'Keyword',
  loading: false,
  hasError: false,
  placeholder: 'Type a keyword, mention, or hashtag'
};

const Template = (args) => ({
  template: hbs`
    <OSS::Smart::TagInput
      @value={{this.value}}
      @loading={{this.loading}}
      @hasError={{this.hasError}}
      @onKeydown={{this.onKeydown}}
    />
  `,
  context: args
});

export const Default = Template.bind({});
Default.args = defaultArgs;
