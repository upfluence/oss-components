import hbs from 'htmlbars-inline-precompile';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/OSS::Modal',
  component: 'modal',
  argTypes: {
    title: {
      description: 'The title in the header of the modal',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    options: {
      description:
        'The options available:<br>' +
        '- centered: boolean<br>' +
        '- modalClass: string<br>' +
        '- header: boolean<br>' +
        '- borderlessHeader: boolean<br>' +
        '- tabindex: number',
      table: {
        type: {
          summary: 'object'
        },
        control: { type: 'object' }
      }
    },
    onClose: {
      description: 'A callback that sends when clicking on closing button',
      table: {
        category: 'Actions',
        type: {
          summary: 'onClose():void'
        }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'A configurable modal component.'
      },
      iframeHeight: 230
    }
  }
};

const defaultOptions = {
  centered: false,
  container: null,
  modalClass: null,
  header: true,
  borderlessHeader: false,
  tabindex: -1
};

const defaultArgs = {
  title: 'Hello',
  options: defaultOptions,
  onClose: action('onModalClose')
};

const Template = (args) => ({
  template: hbs`
    <OSS::Modal @title={{this.title}} @onClose={{this.onClose}} @options={{this.options}}>
      <div class="modal-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
      </div>

      <div class="modal-footer">
        <OSS::Button @skin="primary" @label="Action button" /> 
      </div>
    </OSS::Modal>
  `,
  context: args
});

export const Default = Template.bind({});
Default.args = defaultArgs;

export const Centered = Template.bind({});
Centered.args = {
  ...defaultArgs,
  options: {
    ...defaultOptions,
    ...{ centered: true }
  }
};

export const BorderelessHeader = Template.bind({});
BorderelessHeader.args = {
  ...defaultArgs,
  options: {
    ...defaultOptions,
    ...{ borderlessHeader: true }
  }
};

export const NoHeader = Template.bind({});
NoHeader.args = {
  ...defaultArgs,
  options: {
    ...defaultOptions,
    ...{ header: false }
  }
};
