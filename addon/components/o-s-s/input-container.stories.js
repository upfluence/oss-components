import hbs from 'htmlbars-inline-precompile';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/OSS::InputContainer',
  component: 'input-container',
  argTypes: {
    value: {
      description: 'Value of the input',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: false }
      },
      control: { type: 'text' }
    },
    placeholder: {
      description: 'Placeholder of the input',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: false }
      },
      control: { type: 'text' }
    },
    onChange: {
      type: { name: 'Method' },
      description: 'Method called every time the input is updated',
      table: {
        type: {
          summary: 'onChange(value: string): void'
        }
      },
      control: { type: null }
    }
  }
};

const DefaultUsageTemplate = (args) => ({
  template: hbs`
      <OSS::InputContainer class="margin-bottom-sm" @value={{this.value}} />
  `,
  context: args
});
export const BasicUsage = DefaultUsageTemplate.bind({});
BasicUsage.args = {
  value: 'John'
};

const BasicWithParametersTemplate = (args) => ({
  template: hbs`
      <OSS::InputContainer class="margin-bottom-sm" data-control-name="input-firstname"
                         @value={{this.value}}
                         @onChange={{this.onChange}}
                         @placeholder={{this.placeholder}} />
  `,
  context: args
});
export const BasicWithParamaters = BasicWithParametersTemplate.bind({});
BasicWithParamaters.args = {
  placeholder: 'Enter your name',
  onChange: action('')
};

const AdvancedWithNamedBlocksTemplate = (args) => ({
  template: hbs`
      <OSS::InputContainer class="margin-bottom-sm" data-control-name="input-firstname">
        <:prefix>
          {{#if (gt this.lastname.length 0)}}
            <i class="fa fa-check text-color-success"></i>
          {{else}}
            <i class="fa fa-times text-color-error"></i>
          {{/if}}
        </:prefix>
        <:input>
          <Input @value={{this.lastname}} placeholder="My fancy custom input" />
        </:input>
        <:suffix>
          {{#if (gt this.lastname.length 0)}}
            <i class="fa fa-check text-color-success"></i>
          {{else}}
            <i class="fa fa-times text-color-error"></i>
          {{/if}}
        </:suffix>
      </OSS::InputContainer>
  `,
  context: args
});
export const AdvancedWithNamedBlocks = AdvancedWithNamedBlocksTemplate.bind({});
AdvancedWithNamedBlocks.args = {};
