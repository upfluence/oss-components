import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

const SkinTypes = ['success', 'info', 'warning', 'error'];

export default {
  title: 'Components/OSS::Alert',
  component: 'alert',
  argTypes: {
    skin: {
      description: 'Skin of the alert',
      table: {
        type: {
          summary: SkinTypes.join('|')
        },
        defaultValue: { summary: 'info' }
      },
      options: SkinTypes,
      control: { type: 'select' }
    },
    title: {
      description: 'The value of the title',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    subtitle: {
      description: 'The value of the subtitle',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    plain: {
      description: 'When plain is true, a gray background color is displayed, otherwise a white one',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' }
      },
      control: {
        type: 'boolean'
      }
    },
    closable: {
      description: 'When enabled, the alert can be closed by clicking on the cross icon',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      control: {
        type: 'boolean'
      }
    },
    onClose: {
      description: 'Function to be called with the alert is closed',
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
        component: 'Used for displaying a title and a subtitle in layouts.'
      },
      iframeHeight: 120
    }
  }
};

const defaultArgs = {
  skin: 'info',
  title: 'Title',
  subtitle: 'I am a subtitle in the alert',
  plain: true,
  closable: false,
  onClose: action('onClose')
};

const Template = (args) => ({
  template: hbs`
      <OSS::Alert @skin={{this.skin}} @title={{this.title}} @subtitle={{this.subtitle}} @plain={{this.plain}} 
                  @closable={{this.closable}} />
  `,
  context: args
});

const ExtraContentTemplate = (args) => ({
  template: hbs`
      <OSS::Alert @skin={{this.skin}} @title={{this.title}} @subtitle={{this.subtitle}} @plain={{this.plain}} 
                  @closable={{this.closable}}>
        <:extra-content>
          <div class="fx-row fx-gap-px-12">
            <OSS::Link @label="Link1" />
            <OSS::Link @label="Link2" />
          </div>
        </:extra-content>
      </OSS::Alert>
  `,
  context: args
});

export const BasicUsage = Template.bind({});
BasicUsage.args = defaultArgs;

export const UsageExtraContent = ExtraContentTemplate.bind({});
UsageExtraContent.args = defaultArgs;

const noTitleArgs = {
  skin: 'info',
  subtitle: 'I am a subtitle in the alert',
  plain: true,
  closable: false,
  onClose: action('onClose')
};

export const NoTitle = Template.bind({});
NoTitle.args = noTitleArgs;
