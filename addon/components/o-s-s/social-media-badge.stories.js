import hbs from 'htmlbars-inline-precompile';

const SizeTypes = [
  'article',
  'facebook_status',
  'instagram_media',
  'tiktok_video',
  'story',
  'tweet',
  'pin',
  'youtube_video',
  'twitch_stream'
];

export default {
  title: 'Components/OSS::SocialMediaBadge',
  component: 'socialMediaBadge',
  argTypes: {
    postType: {
      type: { required: true },
      description: 'Adjust the size of the badge',
      table: {
        type: {
          summary: SizeTypes.join('|')
        },
        defaultValue: { summary: 'article' }
      },
      options: SizeTypes,
      control: { type: 'select' }
    },
    plain: {
      description: 'Displays the badge with a plain background',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      control: {
        type: 'boolean'
      }
    },
    selected: {
      description: 'Displays a checkbox',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      control: {
        type: 'boolean'
      }
    },
    onToggle: {
      type: { required: false },
      description: 'Action triggered when clicking on the badge',
      table: {
        category: 'Actions',
        type: {
          summary: 'onToggle(postType: String): void'
        }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'Displays an icon or an image in a round badge.'
      }
    }
  }
};

const defaultArgs = {
  postType: 'pin',
  plain: false,
  selected: false,
  onToggle: undefined
};

const Template = (args) => ({
  template: hbs`
    <OSS::SocialMediaBadge @postType={{this.postType}} @onToggle={{this.onToggle}} @selected={{this.selected}}
                @plain={{this.plain}} />
  `,
  context: args
});

export const Default = Template.bind({});
Default.args = defaultArgs;
