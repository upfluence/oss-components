import { hbs } from 'ember-cli-htmlbars';
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
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    disabled: {
      description: 'Disable the default input (when not passing an input named block)',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: false }
      },
      control: { type: 'boolean' }
    },
    placeholder: {
      description: 'Placeholder of the input',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    errorMessage: {
      description: 'An error message that will be displayed below the input-group.',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    onChange: {
      description: 'Method called every time the input is updated',
      table: {
        category: 'Actions',
        type: {
          summary: 'onChange(value: string): void'
        }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'The OSS version of the input component. Configurable & skinable.'
      }
    }
  }
};

const defaultArgs = {
  value: 'John',
  disabled: false,
  placeholder: 'this is the placeholder',
  errorMessage: undefined,
  onChange: action('onChange')
};

const DefaultUsageTemplate = (args) => ({
  template: hbs`
      <OSS::InputContainer @value={{this.value}} @disabled={{this.disabled}} @placeholder={{this.placeholder}}
                           @errorMessage={{this.errorMessage}} @onChange={{this.onChange}} />
  `,
  context: args
});

const AdvancedWithNamedBlocksTemplate = (args) => ({
  template: hbs`
      <OSS::InputContainer>
        <:prefix>
          {{#if (gt this.lastname.length 0)}}
            <OSS::Icon @icon="fa-check" class="font-color-success-500" />
          {{else}}
            <OSS::Icon @icon="fa-times" class="font-color-error-500" />
          {{/if}}
        </:prefix>
        <:input>
          <Input @value={{this.lastname}} placeholder="My fancy custom input" />
        </:input>
        <:suffix>
          {{#if (gt this.lastname.length 0)}}
            <OSS::Icon @icon="fa-check" class="font-color-success-500" />
          {{else}}
            <OSS::Icon @icon="fa-times" class="font-color-error-500" />
          {{/if}}
        </:suffix>
      </OSS::InputContainer>
  `,
  context: args
});

export const BasicUsage = DefaultUsageTemplate.bind({});
BasicUsage.args = defaultArgs;

export const AdvancedWithNamedBlocks = AdvancedWithNamedBlocksTemplate.bind({});
AdvancedWithNamedBlocks.args = {};
