import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { action } from '@ember/object';
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
  @tracked private optimisticRating: number | null = null;
  @tracked private hoverIndex: number | null = null;

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

  get stars(): Star[] {
    const activeCount = this.hoverIndex !== null ? this.hoverIndex + 1 : (this.optimisticRating ?? this.args.rating);
    const result: Star[] = [];
    for (let i = 0; i < this.args.totalStars; i++) {
      result.push({ type: i < activeCount ? 'solid' : 'regular' });
    }
    return result;
  }

  @action
  setRating(value: number, event: PointerEvent): void {
    event.stopPropagation();
    const newRating = value + 1;
    this.optimisticRating = newRating;
    this.args.onChange?.(newRating);
  }

  @action
  onMouseEnter(index: number): void {
    if (this.args.onChange) {
      this.hoverIndex = index;
    }
  }

  @action
  onMouseLeave(): void {
    this.hoverIndex = null;
  }
}
