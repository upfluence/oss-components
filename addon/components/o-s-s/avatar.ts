import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

type SizeDefType = { [key in SizeType]: string };
export type SizeType = 'xs' | 'sm' | 'md' | 'lg';
export const SizeDefinition: SizeDefType = {
  xs: 'upf-avatar--xs',
  sm: 'upf-avatar--sm',
  md: 'upf-avatar--md',
  lg: 'upf-avatar--lg'
};

interface OSSAvatarArgs {
  image?: string;
  initials?: string;
  size?: SizeType;
  loading?: boolean;
}

export const DEFAULT_IMAGE_URL: string = '/assets/images/avatar-placeholder.svg';

export default class OSSAvatar extends Component<OSSAvatarArgs> {
  @tracked hasError: boolean = false;

  get displayInitials(): boolean {
    return (!this.args.image || this.hasError) && !!this.args.initials;
  }

  get image(): string | undefined {
    return this.args.image ?? DEFAULT_IMAGE_URL;
  }

  get imageClass(): string {
    return this.image === DEFAULT_IMAGE_URL || this.hasError ? 'default-img-placeholder' : '';
  }

  get computedClass(): string {
    let classes = 'upf-avatar ';
    const size: SizeType = this.args.size || 'md';

    if (this.args.loading) {
      classes = classes.concat('upf-avatar--loading ');
    }

    assert(
      `[component][OSS::Avatar] Unknown size. Available sizes are: ${Object.keys(SizeDefinition).join(', ')}`,
      Object.keys(SizeDefinition).includes(size as SizeType)
    );

    return classes.concat(SizeDefinition[size as SizeType]);
  }

  @action
  imageLoadError(event: Event): void {
    (<HTMLImageElement>event.target).src = DEFAULT_IMAGE_URL;
    this.hasError = true;
  }
}
