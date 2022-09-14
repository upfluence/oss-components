import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/OSS::ButtonDropdown',
  component: 'button-dropdown',
  argTypes: {
    icon: {
      description: 'The icon displayed left to the button label'
    },
    title: {
      description: 'Button label',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: false }
      },
      control: { type: 'text' }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'A button that provides multiple actions in dropdown menu.'
      }
    }
  }
};

const BasicUsageTemplate = (args) => ({
  template: hbs`
    <div class="background-color-white padding-px-36">
      <OSS::ButtonDropdown @icon={{this.icon}} @label={{this.label}}>
        <:items>
          <div class="oss-button-dropdown__item">
            <i class="fas fa-share"></i> Share
          </div>
        </:items>
      </OSS::ButtonDropdown>
    </div>
  `,
  context: args
});
export const Usage = BasicUsageTemplate.bind({});
Usage.args = {
  icon: 'fa fa-user',
  label: 'Actions'
};
