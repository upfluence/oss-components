import { hbs } from 'ember-cli-htmlbars';

const StyleTypes = ['solid', 'regular', 'light', 'duotone', 'brand', 'duotone-regular'];

export default {
  title: 'Components/OSS::Icon',
  component: 'icon',
  argTypes: {
    icon: {
      description: 'The fontawesome icon value',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' },
      type: { required: true }
    },
    style: {
      description: 'The style of the fontawesome icon',
      table: {
        type: {
          summary: StyleTypes.join('|')
        },
        defaultValue: { summary: 'regular' }
      },
      options: StyleTypes,
      control: { type: 'select' }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'An fontawesome icon at 5.15.4 version'
      },
      iframeHeight: 200
    }
  }
};

const defaultArgs = {
  icon: 'fa-laptop-code',
  style: 'regular'
};

const Template = (args) => ({
  template: hbs`
    <div style="font-size: 60px;">
      <OSS::Icon @icon={{this.icon}} @style={{this.style}} />
    </div>
  `,
  context: args
});

export const BasicUsage = Template.bind({});
BasicUsage.args = defaultArgs;
