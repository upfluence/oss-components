import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/OSS::Carousel',
  component: 'carousel',
  argTypes: {
    buttonIcon: {
      description:
        'Allows setting a custom icon for the button. The icon should be a FontAwesome icon, e.g. "fas fa-robot".',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'fas fa-circle' }
      },
      control: { type: 'text' }
    },
    animationStyle: {
      description: 'The style of the animation. Can be either shift or slide.',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'shift' }
      },
      options: ['shift', 'slide'],
      control: { type: 'select' }
    },
    showIndicators: {
      description: 'Whether to show the indicators or not. The "indicators" are the bullet points above the carousel.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: 'true' }
      },
      control: { type: 'boolean' }
    },
    showControls: {
      description:
        'Whether to show the controls or not. The "controls" are the arrows/chevrons on the sides of the carousel. Overlay displays within the carousel, outside displays outside the carousel by adding padding around the pages.',
      table: {
        type: {
          summary: 'text'
        },
        defaultValue: { summary: 'undefined' }
      },
      options: [undefined, 'overlay', 'outside'],
      control: { type: 'select' }
    },
    autoPlay: {
      description:
        'Allows the carousel to automatically play through the slides. The parameter is the time in milliseconds between slides.',
      table: {
        type: {
          summary: 'number'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'number' }
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          'An OSS-components implementation of a Carousel component.<br/>The `:page` named-block should be use to yield the pages that will be displayed.<br/>Each page requires a `page` class.'
      }
    }
  }
};

const defaultArgs = {
  buttonIcon: undefined,
  animationStyle: undefined,
  showIndicators: undefined,
  showControls: undefined,
  autoPlay: undefined
};

const Template = (args) => ({
  template: hbs`
    <OSS::Carousel @showIndicators={{this.showIndicators}} @showControls={{this.showControls}}
                   @animationStyle={{this.animationStyle}} @buttonIcon={{this.buttonIcon}}
                   @autoPlay={{this.autoPlay}}>
      <:pages>
        <div class="page">
          <OSS::Banner @icon="fas fa-image" @title="PAGE 1"/>
        </div>
        <div class="page">
          <OSS::Banner @icon="fas fa-image" @title="PAGE 2"/>
        </div>
        <div class="page">
          <OSS::Banner @icon="fas fa-image" @title="PAGE 1"/>
        </div>
      </:pages>
    </OSS::Carousel>
  `,
  context: args
});

export const Default = Template.bind({});
Default.args = defaultArgs;
