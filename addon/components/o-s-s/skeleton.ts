import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { htmlSafe } from '@ember/template';

interface OSSSkeletonArgs {
  width?: number | string;
  height?: number | string;
  multiple?: number;
  direction?: 'row' | 'column' | 'col';
  gap?: number;
  randomize?: boolean;
}

const RANGE_PERCENTAGE: number = 15;

export default class OSSSkeleton extends Component<OSSSkeletonArgs> {
  constructor(owner: unknown, args: OSSSkeletonArgs) {
    super(owner, args);

    if (this.args.direction) {
      assert(
        `[component][OSS::Skeleton] The @direction argument should be a value of ${['row', 'column', 'col']}`,
        ['row', 'column', 'col'].includes(this.args.direction)
      );
    }
  }

  get height(): number {
    return parseInt((this.args.height || '36') as string);
  }

  get width(): number {
    return parseInt((this.args.width || '36') as string);
  }

  get widthPxOrPc(): 'px' | '%' {
    return (this.args.width as string)?.includes?.('%') ? '%' : 'px';
  }

  get heightPxOrPc(): 'px' | '%' {
    return (this.args.height as string)?.includes?.('%') ? '%' : 'px';
  }

  get gap(): number {
    return this.args.gap || 9;
  }

  get direction(): string {
    return this.args.direction || 'row';
  }

  get computedClass(): string {
    let style: string[] = [`fx-gap-px-${this.gap}`];

    this.direction === 'row' ? style.push('fx-row') : style.push('fx-col');

    return style.join(' ');
  }

  get rows(): ReturnType<typeof htmlSafe>[] {
    const randomizeInRange: number = this.width * (RANGE_PERCENTAGE / 100);
    let rows: ReturnType<typeof htmlSafe>[] = [];
    let multiple = this.args.multiple || 1;

    for (let i = 0; i < multiple; ++i) {
      let width = this.width;
      if (this.args.randomize) {
        const randomValue = Math.ceil(Math.random() * randomizeInRange) * (Math.round(Math.random()) ? 1 : -1);
        width = this.width + randomValue;
      }
      rows.push(htmlSafe(`min-height: ${this.height}${this.heightPxOrPc}; width: ${width}${this.widthPxOrPc}`));
    }

    return rows;
  }
}
