import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Smart::Immersive::Logo',
  component: 'oss-smart-immersive-logo',
  argTypes: {
    icon: {
      description: 'Icon name in format "name:color", e.g. "rabbit:orange"',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    url: {
      description: 'URL of the image for image mode',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    editable: {
      description: 'Whether the logo is editable and shows an overlay',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      control: { type: 'boolean' }
    },
    loading: {
      description: 'Whether the logo is in a loading state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      control: { type: 'boolean' }
    },
    oversize: {
      description: 'Whether the container is oversized',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      control: { type: 'boolean' }
    },
    onClick: {
      description: 'Action triggered when clicking the edit overlay',
      table: {
        category: 'Actions',
        type: { summary: '() => void' }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'Smart immersive logo component which supports icon or image display and editable overlay.'
      }
    }
  }
};

const defaultArgs = {
  icon: 'rabbit:orange',
  url: undefined,
  editable: false,
  loading: false,
  oversize: false,
  onClick: action('onClick')
};

const Template = (args) => ({
  template: hbs`
    <div style="width: 350px; background-color: var(--color-gray-50); padding: var(--spacing-px-24);">
      <OSS::Smart::Immersive::Logo
        @icon={{this.icon}}
        @url={{this.url}}
        @editable={{this.editable}}
        @loading={{this.loading}}
        @oversize={{this.oversize}}
        @onClick={{this.onClick}}
      />
    </div>
  `,
  context: args
});

export const Default = Template.bind({});
Default.args = defaultArgs;

export const Editable = Template.bind({});
Editable.args = {
  ...defaultArgs,
  editable: true
};

export const ImageMode = Template.bind({});
ImageMode.args = {
  ...defaultArgs,
  url: 'https://example.com/logo.png'
};

export const LoadingState = Template.bind({});
LoadingState.args = {
  ...defaultArgs,
  loading: true
};

export const OversizeState = Template.bind({});
OversizeState.args = {
  ...defaultArgs,
  oversize: true
};
