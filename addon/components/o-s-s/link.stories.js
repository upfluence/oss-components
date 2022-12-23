import hbs from 'htmlbars-inline-precompile';

export default {
  title: 'Components/OSS::Link',
  component: 'link',
  argTypes: {
    icon: {
      description: 'Icon set on the left position. Font Awesome class, for example: far fa-link',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    label: {
      description: 'Label of the link.',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    transitionTo: {
      description: 'Redirect to the route name of the Ember router',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
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
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'object' }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'A button component used to target external content.'
      }
    }
  }
};

const defaultArgs = {
  icon: 'far fa-link',
  label: 'I am link',
  transitionTo: undefined,
  link: {
    href: 'https://www.google.fr',
    target: '_blank'
  }
};

const Template = (args) => ({
  template: hbs`
      <OSS::Link @icon={{this.icon}} @label={{this.label}} @transitionTo={{this.transitionTo}} @link={{this.link}} />
  `,
  context: args
});

export const BasicUsage = Template.bind({});
BasicUsage.args = {
  ...defaultArgs
};
