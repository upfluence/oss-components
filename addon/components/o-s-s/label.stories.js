import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/OSS::Label',
  component: 'label',
  argTypes: {
    text: {
      description: 'The text content of the label',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' }
      }
    },
    size: {
      description: 'The size of the label',
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg'],
      table: {
        type: { summary: 'xs | sm | md | lg' },
        defaultValue: { summary: 'md' }
      }
    },
    weight: {
      description: 'The font weight of the label',
      control: { type: 'select' },
      options: ['normal', 'medium', 'semibold', 'bold'],
      table: {
        type: { summary: 'normal | medium | semibold | bold' },
        defaultValue: { summary: 'normal' }
      }
    },
    required: {
      description: 'Whether the label indicates a required field',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    disabled: {
      description: 'Whether the label is disabled',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    for: {
      description: 'The ID of the form control the label is associated with',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          'A form label component that provides consistent styling and behavior for form labels. Supports different sizes, weights, and states including required and disabled states.'
      }
    }
  }
};

const defaultArgs = {
  text: 'Label Text',
  size: 'md',
  weight: 'normal',
  required: false,
  disabled: false
};

export const Default = {
  args: defaultArgs,
  render: () => ({
    template: hbs`<OSS::Label @text={{@text}} @size={{@size}} @weight={{@weight}} @required={{@required}} @disabled={{@disabled}} @for={{@for}} />`
  })
};

export const WithBlock = {
  args: {
    ...defaultArgs,
    text: undefined
  },
  render: () => ({
    template: hbs`
      <OSS::Label @size={{@size}} @weight={{@weight}} @required={{@required}} @disabled={{@disabled}} @for={{@for}}>
        Custom <strong>Block</strong> Content
      </OSS::Label>
    `
  })
};

export const Required = {
  args: {
    ...defaultArgs,
    required: true
  },
  render: () => ({
    template: hbs`<OSS::Label @text={{@text}} @size={{@size}} @weight={{@weight}} @required={{@required}} @disabled={{@disabled}} @for={{@for}} />`
  })
};

export const Disabled = {
  args: {
    ...defaultArgs,
    disabled: true
  },
  render: () => ({
    template: hbs`<OSS::Label @text={{@text}} @size={{@size}} @weight={{@weight}} @required={{@required}} @disabled={{@disabled}} @for={{@for}} />`
  })
};

export const Sizes = {
  render: () => ({
    template: hbs`
      <div class="fx-col fx-gap-px-12">
        <OSS::Label @text="Extra Small Label" @size="xs" />
        <OSS::Label @text="Small Label" @size="sm" />
        <OSS::Label @text="Medium Label" @size="md" />
        <OSS::Label @text="Large Label" @size="lg" />
      </div>
    `
  })
};

export const Weights = {
  render: () => ({
    template: hbs`
      <div class="fx-col fx-gap-px-12">
        <OSS::Label @text="Normal Weight" @weight="normal" />
        <OSS::Label @text="Medium Weight" @weight="medium" />
        <OSS::Label @text="Semibold Weight" @weight="semibold" />
        <OSS::Label @text="Bold Weight" @weight="bold" />
      </div>
    `
  })
};

export const WithFormControl = {
  render: () => ({
    template: hbs`
      <div class="fx-col fx-gap-px-6">
        <OSS::Label @text="Email Address" @for="email-input" @required={{true}} />
        <input id="email-input" type="email" class="upf-input" placeholder="Enter your email" />
        
        <OSS::Label @text="Password" @for="password-input" @required={{true}} />
        <input id="password-input" type="password" class="upf-input" placeholder="Enter your password" />
      </div>
    `
  })
};
