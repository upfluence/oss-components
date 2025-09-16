import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/OSS::Form',
  component: 'form',
  argTypes: {
    onSetup: {
      description: 'Callback function called during component initialization with the form instance',
      table: {
        type: {
          summary: '(instance: FormInstance) => void'
        }
      },
      control: { type: 'function' },
      type: { required: true }
    },
    onSubmit: {
      description: 'Callback function called when the form is submitted with the validation result',
      table: {
        type: {
          summary: '(isValid: boolean) => void'
        }
      },
      control: { type: 'function' },
      type: { required: true }
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          'A form component that integrates with the FormManager service for validation and form state management. Provides form instance management and validation on submit.'
      }
    }
  }
};

const defaultArgs = {
  onSetup(instance) {
    console.log('Form instance setup:', instance);
  },
  onSubmit(isValid) {
    console.log('Form submitted, is valid:', isValid);
  }
};

const Template = (args) => ({
  template: hbs`
    <OSS::Form @onSetup={{this.onSetup}} @onSubmit={{this.onSubmit}}>
      <:content>
      Form content
      </:content>
    </OSS::Form>
  `,
  context: args
});

export const Default = Template.bind({});
Default.args = defaultArgs;
