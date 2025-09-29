import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/OSS::Layout::Sidebar',
  component: 'sidebar',
  argTypes: {
    homeParameters: {
      description: 'Options to configure the header of the sidebar',
      table: {
        type: {
          summary: '{ logo: string; url: string; tooltip?: string; }'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'object' }
    },
    expandable: {
      description: 'Whether the user has the ability to expand/collapse the sidebar',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: 'false' }
      },
      control: { type: 'boolean' }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'Layout component to display sidebar.'
      },
      iframeHeight: 120
    }
  }
};

const defaultArgs = {
  expandable: false,
  homeParameters: {
    logo: '/assets/images/brand-icon.svg',
    url: 'https://www.upfluence.com'
  }
};

const Template = (args) => ({
  template: hbs`
    <div style="height:100vh; padding:5px;">
      <OSS::Layout::Sidebar @expandable={{this.expandable}} @homeParameters={{this.homeParameters}} style="height:95vh; overflow: visible">
        <:content as |sidebar|>
          <OSS::Layout::Sidebar::Item @expanded={{sidebar.expanded}} @icon="far fa-search" @label="Search" class="active" @homeAction={{this.homeAction}} />
          <OSS::Layout::Sidebar::Item @expanded={{sidebar.expanded}} @icon="far fa-list" @label="Community" />
          <OSS::Layout::Sidebar::Item @expanded={{sidebar.expanded}} @icon="far fa-envelope" @label="Inbox" @hasNotifications={{true}} />
          <OSS::Layout::Sidebar::Item @expanded={{sidebar.expanded}} @icon="far fa-credit-card" @label="Payment" @locked={{true}} />
        </:content>
        <:footer>
          <OSS::Avatar @initials="Ts" />
        </:footer>
      </OSS::Layout::Sidebar>
    </div>
  `,
  context: args
});

export const BasicUsage = Template.bind({});
BasicUsage.args = defaultArgs;
