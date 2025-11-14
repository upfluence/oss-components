import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/OSS::Smart::Immersive::Select',
  component: 'oss-smart-immersive-select',
  argTypes: {
    placeholder: {
      name: 'Placeholder',
      description: 'Text displayed when no value is selected.',
      table: { defaultValue: { summary: 'undefined' } },
      control: { type: 'text' }
    },
    values: {
      name: 'Values',
      description: 'Selected values for multi-select mode.',
      table: {
        type: {
          summary: '<Array<String>>'
        },
        defaultValue: { summary: '[]' }
      },
      control: { type: 'array' }
    },
    loading: {
      name: 'Loading',
      type: { name: 'boolean' },
      description: 'Enable the loading state.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: false }
      },
      control: { type: 'boolean' }
    },
    multiple: {
      name: 'Multiple',
      type: { name: 'boolean' },
      description: 'Allow multiple selections.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: false }
      },
      control: { type: 'boolean' }
    },
    hideCheckboxes: {
      name: 'Hide Checkboxes',
      type: { name: 'boolean' },
      description: 'Hide checkboxes in multiple selection mode.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: false }
      },
      control: { type: 'boolean' }
    },
    searchEnabled: {
      name: 'Search Enabled',
      type: { name: 'boolean' },
      description: 'Enable the search functionality.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: true }
      },
      control: { type: 'boolean' }
    },
    items: {
      name: 'Items',
      description: 'Array of selectable items, each with a value and label.',
      table: {
        type: {
          summary: '<Array<{ value: string, label: string }>>'
        },
        defaultValue: { summary: '[]' }
      },
      control: { type: 'array' }
    },
    onSearch: {
      description: 'Action triggered when the search field is edited.',
      table: {
        category: 'Actions',
        type: { summary: '() => void' }
      }
    },
    onChange: {
      description: 'Action triggered when a value is selected.',
      table: {
        category: 'Actions',
        type: { summary: '() => void' }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          'A customizable select component for immersive experiences, supporting single or multiple selection, search, and loading states.'
      }
    }
  }
};

const Template = ({ iconName, iconColor, ...rest }) => {
  const icon = iconName && iconColor ? `${iconName}:${iconColor}` : undefined;

  return {
    template: hbs`
      <div style="width: 350px; background-color: var(--color-gray-50); padding: var(--spacing-px-24);">
        <OSS::Smart::Immersive::Select
          @placeholder={{this.placeholder}}
          @values={{this.values}}
          @loading={{this.loading}}
          @items={{this.items}}
          @onSearch={{this.onSearch}}
          @onChange={{this.onChange}}
          @multiple={{this.multiple}}
        >
          <:selected-item as |item|>{{item}}</:selected-item>
          <:option-item as |item|>
            <div class="text-ellipsis" {{enable-tooltip title=item.label displayOnlyOnOverflow=true}}>
              {{item.label}}
            </div>
          </:option-item>
        </OSS::Smart::Immersive::Select>
      </div>
    `,
    context: {
      ...rest,
      icon
    }
  };
};

const TemplateSingle = ({ iconName, iconColor, ...rest }) => {
  const icon = iconName && iconColor ? `${iconName}:${iconColor}` : undefined;

  return {
    template: hbs`
      <div style="width: 350px; background-color: var(--color-gray-50); padding: var(--spacing-px-24);">
        <OSS::Smart::Immersive::Select
          @placeholder={{this.placeholder}}
          @values={{this.values}}
          @loading={{this.loading}}
          @items={{this.items}}
          @onSearch={{this.onSearch}}
          @onChange={{this.onChange}}
          @multiple={{this.multiple}}
          @hideCheckboxes={{this.hideCheckboxes}}
          @searchEnabled={{this.searchEnabled}}
        >
          <:selected-item as |item|>{{item.value}}</:selected-item>
          <:option-item as |item|>
            <div class="text-ellipsis" {{enable-tooltip title=item.label displayOnlyOnOverflow=true}}>
              {{item.label}}
            </div>
          </:option-item>
        </OSS::Smart::Immersive::Select>
      </div>
    `,
    context: {
      ...rest,
      icon
    }
  };
};

export const Select = TemplateSingle.bind({});

Select.args = {
  placeholder: 'Placeholder',
  values: [{ value: 'step 1' }],
  loading: false,
  multiple: false,
  hideCheckboxes: false,
  searchEnabled: true,
  items: [
    { value: 'step 1', label: 'Step 1' },
    { value: 'step 2', label: 'Step 2' },
    { value: 'step 3', label: 'Step 3' }
  ],
  onSearch: action('onSearch'),
  onChange: action('onChange')
};

export const Multiple = Template.bind({});

Multiple.args = {
  placeholder: 'Placeholder',
  values: [{ value: 'step 1' }, { value: 'step 2' }],
  loading: false,
  multiple: true,
  hideCheckboxes: false,
  searchEnabled: true,
  items: [
    { value: 'step 1', label: 'Step 1' },
    { value: 'step 2', label: 'Step 2' },
    { value: 'step 3', label: 'Step 3' }
  ],
  onSearch: action('onSearch'),
  onChange: action('onChange')
};
