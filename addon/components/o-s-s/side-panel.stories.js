import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

const SizeTypes = ['sm', 'md'];

export default {
  title: 'Components/OSS::SidePanel',
  component: 'side-panel',
  argTypes: {
    visible: {
      description: 'The side panel visibility state. True displays the side panel, false closes it.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'boolean' }
    },
    backdrop: {
      description: 'Whether or not to display a backdrop behind the side-panel.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'boolean' }
    },
    size: {
      description: `The width of the side panel: sm (480px) or md (540px). Defaults to sm.`,
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
      description: 'A callback triggered when the backdrop has been clicked.',
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
        component: `A side panel to display various contents. Features a header, a content and a footer named blocks.`
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
        <:main>
        Content goes here
      </:main>
      <:footer>
        Footer goes here
      </:footer>
    </OSS::SidePanel>
  `,
  context: args
});

export const Usage = BasicUsageTemplate.bind({});

Usage.args = defaultArgs;
