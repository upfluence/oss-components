import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { action, set } from '@ember/object';
import { tracked } from '@glimmer/tracking';

interface OSSStarRatingArgs {
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
  @tracked stars: any[] = [];

  constructor(owner: unknown, args: OSSStarRatingArgs) {
    super(owner, args);
    this.stars = this.generateStarsArray();

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

  @action
  setRating(val1: number, val2: number = 0): void {
    this.args.onChange?.(val1 + val2 + 1);
  }

  @action
  onMouseEnter(index: number): void {
    if (this.args.onChange && index + 1 !== this.args.rating) {
      for (let i = 0; i < this.args.totalStars; ++i) {
        set(this.stars[i], 'type', i <= index ? 'solid' : 'regular');
      }
    }
  }

  @action
  onMouseLeave(): void {
    this.stars = this.generateStarsArray();
  }

  private generateStarsArray(): any[] {
    const result = [];
    for (let i = 0; i < this.args.totalStars; i++) {
      result.push({ type: i < this.args.rating ? 'solid' : 'regular' });
    }
    return result;
  }
}
