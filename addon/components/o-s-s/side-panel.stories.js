import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

const SizeTypes = ['sm', 'md'];

export default {
  title: 'Components/OSS::SidePanel',
  component: 'side-panel',
  argTypes: {
    visible: {
      description: 'The side panel visibility state',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'boolean' }
    },
    backdrop: {
      description: 'The side panel backdrop state',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'boolean' }
    },
    size: {
      description: `The size of the side panel sm (480px) or md (540px). Defaults to sm.`,
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'sm' }
      },
      options: SizeTypes,
      control: { type: 'select' }
    },
    onClose: {
      description: 'The callback that closes the side panel',
      table: {
        category: 'Actions',
        type: {
          summary: 'onClose(): void'
        }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: `A side panel to display various contents.`
      }
    }
  }
};

const defaultArgs = {
  visible: true,
  backdrop: true,
  size: 'sm',
  onClose: action('onClose')
};

const BasicUsageTemplate = (args) => ({
  template: hbs`
      <OSS::SidePanel @visible={{this.visible}} @backdrop={{this.backdrop}} @size={{this.size}} @onClose={{this.onClose}} >
        <:header>
          Header goes here
        </:header>
          <:content>
          Content goes here
        </:content>
        <:footer>
          Footer goes here
        </:footer>
      </OSS::SidePanel>
  `,
  context: args
});

export const Usage = BasicUsageTemplate.bind({});

Usage.args = defaultArgs;
