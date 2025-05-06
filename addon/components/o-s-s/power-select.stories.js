import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

const FAKE_ITEMS = ['Book of Boba Fett', 'The Bad Batch', 'The Clone Wars'];
const FAKE_SELECTED_ITEMS = ['The Mandalorian'];

export default {
  title: 'Components/OSS::PowerSelect',
  component: 'power-select',
  argTypes: {
    items: {
      description: 'List of items to select',
      type: { required: true },
      table: {
        type: {
          summary: 'array'
        },
        defaultValue: { summary: '[]' }
      },
      control: { type: 'array' }
    },
    selectedItems: {
      description: 'List of selected items',
      type: { required: true },
      table: {
        type: {
          summary: 'array'
        },
        defaultValue: { summary: '[]' }
      },
      control: { type: null }
    },
    loading: {
      description: 'Display loading state of the component',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: 'false' }
      },
      control: { type: 'boolean' }
    },
    borderless: {
      description: 'Hide the border around the dropdown component',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: 'false' }
      },
      control: { type: 'boolean' }
    },
    feedbackMessage: {
      description: 'A success, warning or error message that will be displayed below the input-group.',
      table: {
        type: {
          summary: "{ type: 'error' | 'warning' | 'success', value: string }"
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'object' }
    },
    hasError: {
      description:
        'Allows setting the error style on the input without showing an error message. Useful for form validation.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'boolean' }
    },
    loadingMore: {
      description: 'Display loading more state in the list of items',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: 'false' }
      },
      control: { type: 'boolean' }
    },
    placeholder: {
      description: 'Placeholder displayed in the list of selected items',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    searchPlaceholder: {
      description: 'Placeholder displayed in the search',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'Search...' }
      },
      control: { type: 'text' }
    },
    onChange: {
      description: 'Action executed when item is selected from selection section',
      type: { required: true },
      table: {
        category: 'Actions',
        type: {
          summary: 'onChange(item: any, operation: OperationType): void'
        }
      }
    },
    onSearch: {
      description: 'Action executed when the user uses the search bar',
      table: {
        category: 'Actions',
        type: {
          summary: 'onSearch(keyword: string): void'
        }
      }
    },
    onBottomReached: {
      description: 'Action executed when the user scrolls to the bottom of the list of items',
      table: {
        category: 'Actions',
        type: {
          summary: 'onBottomReached(): void'
        }
      }
    },
    addressableAs: {
      description:
        'A string identifier to use as base to target the portaled-dropdown component in CSS. When provided, you will be able to use `${addressableAs}__dropdown` in CSS.',
      table: {
        type: {
          summary: 'string'
        }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'Used for selecting multiple items of a list, based on a pre-filled dropdown menu.'
      },
      iframeHeight: 200
    }
  }
};

const defaultArgs = {
  items: FAKE_ITEMS,
  selectedItems: FAKE_SELECTED_ITEMS,
  loading: false,
  loadingMore: false,
  borderless: false,
  placeholder: 'My placeholder',
  searchPlaceholder: 'My search placeholder',
  addressableAs: undefined,
  feedbackMessage: undefined,
  hasError: false,
  onSearch: action('onSearch'),
  onChange: action('onChange', { allowFunction: true }),
  onBottomReached: action('onBottomReached')
};

const Template = (args) => ({
  template: hbs`
    <div style="display: flex; justify-content: center; background-color: white; border-radius: 4px">
      <OSS::PowerSelect class='padding-sm' @selectedItems={{this.selectedItems}} @items={{this.items}}
                        @onSearch={{this.onSearch}} @onChange={{this.onChange}} @loading={{this.loading}} 
                        @borderless={{this.borderless}} @hasError={{this.hasError}} @feedbackMessage={{this.feedbackMessage}}
                        @loadingMore={{this.loadingMore}} @placeholder={{this.placeholder}} @searchPlaceholder={{this.searchPlaceholder}}
                        @onBottomReached={{this.onBottomReached}} @addressableAs={{this.addressableAs}}>
        <:selected-item as |selectedItem|>
          {{selectedItem}}
        </:selected-item>
        <:option-item as |item|>
          {{item}}
        </:option-item>
      </OSS::PowerSelect>
    </div>
  `,
  context: args
});

export const Default = Template.bind({});
Default.args = {
  ...defaultArgs
};

export const WithoutSelectedItem = Template.bind({});
WithoutSelectedItem.args = {
  ...defaultArgs,
  ...{ selectedItems: [] }
};
