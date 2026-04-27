import { hbs } from 'ember-cli-htmlbars';

const ColorVariants = ['blue', 'violet', 'yellow'];
const ShadowVariants = ['sm', 'lg'];

export default {
  title: 'Components/OSS::FeatureCard',
  component: 'feature-card',
  argTypes: {
    title: {
      description: 'Card title',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' },
      type: { required: true }
    },
    description: {
      description: 'Card description',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' },
      type: { required: true }
    },
    image: {
      description: 'Image object including src and optional alt',
      table: {
        type: { summary: '{ src: string; alt?: string }' },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'object' },
      type: { required: true }
    },
    colorVariant: {
      description: 'Card background color variant',
      table: {
        type: { summary: ColorVariants.join('|') },
        defaultValue: { summary: 'violet' }
      },
      options: ColorVariants,
      control: { type: 'select' }
    },
    shadowVariant: {
      description: 'Card shadow variant',
      table: {
        type: { summary: ShadowVariants.join('|') },
        defaultValue: { summary: 'sm' }
      },
      options: ShadowVariants,
      control: { type: 'select' }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'Displays a card with title, description and illustration. It includes color and shadow variants.'
      }
    }
  }
};

const defaultArgs = {
  title: 'Audience & content insights',
  description: 'Pull demographics and media performance into your BI to target smarter and report faster.',
  image: {
    src: '/@upfluence/oss-components/assets/images/no-image.svg',
    alt: 'No image illustration'
  },
  colorVariant: 'violet',
  shadowVariant: 'lg'
};

const Template = (args) => ({
  template: hbs`
      <OSS::FeatureCard
        @title={{this.title}}
        @description={{this.description}}
        @image={{this.image}}
        @colorVariant={{this.colorVariant}}
        @shadowVariant={{this.shadowVariant}}
      />
  `,
  context: args
});

export const Default = Template.bind({});
Default.args = defaultArgs;
