import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/OSS::Layout::Navbar::NavItem',
  component: 'navbar item',
  parameters: {
    docs: {
      description: {
        component: 'Layout component to display an item in a navbar, which may be active.'
      },
      iframeHeight: 120
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/N7SDuH9mvC9zTlsLN49N4L/2.0-UI-Kit-%F0%9F%92%A0?node-id=1343-6206&p=f&t=AsdGbaychQPIaGnK-0'
    }
  },
  argTypes: {
    icon: {
      description: 'Font Awesome class, for example: far fa-envelope-open',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    label: {
      description: 'Text content of the navbar item',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' }
      },
      control: {
        type: 'text'
      }
    }
  }
};

const Template = (args) => ({
  template: hbs`
    <div style="height:100vh; padding:5px;">
     <OSS::Layout::Navbar::NavItem @icon={{this.icon}} @label={{this.label}} @active={{this.active}}>
      <:extra>
          <OSS::Link @label="Extra content link" />
      </:extra>
     </OSS::Layout::Navbar::NavItem>
    </div>
  `,
  context: args
});

const defaultArgs = {
  icon: 'fa-laptop-code',
  label: 'Label',
  active: false
};

export const BasicUsage = Template.bind({});
BasicUsage.args = defaultArgs;
