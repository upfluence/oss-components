import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Helpers & Modifiers/Helpers/Form-Field-Feedback/Definition',
  argTypes: {
    form: {
      description: 'The name of the form from which the feedback message should be retrieved.',
      table: {
        type: {
          summary: 'string'
        }
      },
      control: { type: 'text' }
    },
    fieldId: {
      description: 'The unique identifier of the field whose feedback message should be displayed.',
      table: {
        type: {
          summary: 'string'
        }
      },
      control: { type: 'text' }
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          'Helper that returns a feedback message (e.g., validation error) for a specific field managed by the `FormManager` service.'
      }
    }
  }
};

const defaultArgs = {
  form: 'form-instance',
  fieldId: 'field-id'
};

const Template = (args) => ({
  template: hbs`
    <form id={{this.form}}>
      <OSS::InputContainer @value="Hello world" @feedback={{form-field-feedback this.form this.fieldId}} />
    </form>
  `,
  context: args
});

export const Default = Template.bind({});
Default.args = defaultArgs;
