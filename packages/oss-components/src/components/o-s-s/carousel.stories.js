import { hbs } from 'ember-cli-htmlbars';

const Template = (args) => ({
  template: hbs`
    <OSS::Carousel @showIndicators={{this.showIndicators}} @showControls={{this.showControls}}
                   @animationStyle={{this.animationStyle}} @buttonIcon={{this.buttonIcon}}
                   @autoPlay={{this.autoPlay}} @indicatorsPosition={{this.indicatorsPosition}}
                   @loop={{this.loop}} @onSwipe={{this.onSwipe}}
                   @onPageChange={{this.onPageChange}}>
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

const defaultArgs = {
  buttonIcon: undefined,
  animationStyle: undefined,
  showIndicators: undefined,
  showControls: undefined,
  autoPlay: undefined,
  loop: true,
  indicatorsPosition: 'top'
};

export default {
  title: 'Components/OSS::Carousel',
  component: 'carousel',
  render: Template,
  args: defaultArgs,
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
    },
    loop: {
      description: 'Allows the carousel to render the arrow to go from the last slide to the first and vice versa.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: 'true' }
      },
      control: { type: 'boolean' }
    },
    onPageChange: {
      description: 'Action triggered when the page changes',
      table: {
        category: 'Actions',
        type: {
          summary: 'onPageChange(): void'
        }
      }
    },
    onSwipe: {
      description:
        'Action triggered when a valid swipe is performed, with the direction of the swipe. Providing it enables swiping to change pages. A swipe is ignored if it is shorter than 50px or mostly vertical. When `loop` is false, swiping past the first or last page does not change the page.',
      table: {
        category: 'Actions',
        type: {
          summary: "onSwipe(direction: 'left' | 'right'): void"
        }
      }
    },
    indicatorsPosition: {
      description: 'Whether to show the page indicators at the top or the bottom of the carousel.',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'top' }
      },
      options: ['top', 'bottom'],
      control: { type: 'select' }
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          'An OSS-components implementation of a Carousel component.<br/>The `:page` named-block should be use to yield the pages that will be displayed.<br/>Each page requires a `page` class.<br/>The `data-control-name` set on the component is used as the prefix of the controls ones: `{prefix}-control-left` and `{prefix}-control-right`.'
      }
    }
  }
};

export const Default = {};
