import { hbs } from 'ember-cli-htmlbars';

function getAllCSSColorAvailable() {
  const rootStyles = getComputedStyle(document.documentElement);

  return Array.from(rootStyles)
    .filter(
      (prop) =>
        prop.startsWith('--color-') &&
        !prop.includes('gradient') &&
        !prop.includes('accent') &&
        rootStyles.getPropertyValue(prop).trim().startsWith('#')
    )
    .sort();
}

const ColorOptions = getAllCSSColorAvailable();

export default {
  title: 'Components/OSS::MarketingBanner',
  component: 'marketing-banner',
  argTypes: {
    title: {
      description: 'The main title text displayed in the banner',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    subtitle: {
      description: 'The subtitle text displayed below the title',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    primaryGradiantColor: {
      description: 'CSS variable for the primary gradient color',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: '--color-violet-100' }
      },
      options: ColorOptions,
      control: { type: 'select' }
    },
    secondaryGradiantColor: {
      description: 'CSS variable for the secondary gradient color',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: '--color-melon-100' }
      },
      options: ColorOptions,
      control: { type: 'select' }
    },
    backgroundGridDisplayed: {
      description: 'Display the background grid pattern',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: true }
      },
      control: { type: 'boolean' }
    },
    illustrationAlwaysVisible: {
      description: 'Makes the illustration always visible (not hidden on mobile)',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: false }
      },
      control: { type: 'boolean' }
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          'A marketing banner component with background gradients. Supports custom illustrations and action buttons via named blocks.'
      },
      iframeHeight: 250
    }
  }
};

const defaultArgs = {
  title: 'Welcome to Our Platform',
  subtitle: 'Discover powerful tools to grow your business',
  primaryGradiantColor: '--color-violet-100',
  secondaryGradiantColor: '--color-melon-100',
  backgroundGridDisplayed: true,
  illustrationAlwaysVisible: false
};

const BasicUsageTemplate = (args) => ({
  template: hbs`
    <div style="width: 600px;">
      <OSS::MarketingBanner
        @title={{this.title}}
        @subtitle={{this.subtitle}}
        @options={{hash
          primaryGradiantColor=this.primaryGradiantColor
          secondaryGradiantColor=this.secondaryGradiantColor
          backgroundGridDisplayed=this.backgroundGridDisplayed
          illustrationAlwaysVisible=this.illustrationAlwaysVisible
        }}
      />
    </div>
  `,
  context: args
});

const WithIllustrationTemplate = (args) => ({
  template: hbs`
    <div style="width: 600px;">
      <OSS::MarketingBanner
        @title={{this.title}}
        @subtitle={{this.subtitle}}
        @options={{hash
          primaryGradiantColor=this.primaryGradiantColor
          secondaryGradiantColor=this.secondaryGradiantColor
          illustrationAlwaysVisible=this.illustrationAlwaysVisible
        }}
      >
        <:illustration>
          <div style="width: 80px; height: 80px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 40px;">
            🚀
          </div>
        </:illustration>
      </OSS::MarketingBanner>
    </div>
  `,
  context: args
});

const WithActionsTemplate = (args) => ({
  template: hbs`
    <div style="width: 600px;">
      <OSS::MarketingBanner
        @title={{this.title}}
        @subtitle={{this.subtitle}}
        @options={{hash
          primaryGradiantColor=this.primaryGradiantColor
          secondaryGradiantColor=this.secondaryGradiantColor
        }}
      >
        <:actions>
          <button class="upf-btn upf-btn--primary">Get Started</button>
        </:actions>
      </OSS::MarketingBanner>
    </div>
  `,
  context: args
});

const CompleteExampleTemplate = (args) => ({
  template: hbs`
    <div style="width: 600px;">
      <OSS::MarketingBanner
        @title={{this.title}}
        @subtitle={{this.subtitle}}
        @options={{hash
          primaryGradiantColor=this.primaryGradiantColor
          secondaryGradiantColor=this.secondaryGradiantColor
          backgroundGridDisplayed=this.backgroundGridDisplayed
          illustrationAlwaysVisible=this.illustrationAlwaysVisible
        }}
      >
        <:illustration>
          <div style="width: 80px; height: 80px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 40px;">
            ✨
          </div>
        </:illustration>
        <:actions>
            <div class="fx-row fx-gap-px-6">
              <button class="upf-btn upf-btn--primary">Get Started</button>
              <button class="upf-btn upf-btn--secondary">Learn More</button>
            </div>
        </:actions>
      </OSS::MarketingBanner>
    </div>
  `,
  context: args
});

const CompleteExampleTemplateSmallScreen = (args) => ({
  template: hbs`
    <div style="width: 300px;">
      <OSS::MarketingBanner
        @title={{this.title}}
        @subtitle={{this.subtitle}}
        @options={{hash
          primaryGradiantColor=this.primaryGradiantColor
          secondaryGradiantColor=this.secondaryGradiantColor
          backgroundGridDisplayed=this.backgroundGridDisplayed
          illustrationAlwaysVisible=this.illustrationAlwaysVisible
        }}
      >
        <:illustration>
          <div style="width: 80px; height: 80px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 40px;">
            ✨
          </div>
        </:illustration>
        <:actions>
            <div class="fx-row fx-1 fx-gap-px-6">
              <button class="fx-1 upf-btn upf-btn--primary">Get Started</button>
              <button class="fx-1 upf-btn upf-btn--secondary">Learn More</button>
            </div>
        </:actions>
      </OSS::MarketingBanner>
    </div>
  `,
  context: args
});

export const BasicUsage = BasicUsageTemplate.bind({});
BasicUsage.args = defaultArgs;

export const WithIllustration = WithIllustrationTemplate.bind({});
WithIllustration.args = {
  ...defaultArgs,
  title: 'Launch Your Project',
  subtitle: 'Connect with your audience and achieve your goals'
};

export const WithActions = WithActionsTemplate.bind({});
WithActions.args = {
  ...defaultArgs,
  title: 'Ready to Get Started?',
  subtitle: 'Join thousands of users already using our platform'
};

export const CompleteExample = CompleteExampleTemplate.bind({});
CompleteExample.args = {
  ...defaultArgs,
  title: 'Transform Your Workflow',
  subtitle: 'Elevate your productivity with data-driven insights',
  primaryGradiantColor: '--color-cyan-100',
  secondaryGradiantColor: '--color-lime-100'
};

export const CompleteExampleSmallScreen = CompleteExampleTemplateSmallScreen.bind({});
CompleteExampleSmallScreen.args = {
  ...defaultArgs,
  title: 'Transform Your Workflow',
  subtitle: 'Elevate your productivity with data-driven insights',
  primaryGradiantColor: '--color-cyan-100',
  secondaryGradiantColor: '--color-lime-100'
};
