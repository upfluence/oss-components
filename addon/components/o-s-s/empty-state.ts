import type { htmlSafe } from '@ember/template';
import { assert } from '@ember/debug';
import Component from '@glimmer/component';

interface OSSEmptyStateComponentSignature {
  badgeIcon?: string;
  title: ReturnType<typeof htmlSafe>;
  subtitle: ReturnType<typeof htmlSafe>;
  size?: 'sm' | 'md';
}

const ALLOWED_SIZES: string[] = ['sm', 'md'];

export default class OSSEmptyStateComponent extends Component<OSSEmptyStateComponentSignature> {
  constructor(owner: unknown, args: OSSEmptyStateComponentSignature) {
    super(owner, args);

    assert('[component][OSS::EmptyState] The title parameter is mandatory', typeof args.title === 'string');
    assert('[component][OSS::EmptyState] The subtitle parameter is mandatory', typeof args.subtitle === 'string');
  }

  get titleSize(): string {
    return this.size === 'sm' ? 'md' : 'lg';
  }

  get size(): string {
    return this.args.size && ALLOWED_SIZES.includes(this.args.size) ? this.args.size : 'md';
  }
}
