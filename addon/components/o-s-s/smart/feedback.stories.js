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
    contentString: {
      description: 'Text content to display when not loading',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      control: { type: 'text' }
    },
    contentArray: {
      description: 'Array of text lines to display instead of a single string',
      table: {
        type: { summary: 'string[]' },
        defaultValue: { summary: '[]' }
      },
      control: { type: 'object' }
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          'Component used to display feedback with optional loading skeletons and dynamic content (string or array).'
      },
      iframeHeight: 250
    }
  }
};

const defaultArgs = {
  loading: false,
  contentString: 'This is feedback content.',
  contentArray: []
};

const Template = (args) => ({
  template: hbs`
    <div class="bg-color-white padding-px-6">
      <OSS::Smart::Feedback 
        @loading={{this.loading}} 
        @contentString={{this.contentString}} 
        @contentArray={{this.contentArray}} 
      >
        <:icon>
          <div class="w-px-40 h-px-40 bg-color-blue border-radius-px-6"></div>
        </:icon>
      </OSS::Smart::Feedback>
    </div>
  `,
  context: args
});

export const Default = Template.bind({});
Default.args = defaultArgs;

export const WithArrayContent = Template.bind({});
WithArrayContent.args = {
  loading: false,
  contentArray: ['Line 1', 'Line 2', 'Line 3'],
  contentString: ''
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  contentString: '',
  contentArray: []
};
