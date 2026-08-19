import Component from '@glimmer/component';
import type { OSSTagArgs } from '@upfluence/oss-components/components/o-s-s/tag';
import type { OSSBadgeArgs } from '@upfluence/oss-components/components/o-s-s/badge';
import type { OSSIconArgs } from '@upfluence/oss-components/components/o-s-s/icon';

export type StatsBannerExtraInfoTagConfig = Pick<OSSTagArgs, 'label' | 'skin' | 'icon' | 'plain'>;
export type StatsBannerBadgeConfig = Pick<OSSBadgeArgs, 'icon' | 'image' | 'text' | 'skin'>;
export type StatsBannerExtraIconConfig = Pick<OSSIconArgs, 'icon'> & { color?: string };

interface OSSStatsBannerSignature {
  loading?: boolean;
  title?: string;
  titleInfoCircle?: string;
  badgeConfig?: StatsBannerBadgeConfig;
  extraIconConfig?: StatsBannerExtraIconConfig;
  extraInfoTagConfig?: StatsBannerExtraInfoTagConfig;
  statValue?: string;
  statExtraInfo?: string;
}

export default class OSSStatsBanner extends Component<OSSStatsBannerSignature> {}
