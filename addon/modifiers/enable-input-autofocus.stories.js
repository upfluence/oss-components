import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Helpers & Modifiers/Modifiers/Input-Autofocus/Definition',
  parameters: {
    docs: {
      description: {
        component: 'A modifier to autofocus on the selected input or the first non-disabled input child.'
      }
    }
  }
};

const DefaultUsageTemplate = () => ({
  template: hbs`
    <div class="fx-col" style="justify-content: center; height: 200px; width: 750px; background-color: white">
      <OSS::InputContainer @value="Hello World" {{enable-input-autofocus}}/>
    </div>
  `
});

export const BasicUsage = DefaultUsageTemplate.bind({});
