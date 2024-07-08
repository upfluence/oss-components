import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/OSS::Slider',
  component: 'slider',
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: 'Displays a slider.'
      }
    }
  }
};

const defaultArgs = {
  value: 30,
  toggles: [
    { value: 'categories', label: 'Categories' },
    { value: 'products', label: 'Products' }
  ],
  label: 'Title here',
  labelInfoTooltip: 'Tooltip  here',
  onSwitchToggle: 'azeaze'
};

const Template = (args) => ({
  template: hbs`
    <OSS::Slider @value={{this.value}}
                  @label={{this.label}}
                  @labelInfoTooltip={{this.labelInfoTooltip}}
                  @toggles={{this.toggles}}
                  @onSwitchToggle={{this.onSwitchToggle}}
    />
  `,
  context: args
});

export const Default = Template.bind({});
Default.args = defaultArgs;
