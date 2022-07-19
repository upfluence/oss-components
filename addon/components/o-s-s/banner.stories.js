import hbs from 'htmlbars-inline-precompile';

export default {
  title: 'Components/OSS::Banner',
  component: 'banner',
  argTypes: {
    title: {
      description: 'Banner title',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: false }
      },
      control: { type: 'text' }
    },
    subtitle: {
      description: 'Banner subtitle',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: false }
      },
      control: { type: 'text' }
    },
    icon: {
      description: 'A fontawesome icon that will be displayed in a round badge'
    },
    plain: {
      description: 'Display the plain version of the banner, if true will show in bg-color-grey'
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'A configurable Banner component. Can display a badge or an image, a title and a subtitle.'
      }
    }
  }
};

const BasicUsageTemplate = (args) => ({
  template: hbs`
      <OSS::Banner @title={{this.title}} @subtitle={{this.subtitle}} @icon={{this.icon}} />
  `,
  context: args
});
export const UsageWithIcon = BasicUsageTemplate.bind({});
UsageWithIcon.args = {
  title: 'Content of the Title',
  subtitle: 'Content of the Subtitle',
  icon: 'fas fa-info-circle'
};

const BasicUsageImageTemplate = (args) => ({
  template: hbs`
      <OSS::Banner @title={{this.title}} @subtitle={{this.subtitle}} @image={{this.image}} />
  `,
  context: args
});
export const UsageWithImage = BasicUsageImageTemplate.bind({});
UsageWithImage.args = {
  title: 'Content of the Title',
  subtitle: 'Content of the Subtitle',
  image:
    'https://thepressfree.com/wp-content/uploads/2021/11/Voici-pourquoi-Bruce-Banner-netait-plus-Smart-Hulk-dans-la-800x445.jpg'
};

const BasicUsageCustomIconTemplate = (args) => ({
  template: hbs`
      <OSS::Banner @title={{this.title}} @subtitle={{this.subtitle}}>
        <:custom-icon>
          <OSS::Badge @icon="fas fa-check" />
        </:custom-icon>
      </OSS::Banner>
  `,
  context: args
});
export const UsageWithCustomIcon = BasicUsageCustomIconTemplate.bind({});
UsageWithCustomIcon.args = {
  title: 'Content of the Title',
  subtitle: 'Content of the Subtitle'
};

const BasicUsageCTATemplate = (args) => ({
  template: hbs`
      <OSS::Banner @title={{this.title}} @subtitle={{this.subtitle}}>
        <:actions>
          <OSS::Button @label="Click me" />
        </:actions>
      </OSS::Banner>
  `,
  context: args
});
export const UsageWithActionsBlock = BasicUsageCTATemplate.bind({});
UsageWithActionsBlock.args = {
  title: 'Content of the Title',
  subtitle: 'Content of the Subtitle'
};
