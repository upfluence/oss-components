import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/OSS::AccessPanel',
  component: 'access-panel',
  argTypes: {
    records: {
      description: 'The list of elements displayed inside the panel',
      table: {
        type: {
          summary: 'array'
        }
      },
      control: { type: 'array' },
      type: { required: true }
    },
    initialLoad: {
      description:
        'Distinguish the initial data loading from subsequent data loads, showing a loading state during the first loading',
      table: {
        type: {
          summary: 'boolean'
        }
      },
      control: { type: 'boolean' },
      type: { required: true }
    },
    loading: {
      description: 'Displays a loading state when true',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: false }
      },
      control: { type: 'boolean' }
    },
    filtered: {
      description: 'Whether the records displayed are filtered by the parent or not',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: undefined }
      },
      control: { type: 'boolean' }
    },
    onBottomReached: {
      description: 'Function triggered when the user scrolls to the bottom of the panel.',
      table: {
        category: 'Actions',
        type: {
          summary: 'onBottomReached(): void'
        }
      },
      type: { required: true }
    },
    onClose: {
      description: 'Function triggered when the user closes the panel',
      table: {
        category: 'Actions',
        type: {
          summary: 'onClose(): void'
        }
      },
      type: { required: true }
    },
    onSearch: {
      description:
        'Function triggered whenever the user types in the search field. If undefined, the searchbar will not be displayed',
      table: {
        category: 'Actions',
        type: {
          summary: 'onSearch?(keyword: string): void'
        }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          'A panel component used to display a searchable and scrollable list of records, with optional loading and empty states.'
      }
    }
  }
};
const defaultArgs = {
  records: [{ label: 'foo' }, { label: 'bar' }],
  initialLoad: false,
  loading: false,
  filtered: undefined,
  onBottomReached: action('onBottomReached'),
  onClose: action('onClose'),
  onSearch: action('onSearch')
};

const DefaultUsageTemplate = (args) => ({
  template: hbs`
    <div style="width: 350px; background-color: var(--color-gray-50); padding: var(--spacing-px-24);">
      <OSS::AccessPanel
        @records={{this.records}}
        @initialLoad={{this.initialLoad}}
        @loading={{this.loading}}
        @onBottomReached={{this.onBottomReached}}
        @onClose={{this.onClose}}
        @onSearch={{this.onSearch}}
      />
    </div>
  `,
  context: args
});

const CustomContentTemplate = (args) => ({
  template: hbs`
    <div style="width: 350px; background-color: var(--color-gray-50); padding: var(--spacing-px-24);">
      <OSS::AccessPanel
        @records={{this.records}}
        @initialLoad={{this.initialLoad}}
        @loading={{this.loading}}
        @onBottomReached={{this.onBottomReached}}
        @onClose={{this.onClose}}
        @onSearch={{this.onSearch}}
      >
        <:header>Header</:header>
        <:empty-state>Empty state</:empty-state>
        <:columns>Columns</:columns>
        <:no-results>No results</:no-results>
        <:row as |record|>{{record.label}}</:row>
      </OSS::AccessPanel>
    </div>
  `,
  context: args
});

const CustomLoadingStatesTemplate = (args) => ({
  template: hbs`
    <div style="width: 350px; background-color: var(--color-gray-50); padding: var(--spacing-px-24);">
      <OSS::AccessPanel
        @records={{this.records}}
        @initialLoad={{this.initialLoad}}
        @loading={{this.loading}}
        @onBottomReached={{this.onBottomReached}}
        @onClose={{this.onClose}}
        @onSearch={{this.onSearch}}
      >
        <:header>Header</:header>
        <:empty-state>Empty state</:empty-state>
        <:columns>Columns</:columns>
        <:no-results>No results</:no-results>
        <:row as |record|>{{record.label}}</:row>
        <:row-skeleton>Loading...</:row-skeleton>
      </OSS::AccessPanel>
    </div>
  `,
  context: args
});

export const BasicUsage = DefaultUsageTemplate.bind({});
BasicUsage.args = defaultArgs;

export const CustomContent = CustomContentTemplate.bind({});
CustomContent.args = {
  ...defaultArgs
};

export const SearchDisabled = DefaultUsageTemplate.bind({});
SearchDisabled.args = {
  ...defaultArgs,
  onSearch: undefined
};

export const LoadingState = DefaultUsageTemplate.bind({});
LoadingState.args = {
  ...defaultArgs,
  loading: true,
  initialLoad: false
};

export const CustomLoadingState = CustomLoadingStatesTemplate.bind({});
CustomLoadingState.args = {
  ...defaultArgs,
  loading: true,
  initialLoad: false
};
