import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export type SmartFeedbackSection = {
  title?: string;
  text?: string;
  bullets?: string[];
};

export type SmartFeedbackError = {
  title: string;
  subtitle?: string;
  onRetry?(): void;
};

interface OSSSmartFeedbackArgs {
  loading: boolean;
  collapsible?: boolean;
  content?: SmartFeedbackSection[];
  error?: SmartFeedbackError | null;
}

export default class OSSSmartFeedback extends Component<OSSSmartFeedbackArgs> {
  @tracked expanded: boolean = false;
  @tracked truncated: boolean = false;

  private contentElement?: HTMLElement;
  private resizeObserver?: ResizeObserver;

  get currentStateClass(): string {
    const classes: string[] = [];

    if (this.args.loading) {
      classes.push('oss-smart__feedback__loading');
    } else if (!this.args.error && this.args.content) {
      classes.push('oss-smart__generated');
    }

    if (this.collapsed) classes.push('oss-smart__feedback--collapsed');
    if (this.showChevron) classes.push('oss-smart__feedback--truncated');

    return classes.join(' ');
  }

  get collapsible(): boolean {
    return this.args.collapsible !== false && !this.args.error;
  }

  get collapsed(): boolean {
    return this.collapsible && !this.expanded;
  }

  get showChevron(): boolean {
    return this.collapsible && this.truncated;
  }

  @action
  toggle(): void {
    if (!this.showChevron) return;

    this.expanded = !this.expanded;
    if (!this.expanded) {
      requestAnimationFrame(() => this.measureTruncation());
    }
  }

  @action
  setupTruncation(element: HTMLElement): void {
    this.contentElement = element;
    this.measureTruncation();
  }

  willDestroy(): void {
    super.willDestroy();
    this.resizeObserver?.disconnect();
  }

  @action
  measureTruncation(): void {
    if (!this.collapsible) {
      this.resizeObserver?.disconnect();
      this.resizeObserver = undefined;
      this.truncated = false;
      return;
    }

    if (this.expanded || this.isDestroying || this.isDestroyed) return;

    const element = this.contentElement;
    const container = element?.parentElement;
    if (!element || !container) return;

    if (!this.resizeObserver) {
      this.resizeObserver = new ResizeObserver(() => this.measureTruncation());
      this.resizeObserver.observe(element);
    }

    this.truncated = element.scrollHeight > container.clientHeight;
  }
}
