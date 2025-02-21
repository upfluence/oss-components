import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/OSS::EmptyState',
  component: 'empty state',
  argTypes: {
    badgeIcon: {
      description: 'A font-awesome icon to be displayed in a badge',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    title: {
      description: 'A title displayed below the icon or badge in the component',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    subtitle: {
      description: 'A subtitle displayed under the title in the component',
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
        component: 'A component used when there is nothing to display on a page'
      }
    }
  }
};

const defaultArgs = {
  badgeIcon: 'fa-thumbs-up',
  title: 'Empty State Title',
  subtitle: 'Additional information here',
  size: 'md'
};

const Template = (args) => ({
  template: hbs`<OSS::EmptyState @badgeIcon={{this.badgeIcon}} @title={{this.title}} @subtitle={{this.subtitle}} @size={{this.size}} />`,
  context: args
});

const ImageTemplate = (args) => ({
  template: hbs`<OSS::EmptyState @badgeIcon={{this.badgeIcon}} @title={{this.title}} @subtitle={{this.subtitle}} @size={{this.size}}>
    <:image>
      <OSS::Illustration @src="/@upfluence/oss-components/assets/images/no-records.svg" />
    </:image>
  </OSS::EmptyState>`,
  context: args
});

const ActionTemplate = (args) => ({
  template: hbs`<OSS::EmptyState @badgeIcon={{this.badgeIcon}} @title={{this.title}} @subtitle={{this.subtitle}} @size={{this.size}}>
    <:actions>
      <OSS::Button @label="Click me" />
    </:actions>
  </OSS::EmptyState>`,
  context: args
});

export const Default = Template.bind({});
Default.args = defaultArgs;

export const UsageWithImage = ImageTemplate.bind({});
UsageWithImage.args = defaultArgs;

export const UsageWithActions = ActionTemplate.bind({});
UsageWithActions.args = defaultArgs;
