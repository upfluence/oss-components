import hbs from 'htmlbars-inline-precompile';

export default {
  title: 'Components/OSS::Link',
  component: 'link',
  argTypes: {
    icon: {
      type: { required: true },
      description: 'Icon set on the left position.',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'null' }
      },
      control: { type: 'text' }
    },
    label: {
      type: { required: true },
      description: 'Label of the link.',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'null' }
      },
      control: { type: 'text' }
    },
    transitionTo: {
      description: 'Redirect to the route name of the Ember router',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'null' }
      },
      control: { type: 'text' }
    },
    link: {
      description:
        "Object composed of 'href' and 'target' which allows to define the redirection. These are the same attributes as for the HTML element <a />",
      table: {
        type: {
          summary: 'object'
        },
        defaultValue: { summary: 'null' }
      },
      control: { type: 'object' }
    }
  }
};

const DefaultUsageTemplate = (args) => ({
  template: hbs`
      <OSS::Link @icon={{this.icon}} @label={{this.label}} @transitionTo={{this.transitionTo}} @link={{this.link}} />
  `,
  context: args
});
export const BasicUsage = DefaultUsageTemplate.bind({});
BasicUsage.args = {
  icon: 'fas fa-link',
  label: 'I am link',
  transitionTo: 'workflow.create',
  link: {
    href: 'https://www.google.fr',
    target: '_blank'
  }
};
