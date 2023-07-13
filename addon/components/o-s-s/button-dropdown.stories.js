import { action } from '@storybook/addon-actions';
import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/OSS::ButtonDropdown',
  component: 'button-dropdown',
  argTypes: {
    icon: {
      description: 'The icon displayed left to the button label. Font Awesome class, for example: far fa-user',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    label: {
      description: 'The label of the button label',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    mainAction: {
      description: 'An action that is triggered on click in the left part of the button.',
      table: {
        category: 'Actions',
        type: {
          summary: 'mainAction(): void'
        }
      },
      control: { type: 'function' }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'A button that provides multiple actions in dropdown menu.'
      },
      iframeHeight: 120
    }
  }
};

const defaultArgs = {
  icon: 'far fa-user',
  label: 'Actions',
  mainAction: null
};

const withMainActionArgs = {
  icon: 'far fa-user',
  label: 'Actions',
  mainAction: action('mainAction')
};

const Template = (args) => ({
  template: hbs`
    <OSS::ButtonDropdown @icon={{this.icon}} @label={{this.label}} @mainAction={{this.mainAction}}>
      <:items>
        <div class="oss-button-dropdown__item">
          <OSS::Icon @style="solid" @icon="fa-share" /> Share
        </div>
      </:items>
    </OSS::ButtonDropdown>
  `,
  context: args
});

export const Usage = Template.bind({});
Usage.args = defaultArgs;

export const WithMainActionArgs = Template.bind({});
WithMainActionArgs.args = withMainActionArgs;
