import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/OSS::Attribute::RevealableEmail',
  component: 'revealable-email',
  argTypes: {
    tooltip: {
      description:
        'Any string passed in here will display an info icon next to the label with the defined contents as tooltip.',
      table: {
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    lockTooltip: {
      description: 'Overwrites the default "Reveal email" tooltip that is visible on component hover',
      table: {
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    onRevealEmail: {
      description:
        'The callback method triggered when a user clicks on the lock icon. It should return a promise which allows the spinner to stop being displayed when needed',
      type: { required: true },
      table: {
        category: 'Actions',
        type: {
          summary: 'onRevealEmail(): Promise<void>'
        }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          'Member of the Attribute displays. The OSS::Attribute::RevealableEmail displays a fake hidden email address and exposes a method to unhide the content.'
      }
    }
  }
};

const defaultArgs = {
  tooltip: 'This is the main tooltip',
  lockTooltip: undefined,
  onRevealEmail: action('onSearch')
};

const Template = (args) => ({
  template: hbs`
    <div style="padding: 12px; background: white">
      <OSS::Attribute::RevealableEmail @tooltip={{this.tooltip}} @lockTooltip={{this.lockTooltip}}
                                       @onRevealEmail={{this.onRevealEmail}} />
    </div>
  `,
  context: args
});

export const Default = Template.bind({});
Default.args = defaultArgs;
