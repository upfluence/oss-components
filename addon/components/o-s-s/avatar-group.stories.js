import { hbs } from 'ember-cli-htmlbars';

const SizeTypes = ['xs', 'sm', 'md', 'lg'];

export default {
  title: 'Components/OSS::AvatarGroup',
  argTypes: {
    avatars: {
      description: 'Avatars to display',
      table: {
        type: {
          summary: '{ image?: string, initials?: string }[]'
        }
      },
      control: {
        type: '{ image?: string, initials?: string }[]'
      }
    },
    size: {
      description: 'Adjust the size of the avatars',
      table: {
        type: {
          summary: SizeTypes.join('|')
        },
        defaultValue: { summary: 'md' }
      },
      options: SizeTypes,
      control: { type: 'select' }
    },
    max: {
      description: 'Maximum number of avatars to display',
      table: {
        type: {
          summary: 'number'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: {
        type: 'number'
      }
    },
    loading: {
      description: 'Display loading state',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: 'false' }
      },
      control: { type: 'boolean' }
    },
    loadingCount: {
      description: 'Maximum number of avatars to display',
      table: {
        type: {
          summary: 'number'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: {
        type: 'number'
      }
    }
  }
};

const defaultArgs = {
  avatars: [
    { image: 'https://images.frandroid.com/wp-content/uploads/2019/11/jony-ive-apple.jpg', initials: 'JI' },
    {
      image: 'https://cdn.dribbble.com/users/485347/screenshots/2983299/8_most_influential_people_dribble-01.jpg',
      initials: 'SF'
    }
  ],
  size: 'md',
  max: null,
  loading: false,
  loadingCount: null
};

const Template = (args) => ({
  template: hbs`
    <OSS::AvatarGroup @avatars={{this.avatars}} @size={{this.size}} @max={{this.max}} @loading={{this.loading}} @loadingCount={{this.loadingCount}} />
  `,
  context: args
});

export const Default = Template.bind({});
Default.args = {
  ...defaultArgs,
  ...{ image: 'https://images.frandroid.com/wp-content/uploads/2019/11/jony-ive-apple.jpg' }
};
