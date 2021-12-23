import Component from '@glimmer/component';

interface OSSStarRatingArgs {
  rating: number;
  totalStars: number;
  activeColor: StarColor;
  passiveColor: StarColor;
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

    if (typeof args.rating !== 'number') {
      throw new Error(`[component][OSS::StarRating] @rating argument is mandatory and must be a number`);
    } else if (typeof args.totalStars !== 'number') {
      throw new Error(`[component][OSS::StarRating] @totalStars argument is mandatory and must be a number`);
    }
  }

  get activeColorClass(): string {
    return `color-${this.args.activeColor || 'yellow'}`;
  }

  get passiveColorClass(): string {
    return `color-${this.args.passiveColor || 'grey'}`;
  }

  get activeStars(): any[] {
    return new Array(this.args.rating);
  }

  get passiveStars(): any[] {
    return new Array(Math.max(0, this.args.totalStars - this.args.rating));
  }
}
