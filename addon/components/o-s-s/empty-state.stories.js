import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/OSS::EmptyState',
  component: 'empty state',
  argTypes: {
    image: {
      description: 'a font-awesome icon to be displayed in a badge',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    title: {
      description: 'The title of the state',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    subtitle: {
      description: 'More information about the state',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    size: {
      description: 'The size of the state',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'select' },
      options: ['sm', 'md']
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'An component used when there is nothing to display on a page'
      }
    }
  }
};

const defaultArgs = {
  image: 'fa-thumbs-up',
  title: 'Empty State Title',
  subtitle: 'Additional information here',
  size: 'md'
};

const Template = (args) => ({
  template: hbs`<OSS::EmptyState @image={{this.image}} @title={{this.title}} @subtitle={{this.subtitle}} @size={{this.size}} />`,
  context: args
});

export const Default = Template.bind({});
Default.args = defaultArgs;
