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
    },
    onChange: {
      type: { required: false },
      description: 'The action triggered when a rating star is clicked',
      table: {
        category: 'Actions',
        type: { summary: 'onChange(index: number): void' }
      }
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
  rating: 3,
  onChange: (index) => alert('clicked on ' + index)
};

const BasicUsageTemplate = (args) => ({
  template: hbs`
    <div style="padding: 12px; background: white">
       <OSS::Attribute::Rating
                                @label="Rating"
                                @rating={{this.rating}}
                                @onChange={{this.onChange}} />
    </div>
  `,
  context: args
});

export const Default = BasicUsageTemplate.bind({});
Default.args = defaultArgs;
