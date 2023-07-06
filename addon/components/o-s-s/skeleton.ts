import Component from '@glimmer/component';
import { assert } from '@ember/debug';

interface Row {
  class?: string;
  style?: string;
}

interface OSSSkeletonArgs {
  width?: number;
  height?: number;
  multiple?: number;
  type?: 'row' | 'column';
  gap?: number;
  randomize?: boolean;
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
    return this.args.height || 36;
  }

  get width(): number {
    return this.args.width || 36;
  }

  get gap(): number {
    return this.args.gap || 9;
  }

  get type(): string {
    return this.args.type || 'row';
  }

  get computedClass(): string {
    let style: String[] = ['upf-skeleton-content', `fx-gap-px-${this.gap}`];

    this.type === 'row' ? style.push('fx-col') : style.push('fx-row');

    return style.join(' ');
  }

  get computedStyle(): string {
    return `width:${this.width}px; height: ${this.height}px;`;
  }

  get rows(): Row[] {
    let rows: Row[] = [];
    let multiple = this.args.multiple || 1;

    if (this.args.randomize) {
      for (let i = 0; i < multiple; i++) {
        rows.push(this.generateRandomRowSize());
      }
    } else {
      for (let i = 0; i < multiple; i++) {
        rows.push({ class: 'fx-1' });
      }
    }

    return rows;
  }

  private generateRandomRowSize(): Row {
    let multiple = this.args.multiple || 1;

    if (this.type === 'row') {
      let percent = 100 - Math.floor(Math.random() * (20 + 1) + 0);
      return { class: 'fx-1', style: `width: ${percent}%;` };
    } else {
      let coef = (100 + Math.floor(Math.random() * (100 + 1) + -50)) / 100;
      let defaultWidth = (this.width - (multiple - 1) * this.gap) / multiple;
      return { style: `width: ${Math.floor(defaultWidth * coef)}px;` };
    }
  }
}
