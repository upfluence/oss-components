import type { htmlSafe } from '@ember/template';
import Component from '@glimmer/component';

interface OSSEmptyStateComponentSignature {
  image?: string;
  title?: ReturnType<typeof htmlSafe>;
  subtitle?: ReturnType<typeof htmlSafe>;
  size?: 'sm' | 'md';
}

export default class OSSEmptyStateComponent extends Component<OSSEmptyStateComponentSignature> {}
