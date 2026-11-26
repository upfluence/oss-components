import { hbs } from 'ember-cli-htmlbars';

const DefaultUsageTemplate = (args) => ({
  template: hbs`
    <OSS::Smart::Blob @loading={{this.loading}} @size={{this.size}} />
  `,
  context: args
});

const defaultArgs = {
  loading: false,
  size: 'md'
};

export default {
  title: 'Components/OSS::Smart::Blob',
  component: 'smart-blob',
  render: DefaultUsageTemplate,
  args: defaultArgs,
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
        type: { summary: 'xs | sm | md | xl' },
        defaultValue: { summary: 'md' }
      },
      control: {
        type: 'select'
      },
      options: ['xs', 'sm', 'md', 'xl']
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'A smart animated blob used to show inactive and loading states.'
      }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/i92PsCj4g8zHhZ5OsrFAcV/1.0-Tokens-%F0%9F%8C%88?node-id=3174-12755&p=f&t=J4JIimAFGHND0egW-0'
    }
  }
};

export const BasicUsage = {};
