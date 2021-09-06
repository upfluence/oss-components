import hbs from 'htmlbars-inline-precompile';
import { action } from '@storybook/addon-actions';

const FAKE_DATA = [
  { superhero: 'Batman', characters: 'Bruce Wayne' },
  { superhero: 'Superman', characters: 'Kal-El' },
  { superhero: 'Green Arrow', characters: 'Oliver Queen' },
  { superhero: 'Wonder Woman', characters: 'Princess Diana' },
  { superhero: 'Martian Manhunter', characters: 'Martian Manhunter' },
  { superhero: 'Robin/Nightwing', characters: 'Dick Grayson' },
  { superhero: 'Spider Man', characters: 'Peter Parker' },
  { superhero: 'Iron Man', characters: 'Tony Stark' },
  { superhero: 'Thor', characters: 'Thor Odinson' },
  { superhero: 'Hulk', characters: 'Bruce Banner' },
  { superhero: 'Wolverine', characters: 'James Howlett' }
];

export default {
  title: 'Components/OSS::InfiniteSelect',
  component: 'infinite-select',
  args: {
    itemLabel: 'name'
  },
  argTypes: {
    items: {
      description: 'Items to display',
      table: {
        type: {
          summary: 'array'
        },
        defaultValue: { summary: '[]' }
      },
      control: { type: null }
    },
    itemLabel: {
      description: 'Attribute of the item to be used for display',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'name' }
      },
      control: { type: null }
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
      control: { type: null }
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
      control: { type: null }
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
      control: { type: null }
    },
    onSelect: {
      type: { name: 'Function', required: true },
      description: 'Function to be called with the clicked item',
      table: {
        type: {
          summary: 'onSelect(item): void'
        }
      },
      control: { type: null }
    },
    onSearch: {
      type: { name: 'Function' },
      description: 'Function to be called every time the user searches',
      table: {
        type: {
          summary: 'onSearch(keyword: string): void'
        }
      },
      control: { type: null }
    },
    onBottomReached: {
      type: { name: 'Function' },
      description: 'Function to be called when the scroll hits the bottom',
      table: {
        type: {
          summary: 'onBottomReached(): void'
        }
      },
      control: { type: null }
    },
    didRender: {
      type: { name: 'Function' },
      description: 'Function to be called every time the component is rendered',
      table: {
        type: {
          summary: 'didRender(): void'
        }
      },
      control: { type: null }
    }
  },
  parameters: {
    layout: null,
    previewTabs: {
      'storybook/docs/panel': {
        hidden: true
      }
    }
  }
};

const defaultArgs = {
  items: FAKE_DATA,
  searchEnabled: false,
  onSearch: action('onSearch'),
  onSelect: action('onSelect'),
  loading: false,
  loadingMore: false
};

const Template = (args) => ({
  template: hbs`
      <OSS::InfiniteSelect
        @items={{this.items}} @itemLabel="superhero" @searchEnabled={{this.searchEnabled}} @onSearch={{this.onSearch}}
        @onSelect={{this.onSelect}} @loading={{this.loading}} @loadingMore={{this.loadingMore}} class="upf-align--absolute-center"/>
  `,
  context: args
});

const OptionBlockTemplate = (args) => ({
  template: hbs`
    <OSS::InfiniteSelect @items={{this.items}} @searchEnabled={{this.searchEnabled}} @onSelect={{this.onSelect}} class="upf-align--absolute-center">
      <:option as |opt|>
        {{opt.superhero}} (Alias: {{opt.characters}})
      </:option>
    </OSS::InfiniteSelect>
  `,
  context: args
});

export const WithItemLabel = Template.bind({});
WithItemLabel.args = {
  ...defaultArgs
};

export const WithOptionBlock = OptionBlockTemplate.bind({});
WithOptionBlock.args = {
  ...defaultArgs
};

export const WithSearch = Template.bind({});
WithSearch.args = {
  ...defaultArgs,
  ...{
    searchEnabled: true
  }
};

export const Loading = Template.bind({});
Loading.args = {
  ...defaultArgs,
  ...{
    loading: true
  }
};

export const LoadingMore = Template.bind({});
LoadingMore.args = {
  ...defaultArgs,
  ...{
    items: FAKE_DATA.slice(0, 4),
    loadingMore: true
  }
};
