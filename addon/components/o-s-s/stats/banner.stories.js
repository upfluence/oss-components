import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/OSS::Stats::Banner',
  component: 'stats-banner',
  argTypes: {
    titleConfig: {
      description: 'Header object: { text, infoCircle }',
      table: { type: { summary: 'StatsBannerTitle' }, defaultValue: { summary: 'undefined' } }
    },
    badge: {
      description: 'Badge object passed to OSS::Badge, supports extraIcon: { icon, color }',
      table: { type: { summary: 'StatsBannerBadge' }, defaultValue: { summary: 'undefined' } }
    },
    statValue: {
      description: 'Stat object: { label, suffix?, tags? }',
      control: 'object',
      table: { type: { summary: 'StatsBannerStatValue' }, defaultValue: { summary: 'undefined' } }
    },
    loading: {
      description: 'Displays skeletons in place of title and KPI values',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } }
    },
    ctaPrimaryLabel: {
      description: 'Primary CTA label used by stories that render a CTA block',
      control: 'text',
      table: { category: 'Story controls' }
    },
    ctaSecondaryLabel: {
      description: 'Secondary CTA label used by stories that render multiple CTA actions',
      control: 'text',
      table: { category: 'Story controls' }
    }
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A stats banner supporting title and badge objects, inline KPI info, and named blocks for extra-badges, title-suffix, and CTA actions.'
      },
      iframeHeight: 260
    }
  }
};

const defaultArgs = {
  titleConfig: {
    text: 'Very long stats banner title that should truncate with ellipsis when the available width becomes too small',
    infoCircle: 'This is a helpful description of the stat'
  },
  badge: {
    icon: 'fa-check',
    skin: 'success',
    extraIcon: {
      icon: 'fa-star',
      color: '#f59e0b'
    }
  },
  statValue: {
    label: '123,456',
    suffix: 'Extra info',
    tags: [
      {
        label: 'New',
        skin: 'success',
        icon: 'fa-sparkles',
        plain: false
      }
    ]
  },
  loading: false,
  ctaPrimaryLabel: 'CTA',
  ctaSecondaryLabel: 'Export'
};

const PlaygroundTemplate = (args) => ({
  template: hbs`
    <div style="width: 1200px; max-width: 100%;">
      <OSS::Stats::Banner
        @titleConfig={{this.titleConfig}}
        @badge={{this.badge}}
        @statValue={{this.statValue}}
        @loading={{this.loading}}
      >
        <:title-suffix>
          <OSS::ButtonDropdown @icon="fa-caret-down" @hideArrow={{true}} @square={{true}} @size="sm">
            <:items>
              <div class="oss-button-dropdown__item">Option A</div>
              <div class="oss-button-dropdown__item">Option B</div>
            </:items>
          </OSS::ButtonDropdown>
        </:title-suffix>

        <:extra-badges>
          <OSS::Badge @text="2x" @size="lg" />
        </:extra-badges>

        <:cta>
          <div class="fx-row fx-gap-px-6">
            <OSS::Button @skin="primary" @label={{this.ctaPrimaryLabel}} @icon="fas fa-box-open" @size="md" />
            <OSS::Button @skin="secondary" @label={{this.ctaSecondaryLabel}} @icon="fa-download" @size="md" />
          </div>
        </:cta>
      </OSS::Stats::Banner>
    </div>
  `,
  context: args
});

const ThreeUpTemplate = (args) => ({
  template: hbs`
    <div style="width: 1200px; max-width: 100%;">
      <div class="fx-row fx-gap-px-12" style="flex-wrap: wrap;">
        <OSS::Stats::Banner
          class="fx-1"
          @badge={{this.badge}}
          @titleConfig={{this.titleConfig}}
          @statValue={{this.statValue}}
        >
          <:cta>
            <OSS::Button @skin="secondary" @label={{this.ctaSecondaryLabel}} @size="sm" />
          </:cta>
        </OSS::Stats::Banner>

        <OSS::Stats::Banner
          class="fx-1"
          @badge={{hash icon="fa-star" skin="primary"}}
          @titleConfig={{hash text="Commissions"}}
          @statValue={{hash label="$5,920" suffix="to authorize"}}
        >
          <:cta>
            <OSS::Button @skin="primary" @label="Pay" @size="sm" />
          </:cta>
        </OSS::Stats::Banner>

        <OSS::Stats::Banner
          class="fx-1"
                  @badge={{hash icon="fa-bolt" skin="alert"}}
          @titleConfig={{hash text="Pending"}}
                  @statValue={{hash label="$594,032" suffix="across campaigns"}}
        >
          <:cta>
            <OSS::Button @skin="secondary" @label="Open" @size="sm" />
          </:cta>
        </OSS::Stats::Banner>
      </div>
    </div>
  `,
  context: args
});

