import hbs from 'htmlbars-inline-precompile';

const STAR_COLORS = [
  'purple',
  'dark-purple',
  'orange',
  'rock-blue',
  'black',
  'white',
  'grey',
  'grey-light',
  'grey-dark',
  'yellow',
  'green',
  'red'
];

export default {
  title: 'Components/OSS::StarRating',
  component: 'star-rating',
  argTypes: {
    rating: {
      type: { required: true },
      description: 'Number of active stars to display',
      table: {
        type: {
          summary: 'number'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'number' }
    },
    totalStars: {
      type: { required: true },
      description: 'Total Amount of stars to display',
      table: {
        type: {
          summary: 'number'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'number' }
    },
    activeColor: {
      description: 'The color of the active stars',
      table: {
        type: {
          summary: STAR_COLORS.join('|')
        },
        defaultValue: { summary: 'yellow' }
      },
      options: STAR_COLORS,
      control: { type: 'select' }
    },
    passiveColor: {
      description: 'The color of the inactive stars',
      table: {
        type: {
          summary: STAR_COLORS.join('|')
        },
        defaultValue: { summary: 'grey' }
      },
      options: STAR_COLORS,
      control: { type: 'select' }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'Configurable component that can be used to assign ratings.'
      }
    }
  }
};

const defaultArgs = {
  rating: 3,
  totalStars: 5,
  activeColor: 'yellow',
  passiveColor: 'grey'
};

const BasicUsageTemplate = (args) => ({
  template: hbs`
      <OSS::StarRating @rating={{this.rating}}
                       @totalStars={{this.totalStars}}
                       @activeColor={{this.activeColor}}
                       @passiveColor={{this.passiveColor}} />
  `,
  context: args
});

export const Usage = BasicUsageTemplate.bind({});
Usage.args = defaultArgs;
