import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/OSS::Smart::Input',
  component: 'button',
  argTypes: {
    value: {
      type: { required: true },
      control: 'text',
      description: 'The value of the input',
      defaultValue: 'Input value',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Input value' }
      }
    },
    placeholder: {
      type: { required: true },
      control: 'text',
      description: 'Placeholder text for the input',
      defaultValue: 'Placeholder',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Placeholder' }
      }
    },
    loading: {
      type: { required: true },
      control: 'boolean',
      description: 'Flag to display loading state',
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    onChange: {
      type: { required: true },
      description: 'The action triggered when the input value is changed',
      table: {
        category: 'Actions',
        type: { summary: 'onChange(value: boolean): void' }
      }
    }
  }
};

const Template = (args) => ({
  template: hbs`
     <OSS::Smart::Input
          @value={{this.value}}
          @placeholder={{this.placeholder}}
          @loading={{this.toggleInputLoadingValue}}
          @onChange={{this.onChange}}
        />
  `,
  context: args
});

const defaultArgs = {
  value: 'Input value',
  placeholder: 'Placeholder',
  loading: false,
  onChange: (value) => console.log('Input changed:', value)
};

export const Default = Template.bind({});
Default.args = defaultArgs;
