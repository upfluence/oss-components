import hbs from 'htmlbars-inline-precompile';

export default {
  title: 'Components/OSS::Banner',
  component: 'banner',
  argTypes: {
    title: {
      description: "Sets the component's title",
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    subtitle: {
      description: "Sets the component's subtitle",
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    icon: {
      description: 'A fontawesome icon that will be displayed in a round badge',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    image: {
      description: 'Image URL that will be displayed in a round badge',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    plain: {
      description: 'Displays the plain version of the banner, if true will show in background-color-gray-50',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      control: {
        type: 'boolean'
      }
    },
    selected: {
      description:
        'Displays the selected version of the banner with border and background colors using shades of the primary color',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      control: {
        type: 'boolean'
      }
    },
    disabled: {
      description: 'Displays the disabled version of the banner with background and text color in grey',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      control: {
        type: 'boolean'
      }
    },
    size: {
      description:
        'Allows to adjust the size of the component. Currently available options are `sm` and `md`. Defaults to `md`.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'false' }
      },
      control: {
        type: 'string'
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'A configurable Banner component. Can display a badge or an image, a title and a subtitle.'
      },
      iframeHeight: 120
    }
  }
};

const defaultArgs = {
  title: 'Content of the Title',
  subtitle: 'Content of the Subtitle',
  icon: undefined,
  image: undefined,
  plain: false,
  selected: false,
  disabled: false,
  size: undefined
};

const Template = (args) => ({
  template: hbs`
      <OSS::Banner @title={{this.title}} @subtitle={{this.subtitle}} @icon={{this.icon}} @plain={{this.plain}}
                   @image={{this.image}} @selected={{this.selected}} @disabled={{this.disabled}} @size={{this.size}} />
  `,
  context: args
});

const CustomIconTemplate = (args) => ({
  template: hbs`
      <OSS::Banner @title={{this.title}} @subtitle={{this.subtitle}} @icon={{this.icon}} @plain={{this.plain}}
                   @image={{this.image}} @selected={{this.selected}} @disabled={{this.disabled}} @size={{this.size}}>
        <:custom-icon>
          <OSS::Badge @icon="fas fa-check" />
        </:custom-icon>
      </OSS::Banner>
  `,
  context: args
});

const ActionTemplate = (args) => ({
  template: hbs`
      <OSS::Banner @title={{this.title}} @subtitle={{this.subtitle}} @icon={{this.icon}} @plain={{this.plain}}
                   @image={{this.image}} @selected={{this.selected}} @disabled={{this.disabled}} @size={{this.size}}>
        <:actions>
          <OSS::Button @label="Click me" />
        </:actions>
      </OSS::Banner>
  `,
  context: args
});

export const UsageWithIcon = Template.bind({});
UsageWithIcon.args = {
  ...defaultArgs,
  ...{ icon: 'fas fa-info-circle' }
};

export const UsageWithImage = Template.bind({});
UsageWithImage.args = {
  ...defaultArgs,
  ...{
    image:
      'https://thepressfree.com/wp-content/uploads/2021/11/Voici-pourquoi-Bruce-Banner-netait-plus-Smart-Hulk-dans-la-800x445.jpg'
  }
};

export const UsageWithCustomIcon = CustomIconTemplate.bind({});
UsageWithCustomIcon.args = defaultArgs;

export const UsageWithActionsBlock = ActionTemplate.bind({});
UsageWithActionsBlock.args = defaultArgs;
