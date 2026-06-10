import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/OSS::Smart::Blob',
  component: 'smart-blob',
  argTypes: {
    loading: {
      description: 'Displays the loading state when true',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      control: {
        type: 'boolean'
      }
    },
    size: {
      description: 'Sets the blob size',
      table: {
        type: { summary: 'sm | md | xl' },
        defaultValue: { summary: 'md' }
      },
      control: {
        type: 'select'
      },
      options: ['sm', 'md', 'xl']
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'A smart animated blob used to show inactive and loading states.'
      }
    }
  }
};

const defaultArgs = {
  loading: false,
  size: 'md'
};

const DefaultUsageTemplate = (args) => ({
  template: hbs`
    <OSS::Smart::Blob @loading={{this.loading}} @size={{this.size}} />
  `,
  context: args
});

export const BasicUsage = DefaultUsageTemplate.bind({});
BasicUsage.args = defaultArgs;
