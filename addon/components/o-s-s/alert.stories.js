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
