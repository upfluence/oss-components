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
  },
  parameters: {
    docs: {
      description: {
        component: `Popover is a non-modal UI surface that displays contextual content and actions.`
      }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/N7SDuH9mvC9zTlsLN49N4L/2.0-UI-Kit-%F0%9F%92%A0?node-id=4559-5946&p=f&t=AsdGbaychQPIaGnK-0'
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

const WithCustomTitleTemplate = (args) => ({
  template: hbs`
    <OSS::Popover @arrowPlacement={{this.arrowPlacement}} @size={{this.size}}>
      <:title>
        Custom Title
      </:title>

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

export const WithCustomTitle = WithCustomTitleTemplate.bind({});
WithCustomTitle.args = defaultArgs;
