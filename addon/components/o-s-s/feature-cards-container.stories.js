import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/OSS::FeatureCardsContainer',
  component: 'feature-cards-container',
  argTypes: {
    cards: {
      description:
        '1 to 3 feature cards. Uses the same argument shape as OSS::FeatureCard; overlap and rotation are handled by the container. If colorVariant or shadowVariant are omitted, container defaults are applied.',
      table: {
        type: {
          summary:
            'Array<{ title: string; description: string; image: { src: string; alt?: string }; colorVariant?: "blue"|"violet"|"yellow"; shadowVariant?: "sm"|"lg" }>'
        },
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
          'Wrapper that lays out 1 to 3 OSS::FeatureCard components with angles and overlap. Card color/shadow values are passed through from each card object, with defaults when variants are omitted. See [OSS::FeatureCard](?path=/story/components-oss-featurecard--default) for individual card details.'
      }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/N7SDuH9mvC9zTlsLN49N4L/2.0-UI-Kit-%F0%9F%92%A0?node-id=11260-16590&p=f&t=MXQv8vcSqK6Jaxfy-0'
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
      image: defaultImage,
      colorVariant: 'blue',
      shadowVariant: 'sm'
    },
    {
      title: 'Audience & content insights',
      description: 'Pull demographics and media performance into your BI to target smarter and report faster.',
      image: defaultImage,
      colorVariant: 'violet',
      shadowVariant: 'lg'
    },
    {
      title: 'Campaign performance tracking',
      description: 'Track contribution stages, orders and ROI, then sync results to your CRM.',
      image: defaultImage,
      colorVariant: 'yellow',
      shadowVariant: 'sm'
    }
  ]
};

const twoCardsArgs = {
  cards: threeCardsArgs.cards.slice(0, 2)
};

const threeCardsWithDefaultsArgs = {
  cards: threeCardsArgs.cards.map(({ title, description, image }) => ({
    title,
    description,
    image
  }))
};

const oneCardArgs = {
  cards: threeCardsArgs.cards.slice(0, 1)
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

export const ThreeCardsWithContainerDefaults = Template.bind({});
ThreeCardsWithContainerDefaults.args = threeCardsWithDefaultsArgs;

export const TwoCards = Template.bind({});
TwoCards.args = twoCardsArgs;

export const OneCard = Template.bind({});
OneCard.args = oneCardArgs;
