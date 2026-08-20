import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import type IntlService from 'ember-intl/services/intl';
import type { OSSTagArgs } from '@upfluence/oss-components/components/o-s-s/tag';
import type { OSSBadgeArgs } from '@upfluence/oss-components/components/o-s-s/badge';
import type { OSSIconArgs } from '@upfluence/oss-components/components/o-s-s/icon';

export type StatsBannerBadgeArgs = Pick<OSSBadgeArgs, 'icon' | 'image' | 'text' | 'skin'>;
export type StatsBannerExtraIconArgs = Pick<OSSIconArgs, 'icon'> & { color?: string };
export type StatsBannerTag = Pick<OSSTagArgs, 'label' | 'skin' | 'icon' | 'plain'>;
export type StatsBannerTitle = {
  text: string;
  infoCircle?: string;
};
export type StatsBannerStatValue = {
  label: ReturnType<IntlService['t']> | string;
  suffix?: ReturnType<IntlService['t']> | string;
  tags?: StatsBannerTag[];
};
export type StatsBannerBadge = StatsBannerBadgeArgs & {
  extraIcon?: StatsBannerExtraIconArgs;
};

interface OSSStatsBannerSignature {
  titleConfig: StatsBannerTitle;
  badge?: StatsBannerBadge;
  loading?: boolean;
  statValue?: StatsBannerStatValue;
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
