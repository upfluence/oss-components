import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/OSS::Illustration',
  argTypes: {
    src: {
      description: 'Path to an SVG Illustration',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' }
      },
      control: {
        type: 'text'
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'A component that loads/diplays svg files'
      }
    }
  }
};

const defaultArgs = {
  src: '/@upfluence/oss-components/assets/images/no-records.svg'
};

const Template = (args) => ({
  template: hbs`
    <OSS::Illustration @src={{this.src}} />
  `,
  context: args
});

export const Default = Template.bind({});
Default.args = defaultArgs;
