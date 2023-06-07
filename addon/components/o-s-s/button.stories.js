import hbs from 'htmlbars-inline-precompile';

const SkinTypes = [
  'default',
  'primary',
  'secondary',
  'tertiary',
  'destructive',
  'alert',
  'success',
  'instagram',
  'facebook',
  'youtube',
  'xtd-cyan',
  'xtd-orange',
  'xtd-yellow',
  'xtd-lime',
  'xtd-blue',
  'xtd-violet'
];
const SizeTypes = ['xs', 'sm', 'md', 'lg'];
const ThemeTypes = ['light', 'dark'];

export default {
  title: 'Components/OSS::Button',
  component: 'button',
  argTypes: {
    skin: {
      description: 'Adjust appearance',
      table: {
        type: {
          summary: SkinTypes.join('|')
        },
        defaultValue: { summary: 'default' }
      },
      options: SkinTypes,
      control: { type: 'select' }
    },
    size: {
      description: 'Adjust size',
      table: {
        type: {
          summary: SizeTypes.join('|')
        },
        defaultValue: { summary: 'null' }
      },
      options: SizeTypes,
      control: { type: 'select' }
    },
    loading: {
      description: 'Display loading state',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: 'false' }
      },
      control: { type: 'boolean' }
    },
    label: {
      description: 'Text content of the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' }
      },
      control: {
        type: 'text'
      }
    },
    icon: {
      description: 'Font Awesome class, for example: far fa-envelope-open',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' }
      },
      control: {
        type: 'text'
      }
    },
    square: {
      description: 'Displays the button as a square. Useful for icon buttons.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      control: {
        type: 'boolean'
      }
    },
    theme: {
      description: 'Whether the button is being on a dark background or not',
      table: {
        type: {
          summary: ThemeTypes.join('|')
        },
        defaultValue: { summary: 'light' }
      },
      options: ThemeTypes,
      control: { type: 'select' }
    },
    countDown: {
      description:
        'Definition of countDown object, it takes 3 keys:<br/>' +
        "- 'callback' (mandatory): function to call at the end<br/>" +
        "- 'time' (optional): time between execute callback. It is representing entire second in millisecond, for exemple 1000, 2000 or 5000<br/>" +
        "- 'step' (optional): the step value, it should be in the same unit as the time",
      table: {
        type: {
          summary: '{ callback: () => {}, time?: number, step?: number }'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'object' }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'The OSS version of the button component. Configurable & skinable.'
      }
    }
  }
};

const defaultArgs = {
  skin: 'default',
  size: 'md',
  loading: false,
  label: 'Label',
  icon: 'far fa-envelope-open',
  theme: 'light',
  square: false,
  countDown: undefined
};

const Template = (args) => ({
  template: hbs`
    <OSS::Button
      @skin={{this.skin}} @size={{this.size}} @loading={{this.loading}} @label={{this.label}} @icon={{this.icon}}
      @theme={{this.theme}} @square={{this.square}} @countDown={{this.countDown}} @theme={{this.theme}} />
  `,
  context: args
});

export const Default = Template.bind({});
Default.args = defaultArgs;

export const WithCountDown = Template.bind({});
WithCountDown.args = {
  ...defaultArgs,
  ...{
    countDown: {
      callback: function () {
        alert('Count down finish');
      },
      time: 3000
    }
  }
};
