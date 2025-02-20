import type { htmlSafe } from '@ember/template';
import Component from '@glimmer/component';

interface OSSEmptyStateComponentSignature {
  badgeIcon?: string;
  title: ReturnType<typeof htmlSafe>;
  subtitle: ReturnType<typeof htmlSafe>;
  size?: 'sm' | 'md';
}

const ALLOWED_SIZES: string[] = ['sm', 'md'];

export default class OSSEmptyStateComponent extends Component<OSSEmptyStateComponentSignature> {
  get titleSize(): string {
    return this.size === 'sm' ? 'md' : 'lg';
  }

  get size(): string {
    return this.args.size && ALLOWED_SIZES.includes(this.args.size) ? this.args.size : 'md';
  }
}
