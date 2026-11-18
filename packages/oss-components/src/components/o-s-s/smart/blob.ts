import Component from '@glimmer/component';

type Size = 'xs' | 'sm' | 'md' | 'xl';

interface SmartBlobArgs {
  loading?: boolean;
  size?: Size;
}

export default class SmartBlob extends Component<SmartBlobArgs> {
  get size(): Size {
    return this.args.size ?? 'md';
  }

  get loadingClass(): string {
    return this.args.loading ? 'fade-in' : 'fade-out';
  }

  get inactiveClass(): string {
    return this.args.loading ? 'fade-out' : 'fade-in';
  }

  get computedClass(): string {
    const classes = ['smart-blob-container'];

    if (this.args.loading) {
      classes.push('smart-blob-container--active');
    }

    classes.push(`smart-blob-container--${this.size}`);

    return classes.join(' ');
  }
}
