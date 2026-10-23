import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Helpers & Modifiers/Modifiers/Register-Form-Field/Definition',
  argTypes: {
    form: {
      description: 'The name of the form this field belongs to. Used to retrieve the correct FormManager instance.',
      table: {
        type: {
          summary: 'string'
        }
      },
      control: { type: 'text' }
    },
    fieldId: {
      description: 'A unique identifier for the field within the form. Used for registration and validation.',
      table: {
        type: {
          summary: 'string'
        }
      },
      control: { type: 'text' }
    },
    validator: {
      description: 'A validation function called by the FormManager for this field',
      table: {
        type: {
          summary: '(value: unknown) => string | void'
        }
      },
      control: { type: 'function' }
    },
    validateOnBlur: {
      description: 'Whether the field should be validated automatically on blur. Defaults to `true`.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: 'true' }
      },
      control: { type: 'boolean' }
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          'A modifier that registers a form field with the `FormManager` service, handling form validation logic'
      }
    }
  }
};

const defaultArgs = {
  form: 'form-instance',
  fieldId: 'field-id',
  validator: (value) => (!value ? 'This field is required' : undefined),
  validateOnBlur: true
};

const Template = (args) => ({
  template: hbs`
    <form id={{this.form}}>
      <OSS::InputContainer {{register-form-field
        form=this.form
        fieldId=this.fieldId
        validator=this.validator
        validateOnBlur=this.validateOnBlur
        }} />
    </form>
  `,
  context: args
});

export const Default = Template.bind({});
Default.args = defaultArgs;