const DefaultTemplate = (args) => ({
  template: hbs`
    <div style="width: 1200px; max-width: 100%;">
      <OSS::Stats::Banner
        @titleConfig={{this.titleConfig}}
        @badge={{this.badge}}
        @statValue={{this.statValue}}
      >

        <:cta>
          <div class="fx-row fx-gap-px-6">
            <OSS::Button @label={{this.ctaSecondaryLabel}} @icon="fa-download" @size="sm" @skin="secondary" />
            <OSS::Button @label={{this.ctaPrimaryLabel}} @icon="fa-money-bill" @size="sm" @skin="primary" />
          </div>
        </:cta>
      </OSS::Stats::Banner>
    </div>
  `,
  context: args
});

const LoadingTemplate = (args) => ({
  template: hbs`
    <div style="width: 1200px; max-width: 100%;">
      <OSS::Stats::Banner
        @loading={{true}}
        @titleConfig={{this.titleConfig}}
        @badge={{this.badge}}
        @statValue={{this.statValue}}
      >
        <:extra-badges>
          <OSS::Badge @text="2x" @size="lg" />
        </:extra-badges>
      </OSS::Stats::Banner>
    </div>
  `,
  context: args
});

const MinimalTemplate = (args) => ({
  template: hbs`
    <div style="width: 1200px; max-width: 100%;">
      <OSS::Stats::Banner
        @titleConfig={{this.titleConfig}}
        @badge={{this.badge}}
        @statValue={{this.statValue}}
      />
    </div>
  `,
  context: args
});

const TitleSuffixOnlyTemplate = (args) => ({
  template: hbs`
    <div style="width: 1200px; max-width: 100%;">
      <OSS::Stats::Banner
        @titleConfig={{this.titleConfig}}
        @badge={{this.badge}}
        @statValue={{this.statValue}}
      >
        <:title-suffix>
          <OSS::ButtonDropdown @icon="fa-caret-down" @hideArrow={{true}} @square={{true}} @size="sm">
            <:items>
              <div class="oss-button-dropdown__item">Last 7 days</div>
              <div class="oss-button-dropdown__item">Last 30 days</div>
              <div class="oss-button-dropdown__item">Last quarter</div>
            </:items>
          </OSS::ButtonDropdown>
        </:title-suffix>
      </OSS::Stats::Banner>
    </div>
  `,
  context: args
});

export const Default = PlaygroundTemplate.bind({});
Default.args = defaultArgs;

export const ThreeUpCompact = ThreeUpTemplate.bind({});
ThreeUpCompact.args = {
  ...defaultArgs,
  titleConfig: {
    text: 'Revenue',
    infoCircle: 'Revenue generated during the selected period'
  },
  badge: {
    icon: 'fa-check',
    skin: 'success'
  },
  statValue: {
    label: '$12,493',
    suffix: 'vs last month'
  },
  ctaSecondaryLabel: 'Details'
};

export const WithDefaultCards = DefaultTemplate.bind({});
WithDefaultCards.args = {
  ...defaultArgs,
  titleConfig: {
    text: 'Commissions overview',
    infoCircle: 'Summary of pending and approved commissions'
  },
  badge: {
    icon: 'fa-star',
    skin: 'primary',
    extraIcon: {
      icon: 'fa-bolt',
      color: '#fb923c'
    }
  },
  statValue: {
    label: '$5,920',
    suffix: 'to authorize',
    tags: [
      {
        label: 'Urgent',
        skin: 'warning',
        icon: 'fa-triangle-exclamation',
        plain: false
      }
    ]
  },
  ctaPrimaryLabel: 'Pay',
  ctaSecondaryLabel: 'Export CSV'
};

export const Loading = LoadingTemplate.bind({});
Loading.args = {
  ...defaultArgs,
  titleConfig: {
    text: 'Loading stats banner title',
    infoCircle: 'Helpful title information'
  },
  badge: {
    icon: 'fa-hourglass-half',
    skin: 'alert'
  },
  statValue: {
    label: '999,999',
    suffix: 'Fetching latest data'
  },
  loading: true
};

export const Minimal = MinimalTemplate.bind({});
Minimal.args = {
  ...defaultArgs,
  titleConfig: {
    text: 'Active campaigns',
    infoCircle: undefined
  },
  badge: undefined,
  statValue: {
    label: '42',
    suffix: 'currently running'
  }
};

export const WithTitleSuffixOnly = TitleSuffixOnlyTemplate.bind({});
WithTitleSuffixOnly.args = {
  ...defaultArgs,
  titleConfig: {
    text: 'Paid amount',
    infoCircle: 'Compare period-over-period in the dropdown'
  },
  badge: {
    icon: 'fa-chart-line',
    skin: 'primary'
  },
  statValue: {
    label: '$87,240',
    suffix: 'last 30 days',
    tags: [
      {
        label: '+12%',
        skin: 'success',
        icon: 'fa-arrow-up',
        plain: false
      }
    ]
  }
};
