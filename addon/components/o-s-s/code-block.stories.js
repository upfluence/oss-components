import hbs from 'htmlbars-inline-precompile';

export default {
  title: 'Components/OSS::CodeBlock',
  component: 'code-block',
  argTypes: {
    content: {
      description: 'Parameter to pass a code snippet',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: false }
      },
      control: { type: 'text' }
    },
    copyable: {
      description: '[OPTIONAL] Enable the Copy button. Will copy the code snippet to the clipboard',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: false }
      },
      control: { type: 'boolean' }
    },
    scrollable: {
      description: `[OPTIONAL] If enabled, the user will be able to scroll the code snippet.
      If disabled, the code snippet will be fixed to the top and the inner shadow will be displayed.`,
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: false }
      },
      control: { type: 'boolean' }
    },
    collapseHeight: {
      description: `[OPTIONAL] Takes a number as parameter. The component height will be set to this value.
      The collapse & uncollapse buttons will be available. Uncollapsing will double the value passed in parameter.`,
      table: {
        type: {
          summary: 'number'
        },
        defaultValue: { summary: false }
      },
      control: { type: 'number' }
    },
    onCopyMessage: {
      description: `[OPTIONAL] Message to display in the toast when the code snippet is copied to the clipboard.
      If not specified, no toast will be displayed.`,
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
        component: 'Used to display code blocks in pages.'
      }
    }
  }
};

const BasicUsageTemplate = (args) => ({
  template: hbs`
      <OSS::CodeBlock @content={{this.content}} @copyable={{this.copyable}}
                      @scrollable={{this.scrollable}} @collapseHeight={{this.collapseHeight}}
                      @onCopyMessage={{this.onCopyMessage}} />
  `,
  context: args
});
export const UsageWithIcon = BasicUsageTemplate.bind({});
UsageWithIcon.args = {
  content: `import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import ToastService from '@upfluence/oss-components/services/toast';

interface OSSCodeBlockArgs {
  content: string;
  copyable?: boolean;
  scrollable?: boolean;
  collapseHeight?: number;
  onCopyMessage?: string;
}`,
  copyable: true,
  scrollable: true,
  collapseHeight: 130,
  onCopyMessage: 'Copied to clipboard!'
};
