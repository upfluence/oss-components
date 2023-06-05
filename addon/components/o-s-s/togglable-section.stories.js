import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/OSS::ToggableSection',
  argTypes: {
    title: {
      description: 'Title',
      table: {
        type: { required: true, summary: 'string' },
        defaultValue: { summary: 'undefined' }
      },
      control: {
        type: 'text'
      }
    },
    subtitle: {
      description: 'Subtitle',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' }
      },
      control: {
        type: 'text'
      }
    },
    iconUrl: {
      description: 'URL pointing to an image to use as icon',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' }
      },
      control: {
        type: 'text'
      }
    },
    toggled: {
      description: 'Whether the section is toggled on or not',
      table: {
        type: { required: true, summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      control: {
        type: 'boolean'
      }
    },
    onChange: {
      description: 'Action to run when a user toggles on/off the section',
      table: {
        category: 'Actions',
        type: {
          required: true,
          summary: 'onChange(toggled: boolean): void'
        }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'A component that allows to toggle the visibility of a section. Useful for settings.'
      }
    }
  }
};

const defaultArgs = {
  title: 'Settings',
  subtitle: '',
  toggled: false,
  iconUrl: '',
  onChange: action('onChange')
};

const Template = (args) => ({
  template: hbs`
    <OSS::TogglableSection
      @title={{this.title}} @subtitle={{this.subtitle}} @toggled={{this.toggled}} @iconUrl={{this.iconUrl}}
      @onChange={{this.onChange}}>
      <:contents>
        Setting content
      </:contents>
    </OSS::TogglableSection>
  `,
  context: args
});

export const Default = Template.bind({});
Default.args = defaultArgs;
