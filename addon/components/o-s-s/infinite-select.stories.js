import hbs from 'htmlbars-inline-precompile';
import { action } from '@storybook/addon-actions';

const FAKE_DATA = [
  { superhero: 'Batman', characters: 'Bruce Wayne' },
  { superhero: 'Superman', characters: 'Kal-El' },
  { superhero: 'Green Arrow', characters: 'Oliver Queen' },
  { superhero: 'Wonder Woman', characters: 'Princess Diana' },
  { superhero: 'Martian Manhunter', characters: 'Martian Manhunter' },
  { superhero: 'Robin/Nightwing', characters: 'Dick Grayson' },
  { superhero: 'Spider Man', characters: 'Peter Parker' }
];

export default {
  title: 'Components/OSS::InfiniteSelect',
  component: 'infinite-select',
  argTypes: {
    items: {
      description: 'Items to display',
      table: {
        type: {
          summary: 'array'
        },
        defaultValue: { summary: '[]' }
      },
      control: { type: 'array' }
    },
    itemLabel: {
      description: 'Attribute of the item to be used for display',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'name' }
      },
      control: { type: 'text' }
    },
    searchPlaceholder: {
      description: 'Placeholder for the search input when present',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'Search...' }
      },
      control: { type: 'text' }
    },
    searchEnabled: {
      type: { name: 'boolean' },
      description: 'Enable the search feature',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: true }
      },
      control: { type: 'boolean' }
    },
    loading: {
      type: { name: 'boolean' },
      description: 'Whether or not the initial content is loading',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: false }
      },
      control: { type: 'boolean' }
    },
    loadingMore: {
      type: { name: 'boolean' },
      description: 'Whether or not more content is loading',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: false }
      },
      control: { type: 'boolean' }
    },
    inline: {
      type: { name: 'boolean' },
      description: 'Active or not absolute position (floating menu mode)',
      table: {
        type: { summary: 'true | false' },
        defaultValue: { summary: 'false' }
      },
      control: {
        type: 'boolean'
      }
    },
    onSelect: {
      type: { required: true },
      description: 'Function to be called with the clicked item',
      table: {
        type: {
          summary: 'onSelect(item): void'
        }
      }
    },
    onSearch: {
      description: 'Function to be called every time the user searches',
      table: {
        type: {
          summary: 'onSearch(keyword: string): void'
        }
      }
    },
    onBottomReached: {
      description: 'Function to be called when the scroll hits the bottom',
      table: {
        type: {
          summary: 'onBottomReached(): void'
        }
      }
    },
    didRender: {
      type: { name: 'Function' },
      description: 'Function to be called every time the component is rendered',
      table: {
        type: {
          summary: 'didRender(): void'
        }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'A configurable select component which features a search function and an infinite loader.'
      }
    }
  }
};

const defaultArgs = {
  items: FAKE_DATA,
  itemLabel: 'superhero',
  searchEnabled: true,
  searchPlaceholder: 'My Placeholder...',
  onSearch: action('onSearch'),
  onSelect: action('onSelect'),
  loading: false,
  loadingMore: false,
  inline: false
};

const Template = (args) => ({
  template: hbs`
      <OSS::InfiniteSelect
        @items={{this.items}} @itemLabel={{this.itemLabel}} @searchEnabled={{this.searchEnabled}} @onSearch={{this.onSearch}}
        @searchPlaceholder={{this.searchPlaceholder}} @onSelect={{this.onSelect}} @loading={{this.loading}}
        @loadingMore={{this.loadingMore}} @inline={{this.inline}} class="upf-align--absolute-center"/>
  `,
  context: args
});

const OptionBlockTemplate = (args) => ({
  template: hbs`
    <OSS::InfiniteSelect
      @items={{this.items}} @searchEnabled={{this.searchEnabled}} @onSearch={{this.onSearch}} @onSelect={{this.onSelect}}
      @searchPlaceholder={{this.searchPlaceholder}} class="upf-align--absolute-center">
      <:option as |opt|>
        {{opt.superhero}} (Alias: {{opt.characters}})
      </:option>
    </OSS::InfiniteSelect>
  `,
  context: args
});

export const Default = Template.bind({});
Default.args = {
  ...defaultArgs
};

export const WithOptionBlock = OptionBlockTemplate.bind({});
WithOptionBlock.args = {
  ...defaultArgs
};

export const EmptyState = Template.bind({});
EmptyState.args = {
  ...defaultArgs,
  ...{
    items: []
  }
};
