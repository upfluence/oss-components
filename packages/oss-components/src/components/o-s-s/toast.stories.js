import { hbs } from 'ember-cli-htmlbars';
import { fn } from 'storybook/test';

const ToastTypes = ['info', 'success', 'warning', 'error'];

export default {
  title: 'Components/OSS::Toast',
  component: 'o-s-s/toast',
  argTypes: {
    type: {
      description: 'Type of the toast, sets its icon and counter color',
      table: {
        type: { summary: ToastTypes.join('|') }
      },
      options: ToastTypes,
      control: { type: 'select' }
    },
    title: {
      description: 'The value of the title',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    subtitle: {
      description: 'The value of the subtitle',
      table: {
        type: { summary: 'string' }
      },
      control: { type: 'text' }
    },
    badge: {
      description: 'Displays a badge instead of the type icon. Only one of image, icon or text is used, in that order',
      table: {
        type: { summary: '{ image?: string; icon?: string; text?: string }' },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'object' }
    },
    timeout: {
      description: 'Duration in milliseconds before the toast clears itself, or "none" to keep it displayed',
      table: {
        type: { summary: "number | 'none'" },
        defaultValue: { summary: '5000' }
      },
      control: { type: 'text' }
    },
    onClick: {
      description: 'Function called the first time the toast is clicked',
      table: {
        category: 'Actions',
        type: { summary: 'onClick(event: MouseEvent): void' }
      }
    },
    onClear: {
      description: 'Function called once the toast has been closed and its exit animation is over',
      table: {
        category: 'Actions',
        type: { summary: 'onClear(): void' }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'Toast notification, displayed through the `toast` service.'
      },
      iframeHeight: 150
    }
  }
};

const defaultArgs = {
  type: 'info',
  title: 'Title',
  subtitle: 'I am a subtitle in the toast',
  badge: undefined,
  timeout: 'none',
  onClick: fn(),
  onClear: fn()
};

const Template = (args) => ({
  template: hbs`
    <div class="toasts-container">
      <OSS::Toast @type={{this.type}} @title={{this.title}} @subtitle={{this.subtitle}} @badge={{this.badge}}
                  @timeout={{this.timeout}} @onClick={{this.onClick}} @onClear={{this.onClear}} />
    </div>
  `,
  context: args
});

export const BasicUsage = Template.bind({});
BasicUsage.args = defaultArgs;

export const WithBadge = Template.bind({});
WithBadge.args = { ...defaultArgs, badge: { icon: 'fas fa-bell' } };

export const WithTimeout = Template.bind({});
WithTimeout.args = { ...defaultArgs, timeout: 5000 };
