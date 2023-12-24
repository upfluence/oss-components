import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/OSS::Layout::Sidebar',
  component: 'sidebar',
  argTypes: {
    logo: {
      description: 'Url of the brand logo',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    homeAction: {
      description: 'Function to be called when the brand logo is clicked',
      table: {
        category: 'Actions',
        type: {
          summary: 'homeAction(): void'
        }
      }
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
  logo: 'https://d2vn5no6mw06ds.cloudfront.net/assets/images/upfluence-white-logo-6914f5a181fad59b7c6e4e755ce05d70.svg',
  homeAction: action('homeAction')
};

const Template = (args) => ({
  template: hbs`
    <div style="height:100vh; padding:5px;">
      <OSS::Layout::Sidebar @logo={{this.logo}} @homeAction={{this.homeAction}} style="height:95vh;">
      <:content>
        <OSS::Layout::Sidebar::Item @icon="far fa-search" class="active" @homeAction={{this.homeAction}} />
        <OSS::Layout::Sidebar::Item @icon="far fa-list" />
        <OSS::Layout::Sidebar::Item @icon="far fa-envelope" @hasNotifications={{true}} />
        <OSS::Layout::Sidebar::Item @icon="far fa-credit-card" @locked={{true}} />
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
