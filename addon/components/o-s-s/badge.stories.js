import hbs from 'htmlbars-inline-precompile';

const SizeTypes = ['sm', 'md', 'lg'];

export default {
  title: 'Components/OSS::Badge',
  component: 'badge',
  argTypes: {
    size: {
      description: 'Adjust the size of the badge',
      table: {
        type: {
          summary: SizeTypes.join('|')
        },
        defaultValue: { summary: 'md' }
      },
      options: SizeTypes,
      control: { type: 'select' }
    },
    icon: {
      description: 'Font Awesome class, for example',
      table: {
        type: { summary: 'far fa-envelope-open | fas fa-volume-up' },
        defaultValue: { summary: 'undefined' }
      },
      control: false
    },
    image: {
      description: 'URL of an image',
      table: {
        defaultValue: { summary: 'undefined' }
      },
      control: false
    },
    text: {
      description: 'Text to display inside the badge',
      table: {
        defaultValue: { summary: 'undefined' }
      },
      control: false
    }
  }
};

const defaultArgs = {
  size: null,
  icon: null,
  image: null,
  text: null
};

const Template = (args) => ({
  template: hbs`
    <OSS::Badge @image={{this.image}} @icon={{this.icon}} @text={{this.text}} @size={{this.size}} />
  `,
  context: args
});

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...defaultArgs,
  ...{ icon: 'fas fa-volume-up' }
};

export const WithImage = Template.bind({});
WithImage.args = {
  ...defaultArgs,
  ...{ image: 'https://images.frandroid.com/wp-content/uploads/2019/11/jony-ive-apple.jpg' }
};

export const WithText = Template.bind({});
WithText.args = {
  ...defaultArgs,
  ...{ text: '2x' }
};