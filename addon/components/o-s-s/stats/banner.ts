import Component from '@glimmer/component';
import type { OSSTagArgs } from '@upfluence/oss-components/components/o-s-s/tag';
import type { OSSBadgeArgs } from '@upfluence/oss-components/components/o-s-s/badge';
import type { OSSIconArgs } from '@upfluence/oss-components/components/o-s-s/icon';

export type StatsBannerExtraInfoTag = Pick<OSSTagArgs, 'label' | 'skin' | 'icon' | 'plain'>;
export type StatsBannerBadge = Pick<OSSBadgeArgs, 'icon' | 'image' | 'text' | 'skin'>;
export type StatsBannerExtraIcon = { icon: string; color?: string };

interface OSSStatsBannerSignature {
  loading?: boolean;
  title?: string;
  titleInfo?: string;
  statValue?: string;
  statExtraInfo?: string;
  extraInfoTag?: StatsBannerExtraInfoTag;
  badge?: StatsBannerBadge;
  extraIcon?: StatsBannerExtraIcon;
}

export default class OSSStatsBanner extends Component<OSSStatsBannerSignature> {
  get loading(): boolean {
    return this.args.loading ?? false;
  }
}
