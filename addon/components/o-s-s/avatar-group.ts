import Component from '@glimmer/component';

import type { SizeType } from './avatar';

type Avatar = {
  image?: string;
  initials?: string;
};

interface OSSAvatarGroupComponentSignature {
  avatars: Avatar[];
  size?: SizeType;
  max?: number;
  loading?: boolean;
  loadingCount?: number;
}

const DEFAULT_LOADING_COUNT: number = 3;

export default class OSSAvatarGroupComponent extends Component<OSSAvatarGroupComponentSignature> {
  get avatars(): Avatar[] {
    return this.args.max ? this.args.avatars.slice(0, this.args.max) : this.args.avatars;
  }

  get remainingCount(): number {
    return this.args.max ? this.args.avatars.length - this.args.max : 0;
  }

  get size(): SizeType {
    return this.args.size ?? 'md';
  }

  get loadingCount(): number {
    return this.args.loadingCount ?? DEFAULT_LOADING_COUNT;
  }

  get loadingAvatars(): unknown[] {
    return new Array(this.loadingCount);
  }
}
