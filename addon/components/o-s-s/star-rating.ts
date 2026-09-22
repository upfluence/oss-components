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
  onChange?(rating: number): void | Promise<void>;
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
  @tracked private isSubmitting = false;

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
  async setRating(value: number, event: PointerEvent): Promise<void> {
    event.stopPropagation();
    const newRating = value + 1;
    this.optimisticRating = newRating;
    this.hoverIndex = null;
    this.isSubmitting = true;
    try {
      await this.args.onChange?.(newRating);
    } finally {
      this.isSubmitting = false;
    }
  }

  @action
  onMouseEnter(index: number): void {
    // Ignore hover previews while a rating change is being persisted, so the clicked value stays displayed.
    if (this.args.onChange && !this.isSubmitting) {
      this.hoverIndex = index;
    }
  }

  @action
  onMouseLeave(): void {
    // Suspend hover updates while a rating change is being persisted, so the clicked value stays displayed.
    if (this.isSubmitting) {
      return;
    }
    this.hoverIndex = null;
  }
}
