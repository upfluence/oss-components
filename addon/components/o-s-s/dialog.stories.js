import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

const SkinTypes = ['alert', 'error', 'primary'];

export default {
  title: 'Components/OSS::Dialog',
  component: 'dialog',
  argTypes: {
    title: {
      type: { required: true },
      description: 'The dialog title',
      table: {
        type: {
          summary: 'string | safeString'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    skin: {
      description: 'The dialog skin',
      table: {
        type: {
          summary: SkinTypes.join('|')
        },
        defaultValue: { summary: 'alert' }
      },
      options: SkinTypes,
      control: { type: 'select' }
    },
    icon: {
      description: 'The dialog icon',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'fa-warning' }
      },
      control: { type: 'text' }
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
  icon: 'fa-warning',
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
      @icon={{this.icon}}
      @mainAction={{this.mainAction}}
      @secondaryAction={{this.secondaryAction}} />
  `,
  context: args
});

export const Usage = BasicUsageTemplate.bind({});
Usage.args = defaultArgs;
