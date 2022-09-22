import hbs from 'htmlbars-inline-precompile';

const SkinTypes = ['success', 'info', 'warning', 'error'];

export default {
  title: 'Components/OSS::Alert',
  component: 'alert',
  argTypes: {
    skin: {
      description: 'Skin of the alert',
      table: {
        type: {
          summary: SkinTypes.join('|')
        },
        defaultValue: { summary: 'info' }
      },
      options: SkinTypes,
      control: { type: 'select' }
    },
    title: {
      description: 'The value of the title',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: '' }
      },
      control: { type: 'text' }
    },
    subtitle: {
      description: 'The value of the subtitle',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: '' }
      },
      control: { type: 'text' }
    },
    plain: {
      description: 'When true, a white background color is displayed',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      control: {
        type: 'boolean'
      }
    },
    closable: {
      description: 'When enabled, the alert can be closed by clicking on the cross icon',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      control: {
        type: 'boolean'
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'Used for displaying a title and a subtitle in layouts.'
      }
    }
  }
};

const DefaultUsageTemplate = (args) => ({
  template: hbs`
      <OSS::Alert @skin={{this.skin}} @title={{this.title}} @subtitle={{this.subtitle}} />
  `,
  context: args
});

export const BasicUsage = DefaultUsageTemplate.bind({});
BasicUsage.args = {
  skin: 'info',
  title: 'Title',
  subtitle: 'I am a subtitle in the alert'
};

const BasicUsageExtraContentTemplate = (args) => ({
  template: hbs`
      <OSS::Alert @skin={{this.skin}} @title={{this.title}} @subtitle={{this.subtitle}}>
        <:extra-content>
          <div class="fx-row fx-gap-px-12">
            <OSS::Link @label="Link1" />
            <OSS::Link @label="Link2" />
          </div>
        </:extra-content>
      </OSS::Alert>
  `,
  context: args
});

export const UsageExtraContent = BasicUsageExtraContentTemplate.bind({});
UsageExtraContent.args = {
  skin: 'info',
  title: 'Title',
  subtitle: 'I am a subtitle in the alert'
};
