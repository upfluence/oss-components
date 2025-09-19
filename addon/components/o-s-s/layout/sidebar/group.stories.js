import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/OSS::Layout::Sidebar::Group',
  component: 'group',
  argTypes: {
    icon: {
      description: 'Font Awesome class, for example: far fa-envelope-open',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    label: {
      description: 'A label for the item to display when expanded',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    expanded: {
      description: 'Display in expanded state',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: 'false' }
      },
      control: { type: 'boolean' }
    },
    collapsible: {
      description: 'Allow the group to be collapsed',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: 'false' }
      },
      control: { type: 'boolean' }
    },
    items: {
      description: 'An array of items to display as children of the group using OSS::Layout::Sidebar::Item',
      table: {
        type: {
          summary: 'GroupItem[]'
        }
      },
      control: { type: 'array' }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'Group component (used in sidebar)'
      },
      iframeHeight: 120
    }
  }
};

const defaultArgs = {
  icon: 'far fa-search',
  label: 'Search',
  expanded: false,
  collapsible: true,
  items: [
    {
      icon: 'far fa-search',
      label: 'Search',
      expanded: false,
      hasNotifications: false,
      locked: false,
      link: 'http://upfluence.com',
      lockedAction: action('lockedAction')
    },
    {
      icon: 'far fa-bullseye-pointer',
      label: 'Live Capture',
      expanded: false,
      hasNotifications: true,
      locked: false,
      link: 'http://upfluence.com',
      lockedAction: action('lockedAction')
    }
  ]
};

const Template = (args) => ({
  template: hbs`
    <div style="background: var(--sidebar-bg-color)">
      <OSS::Layout::Sidebar::Group
        @icon={{this.icon}} @label={{this.label}} @expanded={{this.expanded}} @items={{this.items}} />
    </div>
  `,
  context: args
});

const IconNamedBlockTemplate = (args) => ({
  template: hbs`
      <OSS::Layout::Sidebar::Group
        @icon={{this.icon}} @label={{this.label}} @expanded={{true}} @items={{this.items}} @collapsible={{this.collapsible}}>
        <:icon>
          <OSS::Icon @icon="fa-ship" />
        </:icon>
      </OSS::Layout::Sidebar::Group>
  `,
  context: args
});

export const BasicUsage = Template.bind({});
BasicUsage.args = defaultArgs;

export const WithNamedBlockIcon = IconNamedBlockTemplate.bind({});
WithNamedBlockIcon.args = defaultArgs;
