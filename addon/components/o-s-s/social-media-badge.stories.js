import hbs from 'htmlbars-inline-precompile';

const SocialMediaTypes = [
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
    socialMedia: {
      type: { required: true },
      description: 'Type of the media used to load icon & style',
      table: {
        type: {
          summary: SocialMediaTypes.join('|')
        },
        defaultValue: { summary: '' }
      },
      options: SocialMediaTypes,
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
    tooltip: {
      description: 'Add a tooltip on mouseover',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      control: {
        type: 'text'
      }
    },
    onToggle: {
      type: { required: false },
      description: 'Action triggered when clicking on the badge',
      table: {
        category: 'Actions',
        type: {
          summary: 'onToggle(mediaType: String): void'
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
  socialMedia: 'pin',
  plain: false,
  selected: false,
  tooltip: 'Pinterest',
  onToggle: undefined
};

const Template = (args) => ({
  template: hbs`
    <OSS::SocialMediaBadge @mediaType={{this.mediaType}} @onToggle={{this.onToggle}} @selected={{this.selected}}
                           @plain={{this.plain}} @tooltip={{this.tooltip}}/>        
  `,
  context: args
});

export const Default = Template.bind({});
Default.args = defaultArgs;
