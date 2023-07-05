import Component from '@glimmer/component';
import { assert } from '@ember/debug';

interface Row {
  style?: string;
}

interface OSSSkeletonArgs {
  width: number;
  height: number;
  multiple?: number;
  type?: 'row' | 'column';
  gap?: number;
}

export default class OSSSkeleton extends Component<OSSSkeletonArgs> {
  constructor(owner: unknown, args: OSSSkeletonArgs) {
    super(owner, args);

    if (this.args.type) {
      assert(
        `[component][OSS::Skeleton] The @type argument should be a value of ${['row', 'column']}`,
        ['row', 'column'].includes(this.args.type)
      );
    }
  }

  get height(): number {
    return this.args.height || 100;
  }

  get width(): number {
    return this.args.width || 100;
  }

  get gap(): number {
    return this.args.gap || 9;
  }

  get type(): string {
    return this.args.type || 'row';
  }

  get computedClass(): string {
    let style: String[] = ['upf-skeleton-content', `fx-gap-px-${this.gap}`];
    if (this.type == 'row') {
      style.push('fx-col');
    } else {
      style.push('fx-row');
    }

    return style.join(' ');
  }

  get computedStyle(): string {
    return `width:${this.width}px; height: ${this.height}px;`;
  }

  get rows(): Row[] {
    let rows: Row[] = [];
    let multiple = this.args.multiple || 1;

    if (multiple == 1) {
      rows.push({});
    } else {
      for (let i = 0; i < multiple; i++) {
        rows.push(this._generateRandomRowSize());
      }
    }

    return rows;
  }

  _generateRandomRowSize(): Row {
    let percent = 100 - Math.floor(Math.random() * (20 + 1) + 0);

    if (this.type == 'row') {
      return { style: `width: ${percent}%;` };
    } else {
      return { style: `height: ${percent}%;` };
    }
  }
}
