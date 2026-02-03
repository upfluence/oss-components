import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/OSS::Layout::Sidebar::Item',
  component: 'item',
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
    hasNotifications: {
      description: 'Has notifications',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: 'false' }
      },
      control: { type: 'boolean' }
    },
    locked: {
      description: 'Is item locked',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      control: {
        type: 'boolean'
      }
    },
    link: {
      description: 'Url or Route to redirect on click',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      control: {
        type: 'text'
      }
    },
    disableAutoActive: {
      description: 'Disables automatic active state based on current route, managed by Ember by default',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      control: {
        type: 'boolean'
      }
    },
    lockedAction: {
      description: 'Function to be called on click when item is locked',
      table: {
        category: 'Actions',
        type: {
          summary: 'lockedAction(): void'
        }
      }
    },
    action: {
      description: 'Function to be called on click when item is not locked',
      table: {
        category: 'Actions',
        type: {
          summary: 'action(): void'
        }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'Component Item used in sidebar.'
      },
      iframeHeight: 120
    }
  }
};

const defaultArgs = {
  icon: 'far fa-search',
  label: 'Search',
  expanded: false,
  hasNotifications: false,
  locked: false,
  link: 'http://upfluence.com',
  lockedAction: action('lockedAction'),
  action: action('action')
};

const Template = (args) => ({
  template: hbs`
    <div style="background: var(--sidebar-bg-color)">
      <OSS::Layout::Sidebar::Item @icon={{this.icon}} @locked={{this.locked}}
                                  @hasNotifications={{this.hasNotifications}}
                                  @link={{this.link}} @label={{this.label}}
                                  @expanded={{this.expanded}}
                                  @lockedAction={{this.lockedAction}} />
                                  @action={{this.action}} />
    </div>
  `,
  context: args
});

const IconNamedBlockTemplate = (args) => ({
  template: hbs`
      <OSS::Layout::Sidebar::Item
        @icon={{this.icon}} @locked={{this.locked}} @hasNotifications={{this.hasNotifications}}
        @link={{this.link}} @label={{this.label}} @expanded={{this.expanded}} @lockedAction={{this.lockedAction}} @action={{this.action}}
      >
        <:icon>
          <OSS::Icon @icon="fa-ship" />
        </:icon>
      </OSS::Layout::Sidebar::Item>
  `,
  context: args
});

export const BasicUsage = Template.bind({});
BasicUsage.args = defaultArgs;

export const WithNamedBlockIcon = IconNamedBlockTemplate.bind({});
WithNamedBlockIcon.args = defaultArgs;
