import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

const SizeTypes = ['alert', 'error'];

export default {
  title: 'Components/OSS::Dialog',
  component: 'dialog',
  argTypes: {
    title: {
      type: { required: true },
      description: 'The dialog title',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    skin: {
      description: 'The dialog skin',
      table: {
        type: {
          summary: SizeTypes.join('|')
        },
        defaultValue: { summary: 'alert' }
      },
      options: SizeTypes,
      control: { type: 'select' }
    },
    mainAction: {
      type: { required: true },
      description: 'A hash with the main action button properties',
      table: {
        type: {
          summary: '{ label: string, action: () => unknown }'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: {
        type: 'object'
      }
    },
    secondaryAction: {
      type: { required: true },
      description: 'A hash with the secondary action button properties',
      table: {
        type: {
          summary: '{ label: string, action: () => unknown }'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: {
        type: 'object'
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
  skin: undefined,
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
      @skin={{this.skin}}
      @mainAction={{this.mainAction}}
      @secondaryAction={{this.secondaryAction}} />
  `,
  context: args
});

export const Usage = BasicUsageTemplate.bind({});
Usage.args = defaultArgs;
