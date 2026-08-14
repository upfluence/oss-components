import Component from '@glimmer/component';
import type { SizeType, SkinType } from '@upfluence/oss-components/components/o-s-s/badge';

interface OSSStatsBannerArgs {
  loading?: boolean;
  title?: string;
  statValue?: string;
  statExtraInfo?: string;
  badgeIcon?: string;
  badgeImage?: string;
  badgeText?: string;
  badgeSkin?: SkinType;
  badgeSize?: SizeType;
  badgePlain?: boolean;
}

export default class OSSStatsBanner extends Component<OSSStatsBannerArgs> {
  get loading(): boolean {
    return this.args.loading ?? false;
  }

  get hasBadgeContent(): boolean {
    return Boolean(this.args.badgeIcon || this.args.badgeImage || this.args.badgeText);
  }
}
