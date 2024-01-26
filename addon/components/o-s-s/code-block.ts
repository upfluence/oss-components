import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import ToastService from '@upfluence/oss-components/services/toast';

interface OSSCodeBlockSignature {
  Args: {
    content: string;
    copyable?: boolean;
    scrollable?: boolean;
    collapseHeight?: number;
    onCopyMessage?: string;
  };
  Element: HTMLDivElement;
}

export default class OSSCodeBlockComponent extends Component<OSSCodeBlockSignature> {
  @tracked collapsable: boolean = false;
  @tracked collapsed: boolean = true;
  @tracked componentHeight: number = 0;
  @service declare toast: ToastService;

  constructor(owner: unknown, args: OSSCodeBlockSignature['Args']) {
    super(owner, args);
    if (this.args.collapseHeight) {
      this.componentHeight = this.args.collapseHeight;
      this.collapsable = true;
    }
  }

  get heightStyle(): string | null {
    if (this.args.collapseHeight) {
      return `height: ${this.componentHeight}px;`;
    }
    return null;
  }

  get codeLineArray(): string[] {
    return (this.args.content || '').split(/\r?\n/);
  }

  @action
  copyToClipboard(): void {
    navigator.clipboard.writeText(this.args.content);
    if (this.args.onCopyMessage) {
      this.toast.success(this.args.onCopyMessage, '');
    }
  }

  @action
  collapse(): void {
    this.collapsed = true;
    this.componentHeight = this.componentHeight / 2;
  }

  @action
  uncollapse(): void {
    this.collapsed = false;
    this.componentHeight = this.componentHeight * 2;
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'OSS::CodeBlock': typeof OSSCodeBlockComponent;
    'o-s-s/code-block': typeof OSSCodeBlockComponent;
  }
}
