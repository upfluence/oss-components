import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/OSS::Dialog',
  component: 'dialog',
  argTypes: {
    title: {
      description: 'The dialog title',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    mainAction: {
      description: 'A hash with the main action button properties',
      table: {
        type: {
          summary: '{ label: string, action: () => unknown }[]'
        }
      },
      control: {
        type: '{ label: string, action: () => unknown }[]'
      }
    },
    secondaryAction: {
      description: 'A hash with the secondary action button properties',
      table: {
        type: {
          summary: '{ label: string, action: () => unknown }[]'
        }
      },
      control: {
        type: '{ label: string, action: () => unknown }[]'
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'A component that displays a dialog with a title and two buttons.'
      }
    }
  }
};

const defaultArgs = {
  title: 'You are about to discard your changes',
  mainAction: {
    label: 'Discard',
    action: action('discard')
  },
  secondaryAction: {
    label: 'Cancel',
    action: action('cancel')
  }
};

const BasicUsageTemplate = (args) => ({
  template: hbs`
    <OSS::Dialog
      @title={{this.title}}
      @mainAction={{this.mainAction}}
      @secondaryAction={{this.secondaryAction}} />
  `,
  context: args
});

export const Usage = BasicUsageTemplate.bind({});
Usage.args = defaultArgs;
