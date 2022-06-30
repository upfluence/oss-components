import hbs from 'htmlbars-inline-precompile';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/OSS::Modal',
  component: 'modal',
  args: {
    title: 'Modal Title'
  },
  argTypes: {
    title: {
      control: 'text'
    },
    options: {}
  },
  parameters: {
    previewTabs: {
      'storybook/docs/panel': {
        hidden: true
      }
    }
  }
};

const defaultArgs = {
  title: 'Hello',
  onClose: action('onModalClose'),
  callToAction: action('onCallToActionClick')
};

const Template = (args) => ({
  template: hbs`
    <OSS::Modal @title={{title}} @onClose={{this.onClose}} @options={{this.options}}>
      <div class="modal-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </div>

      <div class="modal-footer">
        <OSS::Button @skin="primary" @label="Action button" {{on "click" this.callToAction}} />
      </div>
    </OSS::Modal>
  `,
  context: args
});

export const Default = Template.bind({});
Default.args = {
  ...defaultArgs
};

export const Centered = Template.bind({});
Centered.args = {
  options: {
    centered: true
  },
  ...defaultArgs
};

export const BorderelessHeader = Template.bind({});
BorderelessHeader.args = {
  options: {
    borderlessHeader: true
  },
  ...defaultArgs
};

export const NoHeader = Template.bind({});
NoHeader.args = {
  options: {
    header: false
  },
  ...defaultArgs
};
