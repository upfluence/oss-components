import { action } from '@storybook/addon-actions';
import hbs from 'htmlbars-inline-precompile';

export default {
  title: 'Components/OSS::ContextMenu::Panel',
  component: 'o-s-s/context-menu/panel',
  argTypes: {
    items: {
      type: { required: true },
      description: 'An array of context menu items to be displayed in the panel',
      table: {
        type: { summary: 'ContextMenuItem[]' }
      },
      control: { type: 'object' }
    },
    referenceTarget: {
      description: 'The reference HTMLElement to which the context menu panel is anchored',
      table: {
        type: { summary: 'HTMLElement' },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'object' }
    },
    offset: {
      type: { required: false },
      description:
        'The offset distance between the context menu panel and its reference target. Can be a number or an object specifying mainAxis and crossAxis offsets.',
      table: {
        type: { summary: 'number | { mainAxis: number; crossAxis: number }' },
        defaultValue: { summary: 0 }
      },
      control: { type: 'object' }
    },
    placement: {
      type: { required: false },
      description:
        'The placement of the context menu panel relative to its reference target. Options are "bottom-start" or "right-start".',
      table: {
        type: { summary: '"bottom-start" | "right-start"' },
        defaultValue: { summary: 'bottom-start' }
      },
      control: {
        type: 'select',
        options: ['bottom-start', 'right-start']
      }
    },
    onMouseLeave: {
      type: { required: false },
      description: 'Callback function called when the mouse leaves the context menu panel',
      table: {
        category: 'Actions',
        type: { summary: 'onMouseLeave(event: MouseEvent): void' }
      }
    },
    postRender: {
      table: {
        disable: true
      }
    },
    isInitialized: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          'The `OSS::ContextMenu::Panel` component displays a context menu panel anchored to a specified reference target. It supports nested submenus, customizable placement, and offset options. The panel can trigger actions when menu items are selected and handle mouse leave events.'
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
  offset: 6,
  placement: 'bottom-start',
  onMouseLeave: action('onMouseLeave'),
  isInitialized: false,
  postRender(self, element) {
    self.set('referenceTarget', element);
    self.set('isInitialized', true);
  }
};

const Template = (args) => ({
  template: hbs`
    <div style="background-color: #ffff;" {{did-insert (fn this.postRender this)}}>
      {{#if this.isInitialized}}
        <OSS::ContextMenu::Panel 
          @items={{this.items}}
          @referenceTarget={{this.referenceTarget}}
          @offset={{this.offset}}
          @placement="bottom-start"
          @onMouseLeave={{this.onMouseLeave}}
        />
      {{/if}}
    </div>
  `,
  context: args
});

export const BasicUsage = Template.bind({});
BasicUsage.args = defaultArgs;
