import hbs from 'htmlbars-inline-precompile';
import { action } from '@storybook/addon-actions';

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
        defaultValue: { summary: false }
      },
      control: { type: 'text' }
    },
    close: {
      description: 'The callback that closes the modal-dialog'
    },
    subtitle: {
      description: '[OPTIONAL] The modal dialog subtitle',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: false }
      },
      control: { type: 'text' }
    },
    size: {
      description: `[OPTIONAL] The size of the modal sm (600px) or md (700px). Defaults to sm.`,
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: false }
      },
      control: { type: 'string' }
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

const BasicUsageTemplate = (args) => ({
  template: hbs`
      <OSS::ModalDialog @title={{this.title}} @close={{this.close}} @subtitle={{this.subtitle}} @size={{this.size}}>
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
Usage.args = {
  title: 'Modal Dialog',
  subtitle: 'This is a subtitle',
  close: action('onModalClose'),
  size: 'md'
};
