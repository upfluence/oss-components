import { helper } from '@ember/component/helper';
import type { OSSSkeletonArgs } from '../skeleton';
import OSSSkeleton from '../skeleton';
import { assert } from '@ember/debug';

interface OSSSmartSkeletonArgs extends OSSSkeletonArgs {}

const MIN_HEIGHT = 10;

export default class OSSSmartSkeleton extends OSSSkeleton<OSSSmartSkeletonArgs> {
  constructor(owner: unknown, args: OSSSmartSkeletonArgs) {
    super(owner, args, true);

    if (this.args.direction) {
      assert(
        `[component][OSS::Smart::Skeleton] The @direction argument should be a value of ${['row', 'column', 'col']}`,
        ['row', 'column', 'col'].includes(this.args.direction)
      );
    }
  }

  inlineStyles = helper((_, { rowStyle }: { rowStyle: string }): string => {
    return [rowStyle, this.backgroundImage].join('; ');
  });

  get height(): number {
    return parseInt((this.args.height || MIN_HEIGHT) as string);
  }

  get rotationDegrees(): number {
    const maxHeight = 100;
    const clampedHeight = Math.max(MIN_HEIGHT, Math.min(this.height, maxHeight)) * 1.3;
    const minDegree = 100;
    const maxDegree = 150;
    const logMin = Math.log(MIN_HEIGHT);
    const logMax = Math.log(maxHeight);
    const scale = (Math.log(clampedHeight) - logMin) / (logMax - logMin);
    return Math.round(maxDegree - scale * (maxDegree - minDegree));
  }

  get backgroundImage(): string {
    return `background-image: linear-gradient(
      ${this.rotationDegrees}deg,
      rgba(255, 255, 255, 0.15) 8.2%,
      rgba(247, 213, 250, 0.15) 23.6%,
      rgba(83, 94, 252, 0.15) 38.3%,
      rgba(237, 33, 255, 0.15) 53.2%,
      rgba(255, 255, 255, 0.15) 91.7%
    );`;
  }
}
