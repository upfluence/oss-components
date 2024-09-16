import { hbs } from 'ember-cli-htmlbars';

const Placements = ['top', 'right', 'bottom', 'left'];
const Sizes = [null, 'sm', 'md'];

export default {
  title: 'Components/OSS::Popover',
  argTypes: {
    arrowPlacement: {
      description: 'The arrow placement definition',
      table: {
        type: {
          summary: Placements.join(' | ')
        },
        defaultValue: { summary: null }
      },
      options: Placements,
      control: { type: 'select' }
    },
    size: {
      description: 'Adjust size',
      table: {
        type: {
          summary: Sizes.join('|')
        },
        defaultValue: { summary: 'undefined' }
      },
      options: Sizes,
      control: { type: 'select' }
    },
    title: {
      description: 'Title of the popover',
      table: {
        type: { summary: 'string' }
      },
      control: {
        type: 'text'
      }
    },
    subtitle: {
      table: {
        description: 'Subtitle of the popover (optional)',
        type: { summary: 'string' }
      },
      control: {
        type: 'text'
      }
    }
  }
};

const defaultArgs = {
  arrowPlacement: 'top',
  title: 'Popover Title',
  subtitle: 'Subtitle',
  size: 'sm'
};

const Template = (args) => ({
  template: hbs`
    <OSS::Popover @arrowPlacement={{this.arrowPlacement}} @title={{this.title}} @subtitle={{this.subtitle}} @size={{this.size}}>
      <:content>
        Popover content
      </:content>
    </OSS::Popover>
  `,
  context: args
});

const WithContextualActionsTemplate = (args) => ({
  template: hbs`
    <OSS::Popover @arrowPlacement={{this.arrowPlacement}} @title={{this.title}} @subtitle={{this.subtitle}} @size={{this.size}}>
      <:contextual-actions>
        Contextual Actions
      </:contextual-actions>

      <:content>
        Popover content
      </:content>
    </OSS::Popover>
  `,
  context: args
});

const WithIllustrationTemplate = (args) => ({
  template: hbs`
    <OSS::Popover @arrowPlacement={{this.arrowPlacement}} @title={{this.title}} @subtitle={{this.subtitle}} @size={{this.size}}>
      <:illustration>
        Illustration
      </:illustration>

      <:content>
        Popover content
      </:content>
    </OSS::Popover>
  `,
  context: args
});

export const Default = Template.bind({});
Default.args = defaultArgs;

export const WithContextualActions = WithContextualActionsTemplate.bind({});
WithContextualActions.args = defaultArgs;

export const WithIllustration = WithIllustrationTemplate.bind({});
WithIllustration.args = defaultArgs;
