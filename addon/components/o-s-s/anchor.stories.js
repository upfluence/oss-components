import hbs from 'htmlbars-inline-precompile';

export default {
  title: 'Components/OSS::Anchor',
  component: 'anchor',
  argTypes: {
    link: {
      description: 'Url or Route to redirect on click',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: '' }
      },
      control: { type: 'text' }
    },
    engine: {
      description: 'Optional engine name to use for routing',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: '' }
      },
      control: { type: 'text' }
    },
    noreferrer: {
      description: 'Enables the noreferrer rel attribute',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: true }
      },
      control: { type: 'boolean' }
    },
    noopener: {
      description: 'Enables the noopener rel attribute',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: true }
      },
      control: { type: 'boolean' }
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          'A component to automaticaly wrap link into an anchor element or a LinkTo helper based on application router knowledge.'
      },
      iframeHeight: 100
    }
  }
};

const DefaultUsageTemplate = (args) => ({
  template: hbs`<div style="display: flex; justify-content: center">
      <OSS::Anchor @link={{this.link}} @noopener={{this.noopener}} @noreferrer={{this.noreferrer}}>link</OSS::Anchor>
    </div>
  `,
  context: args
});
export const BasicUsage = DefaultUsageTemplate.bind({});
BasicUsage.args = {
  link: 'https://www.upfluence.com',
  noopener: true,
  noreferrer: true
};
