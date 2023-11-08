import Component from '@glimmer/component';
import { assert } from '@ember/debug';

export interface OSSStarRatingArgs {
  rating: number;
  totalStars: number;
  activeColor: StarColor;
  passiveColor: StarColor;
  passiveStyle?: 'solid' | 'regular';
  onChange?: (rating: OSSStarRatingArgs['rating']) => void;
}

export enum StarColor {
  'purple',
  'dark-purple',
  'orange',
  'rock-blue',
  'black',
  'white',
  'grey',
  'grey-light',
  'grey-dark',
  'yellow',
  'green',
  'red'
}

export default class OSSStarRating extends Component<OSSStarRatingArgs> {
  constructor(owner: unknown, args: OSSStarRatingArgs) {
    super(owner, args);
    assert(
      `[component][OSS::StarRating] @rating argument is mandatory and must be a number`,
      typeof args.rating === 'number'
    );
    assert(
      `[component][OSS::StarRating] @totalStars argument is mandatory and must be a number`,
      typeof args.totalStars === 'number'
    );
  }

  get activeColorClass(): string {
    return `color-${this.args.activeColor || 'yellow'}`;
  }

  get passiveColorClass(): string {
    return `color-${this.args.passiveColor || 'grey'}`;
  }

  get passiveStyle(): string {
    return this.args.passiveStyle || 'solid';
  }

  get activeStars(): any[] {
    return new Array(this.args.rating);
  }

  get passiveStars(): any[] {
    return new Array(Math.max(0, this.args.totalStars - this.args.rating));
  }
}
