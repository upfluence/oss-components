import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/OSS::Attribute::Rating',
  component: 'rating',
  argTypes: {
    label: {
      type: { required: true },
      description: 'The value of the label',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    rating: {
      description: 'The value of the rating',
      table: {
        type: {
          summary: 'number'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'number' }
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          'Member of the Attribute displays. The OSS::Attribute::Rating is a component that displays a label & a star rating'
      },
      iframeHeight: 150
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/N7SDuH9mvC9zTlsLN49N4L/2.0-UI-Kit-%F0%9F%92%A0?node-id=1521-25950&p=f&t=pVIlyZlo6oyvIQxs-0'
    }
  }
};

const defaultArgs = {
  label: 'Label',
  rating: 3
};

const BasicUsageTemplate = (args) => ({
  template: hbs`
    <div style="padding: 12px; background: white">
       <OSS::Attribute::Rating  @label={{this.label}}
                                @rating={{this.rating}} />
    </div>
  `,
  context: args
});

export const Default = BasicUsageTemplate.bind({});
Default.args = defaultArgs;
