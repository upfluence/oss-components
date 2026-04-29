import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { isSafeString } from '@upfluence/oss-components/utils';
import type { IntlService } from 'ember-intl';

export const COLOR_VARIANTS = ['blue', 'violet', 'yellow'] as const;
export type OSSFeatureCardColorVariant = (typeof COLOR_VARIANTS)[number];
const DEFAULT_COLOR_VARIANT = 'violet' as const satisfies OSSFeatureCardColorVariant;

export const SHADOW_VARIANTS = ['sm', 'lg'] as const;
export type OSSFeatureCardShadowVariant = (typeof SHADOW_VARIANTS)[number];
const DEFAULT_SHADOW_VARIANT = 'sm' as const satisfies OSSFeatureCardShadowVariant;

export type OSSFeatureCardImage = {
  src: string;
  alt?: string;
};

export type OSSFeatureCardArgs = {
  title: string | ReturnType<IntlService['t']>;
  description: string | ReturnType<IntlService['t']>;
  image: OSSFeatureCardImage;
  colorVariant?: OSSFeatureCardColorVariant;
  shadowVariant?: OSSFeatureCardShadowVariant;
};

export default class OSSFeatureCard extends Component<OSSFeatureCardArgs> {
  constructor(owner: unknown, args: OSSFeatureCardArgs) {
    super(owner, args);

    assert(
      '[OSS::FeatureCard] The @title parameter is mandatory',
      (typeof args.title === 'string' || isSafeString(args.title)) && args.title.toString().trim().length > 0
    );
    assert(
      '[OSS::FeatureCard] The @description parameter is mandatory',
      (typeof args.description === 'string' || isSafeString(args.description)) &&
        args.description.toString().trim().length > 0
    );
    assert(
      '[OSS::FeatureCard] The @image parameter is mandatory and must contain a src key',
      typeof args?.image?.src === 'string' && args.image.src.trim().length > 0
    );
    if (args.colorVariant) {
      assert(
        `[OSS::FeatureCard] @colorVariant must be one of: ${COLOR_VARIANTS.join(', ')}`,
        COLOR_VARIANTS.includes(args.colorVariant)
      );
    }
    if (args.shadowVariant) {
      assert(
        `[OSS::FeatureCard] @shadowVariant must be one of: ${SHADOW_VARIANTS.join(', ')}`,
        SHADOW_VARIANTS.includes(args.shadowVariant)
      );
    }
  }

  get colorVariant(): OSSFeatureCardColorVariant {
    return this.args.colorVariant ?? DEFAULT_COLOR_VARIANT;
  }

  get shadowVariant(): OSSFeatureCardShadowVariant {
    return this.args.shadowVariant ?? DEFAULT_SHADOW_VARIANT;
  }

  get computedClasses(): string {
    return [
      'oss-feature-card',
      `oss-feature-card--color-${this.colorVariant}`,
      `oss-feature-card--shadow-${this.shadowVariant}`
    ].join(' ');
  }

  get imageAlt(): string {
    return this.args.image.alt ?? '';
  }
}
