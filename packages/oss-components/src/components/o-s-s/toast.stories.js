import { htmlSafe } from '@ember/template';

import { hbs } from 'ember-cli-htmlbars';
import { fn } from 'storybook/test';

const ToastTypes = ['info', 'success', 'warning', 'error'];

export default {
  title: 'Components/OSS::Toast',
  component: 'o-s-s/toast',
  argTypes: {
    type: {
      description: 'Type of the toast, sets its colors, icon and counter',
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
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' }
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
    link: {
      description:
        "Displays an OSS::Link under the subtitle, with the same arguments. `transitionTo` goes through the router of the toast service's owner, the host app when used from an engine",
      table: {
        type: {
          summary: '{ label: string; icon?: string; link?: { href: string; target: string }; transitionTo?: string }'
        },
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
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/N7SDuH9mvC9zTlsLN49N4L/2.0-UI-Kit-%F0%9F%92%A0?node-id=9112-2673'
    }
  }
};

const defaultArgs = {
  type: 'info',
  title: 'Title',
  subtitle: 'I am a subtitle in the toast',
  badge: undefined,
  link: undefined,
  timeout: 'none',
  onClick: fn(),
  onClear: fn()
};

const Template = (args) => ({
  template: hbs`
    <div class="toasts-container">
      <OSS::Toast @type={{this.type}} @title={{this.title}} @subtitle={{this.subtitle}} @badge={{this.badge}}
                  @link={{this.link}} @timeout={{this.timeout}} @onClick={{this.onClick}} @onClear={{this.onClear}} />
    </div>
  `,
  context: args
});

export const BasicUsage = Template.bind({});
BasicUsage.args = defaultArgs;

export const WithBadge = Template.bind({});
WithBadge.args = { ...defaultArgs, badge: { icon: 'fas fa-bell' } };

export const WithLink = Template.bind({});
WithLink.args = {
  ...defaultArgs,
  link: { label: 'Learn more', link: { href: 'https://www.upfluence.com', target: '_blank' } }
};

export const WithInlineLink = Template.bind({});
WithInlineLink.args = {
  ...defaultArgs,
  subtitle: htmlSafe('I am a subtitle with <a href="https://www.upfluence.com" target="_blank">an inline link</a>')
};

export const WithTimeout = Template.bind({});
WithTimeout.args = { ...defaultArgs, timeout: 5000 };
