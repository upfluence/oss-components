import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/OSS::SidePanel::Header',
  component: 'header',
  argTypes: {
    title: {
      description: 'The side panel header title',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    onClose: {
      description: 'The callback called when the cross button is pressed.',
      table: {
        category: 'Actions',
        type: {
          summary: 'onClose(): void'
        }
      }
    },
    onReturn: {
      description: 'The callback triggered when the return button is pressed.',
      table: {
        category: 'Actions',
        type: {
          summary: 'onReturn(): void'
        }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: `A header for the side panel component.`
      }
    }
  }
};

const defaultArgs = {
  title: 'Side panel header title',
  onClose: action('onClose'),
  onReturn: action('onReturn')
};

const BasicUsageTemplate = (args) => ({
  template: hbs`
      <div class="fx-row fx-xalign-center background-color-white" style={{"width: 480px; padding: 18px 24px;"}}>
        <OSS::SidePanel::Header @title={{this.title}} @onClose={{this.onClose}} @onReturn={{this.onReturn}} />
      </div>
  `,
  context: args
});

export const Usage = BasicUsageTemplate.bind({});

Usage.args = defaultArgs;
