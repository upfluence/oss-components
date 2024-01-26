import { hbs } from 'ember-cli-htmlbars';

const SocialPostTypes = [
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
  title: 'Components/OSS::SocialPostBadge',
  component: 'socialPostBadge',
  argTypes: {
    postType: {
      type: { required: true },
      description: 'Type of the media used to load icon & style',
      table: {
        type: {
          summary: SocialPostTypes.join('|')
        },
        defaultValue: { summary: '' }
      },
      options: SocialPostTypes,
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
          summary: 'onToggle(postType: string): void'
        }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'Displays a social media skin in a round badge.'
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
    <OSS::SocialPostBadge @postType={{this.postType}} @onToggle={{this.onToggle}} @selected={{this.selected}} @plain={{this.plain}}/>
  `,
  context: args
});

export const Default = Template.bind({});
Default.args = defaultArgs;
