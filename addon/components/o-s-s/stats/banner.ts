import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import type { OSSTagArgs } from '@upfluence/oss-components/components/o-s-s/tag';
import type { OSSBadgeArgs } from '@upfluence/oss-components/components/o-s-s/badge';
import type { OSSIconArgs } from '@upfluence/oss-components/components/o-s-s/icon';

export type StatsBannerExtraInfoTagConfig = Pick<OSSTagArgs, 'label' | 'skin' | 'icon' | 'plain'>;
export type StatsBannerBadgeConfig = Pick<OSSBadgeArgs, 'icon' | 'image' | 'text' | 'skin'>;
export type StatsBannerExtraIconConfig = Pick<OSSIconArgs, 'icon'> & { color?: string };
export type StatsBannerTitle = {
  text: string;
  infoCircle?: string;
};
export type StatsBannerBadge = StatsBannerBadgeConfig & {
  extraIcon?: StatsBannerExtraIconConfig;
};

interface OSSStatsBannerSignature {
  titleConfig: StatsBannerTitle;
  badge?: StatsBannerBadge;
  loading?: boolean;
  extraInfoTagConfig?: StatsBannerExtraInfoTagConfig;
  statValue?: string;
  statExtraInfo?: string;
}

export default class OSSStatsBanner extends Component<OSSStatsBannerSignature> {
  constructor(owner: unknown, args: OSSStatsBannerSignature) {
    super(owner, args);

    assert(
      '[component][OSS::Stats::Banner] You must pass a title via @titleConfig.text.',
      Boolean(args.titleConfig?.text)
    );
  }
}
