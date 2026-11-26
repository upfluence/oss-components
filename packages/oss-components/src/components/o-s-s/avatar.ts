import { assert } from '@ember/debug';
import { action } from '@ember/object';
import { service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

import type AssetMapService from '../../services/asset-map';

type SizeDefType = { [key in SizeType]: string };
export type SizeType = 'xs' | 'sm' | 'md' | 'lg';
export const SizeDefinition: SizeDefType = {
  xs: 'upf-avatar--xs',
  sm: 'upf-avatar--sm',
  md: 'upf-avatar--md',
  lg: 'upf-avatar--lg'
};

export const AvatarSkins = [
  'danger',
  'xtd-orange',
  'xtd-violet-light',
  'xtd-violet',
  'xtd-lime',
  'primary',
  'primary-light',
  'xtd-cyan'
] as const;

export type SkinType = (typeof AvatarSkins)[number];

export interface OSSAvatarArgs {
  image?: string;
  initials?: string;
  size?: SizeType;
  loading?: boolean;
  skin?: SkinType;
}

export const DEFAULT_IMAGE_URL: string = '/@upfluence/oss-components/assets/images/avatar-placeholder.svg';

export default class OSSAvatar extends Component<OSSAvatarArgs> {
  @service('asset-map') declare assetMap: AssetMapService;
  @tracked hasError: boolean = false;

  get displayInitials(): boolean {
    return (!this.args.image || this.hasError) && !!this.args.initials;
  }

  get defaultImage(): string {
    return this.assetMap.resolve(DEFAULT_IMAGE_URL);
  }

  get image(): string | undefined {
    return this.args.image ?? this.defaultImage;
  }

  get imageClass(): string {
    return this.image === this.defaultImage || this.hasError ? 'default-img-placeholder' : '';
  }

  get computedClass(): string {
    const classes = ['upf-avatar'];
    const size: SizeType = this.args.size || 'md';

    if (this.args.loading) {
      classes.push('upf-avatar--loading');
    }

    if (this.args.skin) {
      assert(
        `[component][OSS::Avatar] Unknown skin. Available skins are: ${AvatarSkins.join(', ')}`,
        AvatarSkins.includes(this.args.skin as SkinType)
      );
      classes.push('upf-avatar--skin', `upf-avatar--skin-${this.args.skin}`);
    }

    assert(
      `[component][OSS::Avatar] Unknown size. Available sizes are: ${Object.keys(SizeDefinition).join(', ')}`,
      Object.keys(SizeDefinition).includes(size as SizeType)
    );

    classes.push(SizeDefinition[size as SizeType]);
    return classes.join(' ');
  }

  @action
  imageLoadError(event: Event): void {
    if (this.isDestroying || this.isDestroyed) return;
    (<HTMLImageElement>event.target).src = this.defaultImage;
    this.hasError = true;
  }
}
