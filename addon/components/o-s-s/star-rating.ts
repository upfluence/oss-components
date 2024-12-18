import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { action, set } from '@ember/object';
import { tracked } from '@glimmer/tracking';

type StarType = 'solid' | 'regular';
type Star = { type: StarType };

interface OSSStarRatingArgs {
  rating: number;
  totalStars: number;
  activeColor: StarColor;
  passiveColor: StarColor;
  passiveStyle?: StarType;
  onChange?(rating: number): void;
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
  @tracked stars: Star[] = [];

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
  setRating(value: number, event: PointerEvent): void {
    event.stopPropagation();
    this.args.onChange?.(value + 1);
  }

  @action
  onMouseEnter(index: number): void {
    if (this.args.onChange && index + 1 !== this.args.rating) {
      this.stars.forEach((star: Star, i: number) => {
        set(star, 'type', i <= index ? 'solid' : 'regular');
      });
    }
  }

  @action
  onMouseLeave(): void {
    this.stars = this.generateStarsArray();
  }

  private generateStarsArray(): Star[] {
    const result: Star[] = [];
    for (let i = 0; i < this.args.totalStars; i++) {
      result.push({ type: i < this.args.rating ? 'solid' : 'regular' });
    }
    return result;
  }
}
