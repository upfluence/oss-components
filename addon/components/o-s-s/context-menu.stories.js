import { action } from '@storybook/addon-actions';
import hbs from 'htmlbars-inline-precompile';

const SkinTypes = [
  'default',
  'primary',
  'secondary',
  'destructive',
  'alert',
  'success',
  'instagram',
  'facebook',
  'youtube',
  'primary-gradient',
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
  title: 'Components/OSS::ContextMenu',
  component: 'o-s-s/context-menu',
  argTypes: {
    items: {
      type: { required: true },
      description: 'An array of context menu items to be displayed in the panel',
      table: {
        type: { summary: 'ContextMenuItem[]' }
      },
      control: { type: 'object' }
    },
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
    loadingOptions: {
      description: 'Options to configure the loading state',
      table: {
        type: {
          summary: '{ showLabel?: boolean }'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'object' }
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
    iconUrl: {
      description: 'Url of an icon that will be shown within the button',
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
    },
    disabled: {
      description:
        'This is a non-ember parameter, it is passed to the HTML input tag using the splattributes. (It should not be passed with `@` prefix)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'undefined' }
      },
      control: {
        type: 'boolean'
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          'The `OSS::ContextMenu` component provides a button that, when clicked, displays a context menu with various options. It supports nested sub-menus, loading states, and customizable appearance through skins and sizes.'
      }
    }
  }
};

const items = [
  { title: 'Item 1', action: () => console.log('Item 1 selected') },
  {
    title: 'Item 2',
    action: () => console.log('Item 2 selected'),
    items: [{ title: 'Sub Item 1', action: () => console.log('Sub Item 1 selected') }]
  },
  {
    title: 'Item 3',
    action: () => console.log('Item 3 selected')
  }
];

const defaultArgs = {
  items: items,
  label: 'Open menu',
  skin: 'default',
  loading: false,
  icon: 'far fa-envelope-open',
  theme: 'light',
  size: 'md',
  square: false,
  countDown: undefined,
  loadingOptions: undefined,
  iconUrl: undefined,
  disabled: false
};

const Template = (args) => ({
  template: hbs`<OSS::ContextMenu @items={{this.items}}
                                  @label={{this.label}} 
                                  @skin={{this.skin}} 
                                  @loading={{this.loading}}
                                  @icon={{this.icon}}
                                  @theme={{this.theme}}
                                  @square={{this.square}}
                                  @countDown={{this.countDown}}
                                  @loadingOptions={{this.loadingOptions}}
                                  @iconUrl={{this.iconUrl}}
                                  @size={{this.size}}
                                  disabled={{this.disabled}}
                                  />`,
  context: args
});

export const BasicUsage = Template.bind({});
BasicUsage.args = defaultArgs;
