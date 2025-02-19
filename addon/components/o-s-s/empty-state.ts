import type { htmlSafe } from '@ember/template';
import Component from '@glimmer/component';

interface OSSEmptyStateComponentSignature {
  image?: string;
  title?: ReturnType<typeof htmlSafe>;
  subtitle?: ReturnType<typeof htmlSafe>;
  size?: 'sm' | 'md';
}

export default class OSSEmptyStateComponent extends Component<OSSEmptyStateComponentSignature> {
  get titleSize(): string {
    return this.args.size === 'sm' ? 'md' : 'lg';
  }

  get subtitleSize(): string {
    return this.args.size || 'md';
  }
}
