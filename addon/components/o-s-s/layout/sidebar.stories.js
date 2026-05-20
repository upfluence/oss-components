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
    },
    alwaysExpanded: {
      description: 'Whether the sidebar is always expanded and cannot be collapsed',
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
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/N7SDuH9mvC9zTlsLN49N4L/2.0-UI-Kit-%F0%9F%92%A0?node-id=1343-6206&p=f&t=AsdGbaychQPIaGnK-0'
    }
  }
};

const defaultArgs = {
  expandable: false,
  homeParameters: {
    logo: '/assets/images/brand-icon.svg',
    url: 'https://www.upfluence.com'
  },
  alwaysExpanded: false
};

const Template = (args) => ({
  template: hbs`
    <div style="height:100vh; padding:5px;">
      <OSS::Layout::Sidebar @expandable={{this.expandable}} @homeParameters={{this.homeParameters}} @alwaysExpanded={{this.alwaysExpanded}} style="height:95vh; overflow: visible">
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
