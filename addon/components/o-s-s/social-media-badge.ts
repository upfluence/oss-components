import Component from '@glimmer/component';
import { action } from '@ember/object';

import { assert } from '@ember/debug';

export type SocialMediaType =
  | 'article'
  | 'facebook_status'
  | 'instagram_media'
  | 'tiktok_video'
  | 'story'
  | 'tweet'
  | 'pin'
  | 'youtube_video'
  | 'twitch_stream';

type skinDefinitionType = { [key in SocialMediaType]: string };

export const skinMatching: skinDefinitionType = {
  article: 'fab fa-wordpress',
  facebook_status: 'fab fa-facebook',
  instagram_media: 'fab fa-instagram',
  tiktok_video: 'fab fa-tiktok',
  story: 'far fa-circle-notch',
  tweet: 'fab fa-twitter',
  pin: 'fab fa-pinterest',
  youtube_video: 'fab fa-youtube',
  twitch_stream: 'fab fa-twitch'
};

interface OSSSocialMediaBadgeArgs {
  socialMedia: SocialMediaType;
  selected?: boolean;
  plain?: boolean;
  tooltip?: string;
  onToggle?(socialMedia: string): void;
}

export default class OSSSocialMediaBadge extends Component<OSSSocialMediaBadgeArgs> {
  constructor(owner: unknown, args: OSSSocialMediaBadgeArgs) {
    super(owner, args);

    assert(
      '[component][OSS::SocialMediaBadge] The @socialMedia parameter of type SocialMediaType is mandatory',
      this.args.socialMedia
    );

    assert(
      '[component][OSS::SocialMediaBadge] The @socialMedia parameter should be a value of SocialMediaType',
      Object.keys(skinMatching).includes(this.args.socialMedia)
    );
  }

  get computedClasses(): string {
    const classes = ['oss-social-media-badge', `oss-social-media-badge--${this.args.socialMedia}`];

    if (this.args.plain) {
      classes.push('oss-social-media-badge--plain');
    }

    if (this.args.selected) {
      classes.push('oss-social-media-badge--selected');
    }

    return classes.join(' ');
  }

  get iconDefinition(): string {
    return skinMatching[this.args.socialMedia];
  }

  @action
  onMediaTypeClick(event: MouseEvent): void {
    event.stopPropagation();

    this.args.onToggle?.(this.args.socialMedia);
  }
}
