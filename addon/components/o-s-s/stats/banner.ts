import { assert } from '@ember/debug';
import { action } from '@ember/object';
import Component from '@glimmer/component';

import type IntlService from 'ember-intl/services/intl';

import type { OSSBadgeArgs } from '@upfluence/oss-components/components/o-s-s/badge';
import type { OSSIconArgs } from '@upfluence/oss-components/components/o-s-s/icon';
import type { OSSTagArgs } from '@upfluence/oss-components/components/o-s-s/tag';

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
  titleConfig?: StatsBannerTitle;
  badge?: StatsBannerBadge;
  loading?: boolean;
  statValue?: StatsBannerStatValue;
}

export default class OSSStatsBanner extends Component<OSSStatsBannerSignature> {
  @action
  ensureBlockPresence(hasTitleBlock: boolean): void {
    assert(
      '[component][OSS::Stats::Banner] You must pass a title via @titleConfig.text or the "title" named block.',
      hasTitleBlock || Boolean(this.args.titleConfig?.text)
    );
  }
}
