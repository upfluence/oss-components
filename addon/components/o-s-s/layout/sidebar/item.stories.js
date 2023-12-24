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
    lockedAction: {
      description: 'Function to be called on click when item is locked',
      table: {
        category: 'Actions',
        type: {
          summary: 'lockedAction(): void'
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
  hasNotifications: false,
  locked: false,
  link: 'http://upfluence.com',
  lockedAction: action('lockedAction')
};

const Template = (args) => ({
  template: hbs`
    <div style="background: var(--sidebar-bg-color)">
      <OSS::Layout::Sidebar::Item @icon={{this.icon}} @locked={{this.locked}}
                                  @hasNotifications={{this.hasNotifications}}
                                  @link={{this.link}}
                                  @lockedAction={{this.lockedAction}}/>
    </div>
  `,
  context: args
});

export const BasicUsage = Template.bind({});
BasicUsage.args = defaultArgs;
