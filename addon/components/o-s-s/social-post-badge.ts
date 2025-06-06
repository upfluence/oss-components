import Component from '@glimmer/component';
import { action } from '@ember/object';

import { assert } from '@ember/debug';

export type SocialPostType =
  | 'article'
  | 'facebook_status'
  | 'instagram_media'
  | 'instagram_reel'
  | 'tiktok_video'
  | 'story'
  | 'tweet'
  | 'pin'
  | 'youtube_video'
  | 'youtube_short'
  | 'twitch_stream';

type skinDefinitionType = { [key in SocialPostType]: string };

export const skinMatching: skinDefinitionType = {
  article: 'fab fa-wordpress',
  facebook_status: 'fab fa-facebook-f',
  instagram_media: 'fab fa-instagram',
  instagram_reel: 'instagram-reel.svg',
  tiktok_video: 'fab fa-tiktok',
  story: 'far fa-circle-notch',
  tweet: 'fab fa-x-twitter',
  pin: 'fab fa-pinterest',
  youtube_video: 'fab fa-youtube',
  youtube_short: 'youtube-short.svg',
  twitch_stream: 'fab fa-twitch'
};

interface OSSSocialPostBadgeArgs {
  postType: SocialPostType;
  selected?: boolean;
  plain?: boolean;
  onToggle?(postType: string): void;
}

export default class OSSSocialPostBadge extends Component<OSSSocialPostBadgeArgs> {
  constructor(owner: unknown, args: OSSSocialPostBadgeArgs) {
    super(owner, args);
    assert(
      '[component][OSS::SocialPostBadge] The @postType parameter of type String is mandatory',
      typeof this.args.postType === 'string'
    );

    assert(
      '[component][OSS::SocialPostBadge] The @postType parameter should be a value of SocialPostType',
      Object.keys(skinMatching).includes(this.args.postType)
    );
  }

  get computedClasses(): string {
    const classes = ['oss-social-post-badge', `oss-social-post-badge--${this.args.postType}`];

    if (this.args.plain) {
      classes.push('oss-social-post-badge--plain');
    }

    if (this.args.selected) {
      classes.push('oss-social-post-badge--selected');
    }

    return classes.join(' ');
  }

  get iconDefinition(): string {
    return skinMatching[this.args.postType];
  }

  get isFontAwesomeIcon(): boolean {
    return !this.iconDefinition.includes('.svg');
  }

  @action
  onPostTypeClick(event: MouseEvent): void {
    event.stopPropagation();

    this.args.onToggle?.(this.args.postType);
  }
}
