import Component from '@glimmer/component';
import { action } from '@ember/object';

import { assert } from '@ember/debug';

export enum PostType {
  'article',
  'facebook_status',
  'instagram_media',
  'tiktok_video',
  'story',
  'tweet',
  'pin',
  'youtube_video',
  'twitch_stream'
}

type MatchingElement = { key: string; icon: string };

const mediaMatching: MatchingElement[] = [
  {
    key: PostType[PostType.article],
    icon: 'fab fa-wordpress'
  },
  {
    key: PostType[PostType.facebook_status],
    icon: 'fab fa-facebook'
  },
  {
    key: PostType[PostType.instagram_media],
    icon: 'fab fa-instagram'
  },
  {
    key: PostType[PostType.tiktok_video],
    icon: 'fab fa-tiktok'
  },
  {
    key: PostType[PostType.story],
    icon: 'far fa-circle-notch'
  },
  {
    key: PostType[PostType.tweet],
    icon: 'fab fa-twitter'
  },
  {
    key: PostType[PostType.pin],
    icon: 'fab fa-pinterest'
  },
  {
    key: PostType[PostType.youtube_video],
    icon: 'fab fa-youtube'
  },
  {
    key: PostType[PostType.twitch_stream],
    icon: 'fab fa-twitch'
  }
];

interface OSSSocialMediaBadgeArgs {
  postType: PostType;
  selected?: boolean;
  plain?: boolean;
  onToggle?(postType: string): void;
}

export default class OSSSocialMediaBadge extends Component<OSSSocialMediaBadgeArgs> {
  constructor(owner: unknown, args: OSSSocialMediaBadgeArgs) {
    super(owner, args);

    assert(
      '[component][OSS::SocialMediaBadge] The @postType parameter of type PostType is mandatory',
      this.args.postType
    );

    assert(
      '[component][OSS::SocialMediaBadge] The @postType parameter should be a value of PostType',
      Object.values(PostType)
        .filter((el: any) => isNaN(el))
        .includes(this.args.postType)
    );
  }

  get computedClasses(): string {
    const classes = ['oss-social-media-badge', `oss-social-media-badge--${this.args.postType}`];

    if (this.args.plain) {
      classes.push('oss-social-media-badge--plain');
    }

    if (this.args.selected) {
      classes.push('oss-social-media-badge--selected');
    }

    return classes.join(' ');
  }

  get iconDefinition(): string {
    return mediaMatching.find((el: MatchingElement) => el.key === this.args.postType.toString())?.icon || '';
  }

  @action
  onPostTypeClick(event: MouseEvent): void {
    event.stopPropagation();

    this.args.onToggle?.(this.args.postType.toString());
  }
}
