import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

const SizeTypes = ['sm', 'md'];

export default {
  title: 'Components/OSS::ModalDialog',
  component: 'modal-dialog',
  argTypes: {
    title: {
      description: 'The modal dialog title',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    subtitle: {
      description: '[OPTIONAL] The modal dialog subtitle',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    icon: {
      description: 'Font Awesome class, for example: far fa-envelope-open',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    size: {
      description: `[OPTIONAL] The size of the modal sm (600px) or md (700px). Defaults to sm.`,
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'sm' }
      },
      options: SizeTypes,
      control: { type: 'select' }
    },
    close: {
      description: 'The callback that closes the modal-dialog',
      table: {
        category: 'Actions',
        type: {
          summary: 'close(): void'
        }
      }
    },
    enqueue: {
      description:
        'Checks if an instance of oss-modal-dialog is already running and, if true, waits until the previous instance is closed before displaying the current one.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'boolean' }
    },
    disableClickOutside: {
      description:
        '[OPTIONAL] Disable or not the ability to close the modal when clicking outside of the modal dialog.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: 'false' }
      },
      control: { type: 'boolean' }
    }
  },
  parameters: {
    docs: {
      description: {
        component: `A lightweight version of the OSS Modal. Used mostly to confirm user actions.<br><br>
        Notes:<br>
        - The footer part of the component defaults to fx-row fx-gap-px-12 in desktop mode.<br>
        - In mobile mode it defaults to fx-col (with column-reverse to have the cancel buttons at the bottom) and fx-gap-px-9`
      }
    }
  }
};

const defaultArgs = {
  title: 'Modal Dialog',
  subtitle: 'This is a subtitle',
  size: 'sm',
  icon: null,
  close: action('close'),
  enqueue: undefined,
  disableClickOutside: undefined
};

const BasicUsageTemplate = (args) => ({
  template: hbs`
      <OSS::ModalDialog @title={{this.title}} @icon={{this.icon}} @close={{this.close}} @subtitle={{this.subtitle}}
                        @size={{this.size}} @enqueue={{this.enqueue}} @disableClickOutside={{this.disableClickOutside}}>
        <:content>
          Content goes here
        </:content>
        <:footer>
          Footer goes here
        </:footer>
      </OSS::ModalDialog>
  `,
  context: args
});

const WithIllustrationTemplate = (args) => ({
  template: hbs`
      <OSS::ModalDialog @title={{this.title}} @close={{this.close}} @subtitle={{this.subtitle}} @size={{this.size}}
                        @icon={{this.icon}} @enqueue={{this.enqueue}} @disableClickOutside={{this.disableClickOutside}}>
        <:illustration>
          This will contain an illustration.
        </:illustration>
        <:content>
          Content goes here
        </:content>
        <:footer>
          Footer goes here
        </:footer>
      </OSS::ModalDialog>
  `,
  context: args
});

export const Usage = BasicUsageTemplate.bind({});
export const WithIlllustration = WithIllustrationTemplate.bind({});

Usage.args = defaultArgs;
WithIlllustration.args = defaultArgs;
