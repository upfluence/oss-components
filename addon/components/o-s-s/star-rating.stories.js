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
      description: 'Number of active stars to display',
      table: {
        type: {
          summary: 'number'
        },
        defaultValue: { summary: false }
      },
      control: { type: 'number' }
    },
    totalStars: {
      description: 'Total Amount of stars to display',
      table: {
        type: {
          summary: 'number'
        },
        defaultValue: { summary: false }
      },
      control: { type: 'number' }
    },
    activeColor: {
      description: 'The color of the active stars',
      table: {
        type: {
          summary: STAR_COLORS.join('|')
        },
        defaultValue: { summary: null }
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
        defaultValue: { summary: null }
      },
      options: STAR_COLORS,
      control: { type: 'select' }
    }
  }
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
Usage.args = {
  rating: 3,
  totalStars: 5,
  activeColor: 'yellow',
  passiveColor: 'grey'
};
