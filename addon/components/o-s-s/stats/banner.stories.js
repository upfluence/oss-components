import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/OSS::Stats::Banner',
  component: 'stats-banner',
  argTypes: {
    title: {
      description: 'Header text displayed in the banner',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
      control: { type: 'text' }
    },
    titleInfoCircle: {
      description: 'When provided, displays an info-circle icon next to the title with this text as tooltip',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
      control: { type: 'text' }
    },
    badgeConfig: {
      description: 'Badge config passed down to OSS::Badge (icon, image, text, skin, plain, size)',
      table: { type: { summary: 'StatsBannerBadgeConfig' }, defaultValue: { summary: 'undefined' } }
    },
    extraIconConfig: {
      description: 'Icon displayed to the left of the badge. Accepts { icon, color }',
      table: { type: { summary: 'StatsBannerExtraIconConfig' }, defaultValue: { summary: 'undefined' } }
    },
    extraInfoTagConfig: {
      description: 'Tag displayed next to the stat value. Accepts OSS::Tag config (label, skin, icon, plain)',
      table: { type: { summary: 'StatsBannerExtraInfoTagConfig' }, defaultValue: { summary: 'undefined' } }
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          'A stats banner supporting badge, extra icon, title with tooltip, inline tag, and named blocks for content, extra-badges, dropdown and CTA.'
      },
      iframeHeight: 260
    }
  }
};

const defaultArgs = {
  title:
    'Use statistics to surface a key KPI or summary at-a-glance. Apply locale-aware number formatting, keep significant digits reasonable, and always show units and currency.'
};

const Template = (args) => ({
  template: hbs`
    <div style="max-width: 1200px;">
      <OSS::Stats::Banner @title={{this.title}} @badgeConfig={{hash icon="fa-check" skin="success"}}>
        <:content>
          <span class="font-color-gray-600">{{this.title}}</span>
        </:content>

        <div class="oss-stats-banner__card">
          <div class="oss-stats-banner__card-label">Total paid amount</div>
          <div class="oss-stats-banner__card-value">$12,493,343.22</div>
          <div class="oss-stats-banner__card-meta">supplementary info</div>
        </div>

        <div class="oss-stats-banner__card">
          <div class="oss-stats-banner__card-label">Commission to authorize</div>
          <div class="oss-stats-banner__card-value">$5,920</div>
          <div class="oss-stats-banner__card-meta">supplementary info</div>
        </div>

        <div class="oss-stats-banner__card">
          <div class="oss-stats-banner__card-label">Pending amount</div>
          <div class="oss-stats-banner__card-value">$594,032</div>
          <div class="oss-stats-banner__card-meta">supplementary info</div>
        </div>

        <div class="oss-stats-banner__card oss-stats-banner__card--highlighted">
          <div class="fx-row fx-malign-space-between fx-xalign-center fx-gap-px-6">
            <OSS::Tag @label="Ready-to-pay commission" @icon="fa-circle-check" @skin="secondary" @size="xs" />

            <OSS::Button @label="Pay" @size="xs" @icon="fa-money-bill" />
          </div>
          <div class="oss-stats-banner__card-value">$5,920</div>
          <div class="oss-stats-banner__card-meta">supplementary info</div>

          <div class="margin-top-px-6">
            <OSS::Tag @label="5 payments" @skin="secondary" @size="xs" />
          </div>
        </div>
      </OSS::Stats::Banner>
    </div>
  `,
  context: args
});

const WithCTA = (args) => ({
  template: hbs`
    <div style="max-width: 1200px;">
      <OSS::Stats::Banner @title={{this.title}} @badgeConfig={{hash icon="fa-check" skin="success"}}>
        <:content>
          <span class="font-color-gray-600">{{this.title}}</span>
        </:content>

        <:cta>
          <OSS::Button @label="Export" @icon="fa-download" @size="sm" @skin="secondary" />
        </:cta>

        <div class="oss-stats-banner__card">
          <div class="oss-stats-banner__card-label">Total paid amount</div>
          <div class="oss-stats-banner__card-value">$12,493,343.22</div>
          <div class="oss-stats-banner__card-meta">supplementary info</div>
        </div>
      </OSS::Stats::Banner>
    </div>
  `,
  context: args
});

export const Default = Template.bind({});
Default.args = defaultArgs;

export const UsageWithHeaderCTA = WithCTA.bind({});
UsageWithHeaderCTA.args = defaultArgs;

const WithExtraIconAndTitleInfoCircle = (args) => ({
  template: hbs`
    <div style="max-width: 1200px;">
      <OSS::Stats::Banner
        @title={{this.title}}
        @titleInfoCircle="This KPI represents total paid amounts across all campaigns"
        @badgeConfig={{hash icon="fa-check" skin="success"}}
        @extraIconConfig={{hash icon="fa-star" color="#f59e0b"}}
        @statValue="$12,493"
        @statExtraInfo="supplementary info"
        @extraInfoTagConfig={{hash label="New" skin="success" icon="fa-sparkles"}}
      />
    </div>
  `,
  context: args
});

export const WithExtraFeaturesAndTitleInfoCircle = WithExtraIconAndTitleInfoCircle.bind({});
WithExtraFeaturesAndTitleInfoCircle.args = defaultArgs;

const WithDropdown = (args) => ({
  template: hbs`
    <div style="max-width: 1200px;">
      <OSS::Stats::Banner @title={{this.title}} @badgeConfig={{hash icon="fa-check" skin="success"}} @statValue="$12,493">
        <:dropdown>
          <OSS::ButtonDropdown @icon="fa-caret-down" @hideArrow={{true}} @square={{true}} @size="sm">
            <:items>
              <div class="oss-button-dropdown__item">Option A</div>
              <div class="oss-button-dropdown__item">Option B</div>
            </:items>
          </OSS::ButtonDropdown>
        </:dropdown>
      </OSS::Stats::Banner>
    </div>
  `,
  context: args
});

export const UsageWithDropdown = WithDropdown.bind({});
UsageWithDropdown.args = defaultArgs;
