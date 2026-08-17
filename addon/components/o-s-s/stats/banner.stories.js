import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/OSS::Stats::Banner',
  component: 'stats-banner',
  argTypes: {
    title: {
      description: 'Header text displayed in the banner',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          'A block-first stats banner. Badges, content and CTA are all provided through named blocks; provide stat cards in the default block.'
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
      <OSS::Stats::Banner @title={{this.title}}>

        <:badges>
          <OSS::Badge @icon="fa-check" @skin="success" />
        </:badges>

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
      <OSS::Stats::Banner @title={{this.title}}>
        <:badges>
          <OSS::Badge @icon="fa-check" @skin="success" />
        </:badges>

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
