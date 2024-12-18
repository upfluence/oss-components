import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/OSS::InformationSection',
  argTypes: {
    title: {
      description: 'The title of the section',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' }
      },
      control: {
        type: 'text'
      },
      type: { required: true }
    },
    subtitle: {
      description: 'The subtitle of the section (optional)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' }
      },
      control: {
        type: 'text'
      }
    },
    badgeIcon: {
      description: 'The icon for the badge (SVG or FontAwesome class)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' }
      },
      control: {
        type: 'text'
      }
    },

    imageUrl: {
      description: 'The image url for the badge',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' }
      },
      control: {
        type: 'text'
      }
    },
    plain: {
      description: 'Sets the header background to plain gray or white based on context',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'undefined' }
      },
      control: {
        type: 'boolean'
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          'A component that renders a banner with a header and content section for displaying data. The header can include a badge, title, subtitle, and optional action buttons.'
      }
    }
  }
};

const defaultArgs = {
  title: 'Title',
  subtitle: 'Subtitle',
  imageUrl: '/assets/images/upfluence-white-logo.svg',
  badgeIcon: 'fa-pen',
  plain: true
};

const Template = (args) => ({
  template: hbs`
    <OSS::InformationSection
      @title={{this.title}}
      @badgeIcon={{this.badgeIcon}}
      @imageUrl={{this.imageUrl}}
      @subtitle={{this.subtitle}}
      @plain={{this.plain}}
    />
  `,
  context: args
});

const BadgeBlockTemplate = (args) => ({
  template: hbs`
    <OSS::InformationSection
      @title={{this.title}}
      @badgeIcon={{this.badgeIcon}}
      @subtitle={{this.subtitle}}
      @plain={{this.plain}}
    >
      <:badge>
        <span>Custom Badge Content</span>
      </:badge>
    </OSS::InformationSection>
  `,
  context: args
});

const ActionBlockTemplate = (args) => ({
  template: hbs`
    <OSS::InformationSection
      @title={{this.title}}
      @badgeIcon={{this.badgeIcon}}
      @subtitle={{this.subtitle}}
      @plain={{this.plain}}
    >
      <:action>
        <div class="fx-row fx-gap-px-6">
          <OSS::Tag @label="Hello" @skin="primary" />
          <OSS::Button @size="sm" @label="Action Button"/>
        </div>
      </:action>
    </OSS::InformationSection>
  `,
  context: args
});

const ContentBlockTemplate = (args) => ({
  template: hbs`
    <OSS::InformationSection
      @title={{this.title}}
      @badgeIcon={{this.badgeIcon}}
      @subtitle={{this.subtitle}}
      @plain={{this.plain}}
    >
      <:content>
        <div>
          <p>Detailed custom content goes here.</p>
        </div>
      </:content>
    </OSS::InformationSection>
  `,
  context: args
});

export const Default = Template.bind({});
Default.args = defaultArgs;

export const WithCustomBadge = BadgeBlockTemplate.bind({});
WithCustomBadge.args = defaultArgs;

export const WithCustomAction = ActionBlockTemplate.bind({});
WithCustomAction.args = defaultArgs;

export const WithCustomContent = ContentBlockTemplate.bind({});
WithCustomContent.args = defaultArgs;
