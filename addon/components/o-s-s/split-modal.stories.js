import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/OSS::SplitModal',
  component: 'split-modal',
  argTypes: {
    close: {
      description: 'The callback that closes the split-modal',
      table: {
        category: 'Actions',
        type: {
          summary: 'close(): void'
        }
      }
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
        component: `A modal split into two panels with the right one used mainly for previewing content.<br>
        The left part of the panel can be used for user actions.<br>
        The footer is optional and is visible or not depending on the presence of the \`<:footer>\` named-block.<br><br>
        Notes:<br>
        - \`<:content>\` and \`<:preview>\` named-blocks are mandatory
        - The footer part of the component defaults to fx-row fx-gap-px-12 in desktop mode.<br>
        - In mobile mode, it defaults to fx-col (with column-reverse to have the cancel buttons at the bottom) and fx-gap-px-9
        - In mobile mode, the preview panel is hidden.`
      }
    }
  }
};

const defaultArgs = {
  close: action('close'),
  disableClickOutside: false
};

const BasicUsageTemplate = (args) => ({
  template: hbs`
      <OSS::SplitModal @close={{this.close}} @disableClickOutside={{this.disableClickOutside}}>
        <:content>
          Content goes here
        </:content>
        <:footer>
          Footer goes here
        </:footer>
        <:preview>
          Preview goes here
        </:preview>
      </OSS::SplitModal>
  `,
  context: args
});

export const Usage = BasicUsageTemplate.bind({});
Usage.args = defaultArgs;
