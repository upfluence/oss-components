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
    square: {
      description: 'Optional - An argument that makes the button shape squared',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: 'false' }
      },
      control: { type: 'boolean' }
    },
    hideArrow: {
      description: 'Optional - An argument that displays the dropdown arrow icon',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: 'false' }
      },
      control: { type: 'boolean' }
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
  square: false,
  hideArrow: false,
  mainAction: null
};

const withMainActionArgs = {
  icon: 'far fa-user',
  label: 'Actions',
  square: false,
  hideArrow: false,
  mainAction: action('mainAction')
};

const Template = (args) => ({
  template: hbs`
    <OSS::ButtonDropdown @icon={{this.icon}} @label={{this.label}} @mainAction={{this.mainAction}} @square={{this.square}} @hideArrow={{this.hideArrow}}>
      <:items>
        <div class="oss-button-dropdown__item font-color-gray-900">
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
