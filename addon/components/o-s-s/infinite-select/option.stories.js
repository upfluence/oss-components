import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

const SelectionTypes = ['single', 'multiple'];

export default {
  title: 'Components/OSS::InfiniteSelect::Option',
  component: 'infinite-select/option',
  argTypes: {
    title: {
      type: { required: true },
      description: 'The main title text of the option',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    subtitle: {
      description: 'Optional subtitle text displayed below the title',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    selectionType: {
      description: 'The selection type - single selection with radio behavior or multiple selection with checkboxes',
      table: {
        type: { summary: SelectionTypes.join('|') },
        defaultValue: { summary: 'single' }
      },
      options: SelectionTypes,
      control: { type: 'select' }
    },
    selected: {
      description: 'Whether the option is currently selected',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      control: { type: 'boolean' }
    },
    disabled: {
      description: 'Whether the option is disabled and cannot be selected',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      control: { type: 'boolean' }
    },
    prefixAvatar: {
      description: 'Optional avatar displayed before the title. Object with properties: image, initials, size, loading',
      table: {
        type: { summary: 'OSSAvatarArgs' },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'object' }
    },
    prefixBadge: {
      description:
        'Optional badge displayed before the title. Object with properties: icon, image, text, skin, plain, size',
      table: {
        type: { summary: 'OSSBadgeArgs' },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'object' }
    },
    prefixIcon: {
      description: 'Optional icon displayed before the title. Object with properties: icon, style, tooltip',
      table: {
        type: { summary: 'IconSpec' },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'object' }
    },
    prefixCountry: {
      description: 'Optional country flag displayed before the title. Use alpha2 country code (e.g., "US", "FR")',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    icon: {
      description: 'Optional icon displayed after the title. Object with properties: icon, style, tooltip',
      table: {
        type: { summary: 'IconSpec' },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'object' }
    },
    suffixHint: {
      description: 'Optional hint text displayed at the end of the option',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    suffixTag: {
      description:
        'Optional tag displayed at the end of the option. Object with properties: label, skin, icon, suffixIcon, hasEllipsis, plain, htmlSafe, size',
      table: {
        type: { summary: 'OSSTagArgs' },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'object' }
    },
    suffixIcon: {
      description:
        'Optional icon displayed at the very end of the option. Object with properties: icon, style, tooltip',
      table: {
        type: { summary: 'IconSpec' },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'object' }
    },
    onSelect: {
      type: { required: true },
      description: 'Callback function called when the option is selected/deselected',
      table: {
        category: 'Actions',
        type: { summary: 'onSelect(value: boolean): void' }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          'A highly configurable option component for use within infinite select dropdowns. Supports single and multiple selection modes, various prefix/suffix decorators including avatars, badges, icons, country flags, tags, and hints.'
      }
    }
  }
};

const defaultArgs = {
  title: 'Title',
  subtitle: undefined,
  selectionType: 'single',
  selected: false,
  disabled: false,
  prefixAvatar: undefined,
  prefixBadge: undefined,
  prefixIcon: undefined,
  prefixCountry: undefined,
  icon: undefined,
  suffixHint: undefined,
  suffixTag: undefined,
  suffixIcon: undefined,
  onSelect: action('onSelect')
};

const Template = (args) => ({
  template: hbs`
    <div style="width: 700px; background-color: #ffff;">
      <OSS::InfiniteSelect::Option
        @title={{this.title}}
        @subtitle={{this.subtitle}}
        @selectionType={{this.selectionType}}
        @selected={{this.selected}}
        @disabled={{this.disabled}}
        @prefixAvatar={{this.prefixAvatar}}
        @prefixBadge={{this.prefixBadge}}
        @prefixIcon={{this.prefixIcon}}
        @prefixCountry={{this.prefixCountry}}
        @icon={{this.icon}}
        @suffixHint={{this.suffixHint}}
        @suffixTag={{this.suffixTag}}
        @suffixIcon={{this.suffixIcon}}
        @onSelect={{this.onSelect}}
      />
    </div>
  `,
  context: args
});

export const BasicUsage = Template.bind({});
BasicUsage.args = defaultArgs;

export const SingleSelectionSelected = Template.bind({});
SingleSelectionSelected.args = {
  ...defaultArgs,
  title: 'Selected Option',
  selected: true,
  selectionType: 'single'
};

export const MultipleSelection = Template.bind({});
MultipleSelection.args = {
  ...defaultArgs,
  title: 'Multiple Selection Option',
  selectionType: 'multiple'
};

export const MultipleSelectionSelected = Template.bind({});
MultipleSelectionSelected.args = {
  ...defaultArgs,
  title: 'Selected Multiple Option',
  selected: true,
  selectionType: 'multiple'
};

export const WithSubtitle = Template.bind({});
WithSubtitle.args = {
  ...defaultArgs,
  title: 'Title',
  subtitle: 'Subtitle'
};

export const WithPrefixAvatar = Template.bind({});
WithPrefixAvatar.args = {
  ...defaultArgs,
  title: 'John Doe',
  subtitle: 'Software Engineer',
  prefixAvatar: {
    initials: 'JV',
    size: 'sm'
  }
};

export const WithPrefixBadge = Template.bind({});
WithPrefixBadge.args = {
  ...defaultArgs,
  title: 'Premium Feature',
  prefixBadge: {
    icon: 'far fa-thumbs-up',
    size: 'sm'
  }
};

export const WithPrefixIcon = Template.bind({});
WithPrefixIcon.args = {
  ...defaultArgs,
  title: 'Important Option',
  prefixIcon: {
    icon: 'fa-star',
    style: 'solid'
  }
};

export const WithPrefixCountry = Template.bind({});
WithPrefixCountry.args = {
  ...defaultArgs,
  title: 'United States',
  subtitle: 'North America',
  prefixCountry: 'us'
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...defaultArgs,
  title: 'Verified Option',
  icon: {
    icon: 'fa-check-circle',
    style: 'solid'
  }
};

export const WithSuffixHint = Template.bind({});
WithSuffixHint.args = {
  ...defaultArgs,
  title: 'Option with Hint',
  suffixHint: '+99'
};

export const WithSuffixTag = Template.bind({});
WithSuffixTag.args = {
  ...defaultArgs,
  title: 'Tagged Option',
  suffixTag: {
    label: 'New',
    skin: 'success',
    size: 'xs'
  }
};

export const WithSuffixIcon = Template.bind({});
WithSuffixIcon.args = {
  ...defaultArgs,
  title: 'Option with Suffix Icon',
  suffixIcon: {
    icon: 'fa-external-link'
  }
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...defaultArgs,
  title: 'Disabled Option',
  subtitle: 'This option cannot be selected',
  disabled: true
};

export const ComplexExample = Template.bind({});
ComplexExample.args = {
  ...defaultArgs,
  title: 'Complex Option',
  subtitle: 'With multiple decorators',
  selectionType: 'multiple',
  selected: true,
  prefixAvatar: {
    initials: 'CE',
    size: 'sm'
  },
  icon: {
    icon: 'fa-info-circle'
  },
  suffixTag: {
    label: 'Premium',
    skin: 'primary',
    size: 'xs'
  },
  suffixHint: '+5'
};

const MultipleOptionsTemplate = (args) => ({
  template: hbs`
    <div style="width: 700px; background-color: #ffff;">
      <OSS::InfiniteSelect::Option
        @title="First Option"
        @selectionType="single"
        @selected={{false}}
        @onSelect={{this.onSelect}}
      />
      <OSS::InfiniteSelect::Option
        @title="Second Option (Selected)"
        @selectionType="single"
        @selected={{true}}
        @onSelect={{this.onSelect}}
      />
      <OSS::InfiniteSelect::Option
        @title="Third Option"
        @subtitle="With subtitle"
        @selectionType="single"
        @selected={{false}}
        @onSelect={{this.onSelect}}
      />
      <OSS::InfiniteSelect::Option
        @title="Disabled Option"
        @selectionType="single"
        @selected={{false}}
        @disabled={{true}}
        @onSelect={{this.onSelect}}
      />
    </div>
  `,
  context: args
});

export const MultipleOptions = MultipleOptionsTemplate.bind({});
MultipleOptions.args = {
  onSelect: action('onSelect')
};

const WithNamedBlocksTemplate = (args) => ({
  template: hbs`
    <div style="width: 700px; background-color: #ffff;">
      <OSS::InfiniteSelect::Option
        @title={{this.title}}
        @selectionType={{this.selectionType}}
        @selected={{this.selected}}
        @onSelect={{this.onSelect}}
      >
        <:prefix>
          <OSS::Icon @icon="fa-custom" class="font-color-primary-500" />
        </:prefix>
        <:suffix>
          <span class="font-weight-bold">Custom</span>
        </:suffix>
      </OSS::InfiniteSelect::Option>
    </div>
  `,
  context: args
});

export const WithNamedBlocks = WithNamedBlocksTemplate.bind({});
WithNamedBlocks.args = {
  title: 'Option with Named Blocks',
  selectionType: 'single',
  selected: false,
  onSelect: action('onSelect')
};
