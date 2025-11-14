import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';
import { LOGO_COLORS, LOGO_ICONS } from '../../../../../app/utils/logo-config';

export default {
  title: 'Components/OSS::Smart::Immersive::Logo',
  component: 'oss-smart-immersive-logo',
  argTypes: {
    icon: {
      name: 'Icon',
      description: 'icon name and color for icon mode (e.g., "rabbit:orange")',
      table: { disable: false },
      control: { type: 'text' }
    },
    iconName: {
      name: 'Icon Name',
      description: 'Name of the icon to display, concatenated with iconColor to form "iconName:iconColor"',
      control: {
        type: 'select',
        options: LOGO_ICONS
      }
    },
    iconColor: {
      name: 'Icon Color',
      description: 'Color of the icon to display, concatenated with iconName to form "iconName:iconColor"',
      control: {
        type: 'select',
        options: LOGO_COLORS
      }
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
    size: {
      description: 'Allow to define the size of the container',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' }
      },
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg']
      }
    },
    hasError: {
      description: 'Display an error border around the component.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      control: { type: 'boolean' }
    },
    onEdit: {
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

const Template = ({ iconName, iconColor, ...rest }) => {
  const icon = iconName && iconColor ? `${iconName}:${iconColor}` : undefined;

  return {
    template: hbs`
      <div style="width: 350px; background-color: var(--color-gray-50); padding: var(--spacing-px-24);">
        <OSS::Smart::Immersive::Logo
          @icon={{this.icon}}
          @url={{this.url}}
          @editable={{this.editable}}
          @loading={{this.loading}}
          @size={{this.size}}
          @hasError={{this.hasError}}
          @onEdit={{this.onEdit}}
        />
      </div>
    `,
    context: {
      ...rest,
      icon
    }
  };
};

export const Default = Template.bind({});
Default.args = {
  iconName: 'rabbit',
  iconColor: 'orange',
  url: undefined,
  editable: false,
  loading: false,
  size: 'md',
  hasError: false,
  onEdit: action('onEdit')
};

export const Editable = Template.bind({});
Editable.args = {
  ...Default.args,
  editable: true
};

export const ImageMode = Template.bind({});
ImageMode.args = {
  ...Default.args,
  url: 'https://example.com/logo.png'
};

export const LoadingState = Template.bind({});
LoadingState.args = {
  ...Default.args,
  loading: true
};

export const OversizeState = Template.bind({});
OversizeState.args = {
  ...Default.args,
  oversize: true
};
