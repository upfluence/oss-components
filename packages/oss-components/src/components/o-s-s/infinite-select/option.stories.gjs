import { hbs } from 'ember-cli-htmlbars';
import { fn } from 'storybook/test';

import OSSInfiniteSelectOption from './option.ts';

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

export default {
  title: 'Components/OSS::InfiniteSelect::Option',
  component: OSSInfiniteSelectOption,
  render: Template,
  argTypes: {
    // `ReturnType<IntlService['t']>` is being extracted as `any` currently, which gets an object control.
    // I still have to investigate why this is happening and lookup for existing issues in ember-storybook.
    title: { control: 'text', table: { type: { summary: 'string | SafeString' } } },
    subtitle: { control: 'text', table: { type: { summary: 'string | SafeString' } } },
    suffixHint: { control: 'text', table: { type: { summary: 'string | SafeString' } } }
  },
  parameters: {
    docs: {
      description: {
        component:
          'A highly configurable option component for use within infinite select dropdowns. Supports single and multiple selection modes, various prefix/suffix decorators including avatars, badges, icons, country flags, tags, and hints.'
      }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/N7SDuH9mvC9zTlsLN49N4L/2.0-UI-Kit-%F0%9F%92%A0?node-id=1343-6188&p=f&t=AsdGbaychQPIaGnK-0'
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
  onSelect: fn()
};

export const BasicUsage = {
  args: defaultArgs
};

export const SingleSelectionSelected = {
  args: {
    ...defaultArgs,
    title: 'Selected Option',
    selected: true,
    selectionType: 'single'
  }
};

export const MultipleSelection = {
  args: {
    ...defaultArgs,
    title: 'Multiple Selection Option',
    selectionType: 'multiple'
  }
};

export const MultipleSelectionSelected = {
  args: {
    ...defaultArgs,
    title: 'Selected Multiple Option',
    selected: true,
    selectionType: 'multiple'
  }
};

export const WithSubtitle = {
  args: {
    ...defaultArgs,
    title: 'Title',
    subtitle: 'Subtitle'
  }
};

export const WithPrefixAvatar = {
  args: {
    ...defaultArgs,
    title: 'John Doe',
    subtitle: 'Software Engineer',
    prefixAvatar: {
      initials: 'JV',
      size: 'sm'
    }
  }
};

export const WithPrefixBadge = {
  args: {
    ...defaultArgs,
    title: 'Premium Feature',
    prefixBadge: {
      icon: 'far fa-thumbs-up',
      size: 'sm'
    }
  }
};

export const WithPrefixIcon = {
  args: {
    ...defaultArgs,
    title: 'Important Option',
    prefixIcon: {
      icon: 'fa-star',
      style: 'solid'
    }
  }
};

export const WithPrefixCountry = {
  args: {
    ...defaultArgs,
    title: 'United States',
    subtitle: 'North America',
    prefixCountry: 'us'
  }
};

export const WithIcon = {
  args: {
    ...defaultArgs,
    title: 'Verified Option',
    icon: {
      icon: 'fa-check-circle',
      style: 'solid'
    }
  }
};

export const WithSuffixHint = {
  args: {
    ...defaultArgs,
    title: 'Option with Hint',
    suffixHint: '+99'
  }
};

export const WithSuffixTag = {
  args: {
    ...defaultArgs,
    title: 'Tagged Option',
    suffixTag: {
      label: 'New',
      skin: 'success',
      size: 'xs'
    }
  }
};

export const WithSuffixIcon = {
  args: {
    ...defaultArgs,
    title: 'Option with Suffix Icon',
    suffixIcon: {
      icon: 'fa-external-link'
    }
  }
};

export const Disabled = {
  args: {
    ...defaultArgs,
    title: 'Disabled Option',
    subtitle: 'This option cannot be selected',
    disabled: true
  }
};

export const ComplexExample = {
  args: {
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
  }
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

export const MultipleOptions = {
  render: MultipleOptionsTemplate,

  args: {
    onSelect: fn()
  }
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

export const WithNamedBlocks = {
  render: WithNamedBlocksTemplate,

  args: {
    title: 'Option with Named Blocks',
    selectionType: 'single',
    selected: false,
    onSelect: fn()
  }
};
