import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

type SizeType = 'xs' | 'sm' | 'md' | 'lg';
type SizeDefType = { [key in SizeType]: string };
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
}

export const DEFAULT_IMAGE_URL: string = '/assets/images/upfluence-white-logo.svg';

export default class OSSAvatar extends Component<OSSAvatarArgs> {
  @tracked hasError: boolean = false;
  @tracked displayInitial: boolean = false;

  constructor(owner: unknown, args: OSSAvatarArgs) {
    super(owner, args);
    if (!args.image && args.initials) this.displayInitial = true;
  }

  get image(): string | undefined {
    return !this.args.image && !this.args.initials ? DEFAULT_IMAGE_URL : this.args.image;
  }

  get imageClass(): string {
    return this.image === DEFAULT_IMAGE_URL || this.hasError ? 'img-placeholder' : '';
  }

  get computedClass(): string {
    const classes = 'upf-avatar ';
    const size: SizeType = this.args.size || 'md';

    assert(
      `[component][OSS::Avatar] Unknown size. Available sizes are: ${Object.keys(SizeDefinition).join(', ')}`,
      Object.keys(SizeDefinition).includes(size as SizeType)
    );

    return classes.concat(SizeDefinition[size as SizeType]);
  }

  @action
  imageLoadError(event: Event): void {
    if (this.args.initials) {
      this.displayInitial = true;
      return;
    }
    (<HTMLImageElement>event.target).src = DEFAULT_IMAGE_URL;
    this.hasError = true;
  }
}
