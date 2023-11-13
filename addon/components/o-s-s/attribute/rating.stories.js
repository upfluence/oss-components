import hbs from 'htmlbars-inline-precompile';

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
