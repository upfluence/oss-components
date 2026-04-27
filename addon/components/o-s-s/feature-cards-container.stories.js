import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/OSS::FeatureCardsContainer',
  component: 'feature-cards-container',
  argTypes: {
    cards: {
      description: '2 or 3 feature cards. Colors, shadows and rotation are automatically set by the container.',
      table: {
        type: { summary: 'Array<{ title: string; description: string; image: { src: string; alt?: string } }>' },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'object' },
      type: { required: true }
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          'Wrapper that lays out 2 or 3 OSS::FeatureCard components with colors, shadows, angles and overlap. See [OSS::FeatureCard](?path=/story/components-oss-featurecard--default) for individual card details.'
      }
    }
  }
};

const defaultImage = {
  src: '/@upfluence/oss-components/assets/images/no-image.svg',
  alt: 'No image illustration'
};

const threeCardsArgs = {
  cards: [
    {
      title: 'Creator discovery at scale',
      description:
        'Discover and enrich creators via API using platform, region, and key attributes to power precise scouting.',
      image: defaultImage
    },
    {
      title: 'Audience & content insights',
      description: 'Pull demographics and media performance into your BI to target smarter and report faster.',
      image: defaultImage
    },
    {
      title: 'Campaign performance tracking',
      description: 'Track contribution stages, orders and ROI, then sync results to your CRM.',
      image: defaultImage
    }
  ]
};

const twoCardsArgs = {
  cards: threeCardsArgs.cards.slice(0, 2)
};

const Template = (args) => ({
  template: hbs`
    <div style="display: flex; justify-content: center; overflow-x: auto; min-inline-size: 950px;">
      <OSS::FeatureCardsContainer @cards={{this.cards}} />
    </div>
  `,
  context: args
});

export const ThreeCards = Template.bind({});
ThreeCards.args = threeCardsArgs;

export const TwoCards = Template.bind({});
TwoCards.args = twoCardsArgs;
