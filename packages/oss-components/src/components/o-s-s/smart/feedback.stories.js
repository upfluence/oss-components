import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/OSS::Smart::Feedback',
  component: 'oss-smart-feedback',
  argTypes: {
    loading: {
      description: 'Whether the feedback component is in a loading state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      control: { type: 'boolean' }
    },
    collapsible: {
      description:
        'Whether the feedback collapses when its content is taller than 120px. Defaults to true. Automatically disabled when @error is set.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true }
      },
      control: { type: 'boolean' }
    },
    content: {
      description: 'Array of sections (title, text, bullets) to display when not loading and no error',
      table: {
        type: { summary: 'SmartFeedbackSection[]' },
        defaultValue: { summary: '[]' }
      },
      control: { type: 'object' }
    },
    error: {
      description: 'Error to display instead of @content, with an optional retry button',
      table: {
        type: { summary: 'SmartFeedbackError' },
        defaultValue: { summary: 'null' }
      },
      control: { type: 'object' }
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          'Component used to display feedback with optional loading skeletons, structured content, error state and collapse behavior.'
      },
      iframeHeight: 250
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/IuFBmVBSUpaDxFVQFJ3P6y/%F0%9F%94%B2-Define-Jaice-bubble-patterns?node-id=21647-1142'
    }
  }
};

const defaultArgs = {
  loading: false,
  collapsible: true,
  content: [{ text: 'This is feedback content.' }],
  error: null
};

const Template = (args) => ({
  template: hbs`
    <div class="bg-color-white padding-px-6">
      <OSS::Smart::Feedback
        @loading={{this.loading}}
        @collapsible={{this.collapsible}}
        @content={{this.content}}
        @error={{this.error}}
      />
    </div>
  `,
  context: args
});

export const Default = Template.bind({});
Default.args = defaultArgs;

export const WithSections = Template.bind({});
WithSections.args = {
  loading: false,
  collapsible: true,
  content: [
    { title: 'Risk Summary', text: 'This influencer has a low risk profile.' },
    { title: '💡 Why these filters?', bullets: ['Follower count', 'Engagement rate', 'Content category'] }
  ],
  error: null
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  collapsible: true,
  content: [],
  error: null
};

export const WithError = Template.bind({});
WithError.args = {
  loading: false,
  collapsible: true,
  content: [],
  error: {
    title: 'Summary could not be generated, please, retry.',
    onRetry: () => {}
  }
};
