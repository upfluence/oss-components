import hbs from 'htmlbars-inline-precompile';

export default {
  title: 'Components/OSS::PasswordInput',
  component: 'password-input',
  argTypes: {
    value: {
      description: 'Value of the password input',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: false }
      },
      control: { type: 'text' }
    },
    errorMessage: {
      description: 'Error message that is displayed when the password pattern is invalid',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: false }
      },
      control: { type: 'text' }
    }
  }
};

const DefaultUsageTemplate = (args) => ({
  template: hbs`
      <OSS::PasswordInput @value={{this.value}} />
  `,
  context: args
});
export const BasicUsage = DefaultUsageTemplate.bind({});
BasicUsage.args = {
  value: 'myPassword',
  errorMessage: ''
};
