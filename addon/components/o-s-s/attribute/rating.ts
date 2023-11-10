import { assert } from '@ember/debug';
import Component from '@glimmer/component';
import { OSSStarRatingArgs } from '../star-rating';
import { action } from '@ember/object';

interface OSSAttributeRatingArgs {
  label: string;
  rating?: number;
  onChange?: OSSStarRatingArgs['onChange'];
}

export default class OSSAttributeRating extends Component<OSSAttributeRatingArgs> {
  constructor(owner: unknown, args: OSSAttributeRatingArgs) {
    super(owner, args);
    assert('[component][OSS::Attribute::Rating] @label is required', typeof args.label === 'string');
  }

  @action
  onClick(rating: number): void {
    this.args.onChange?.(rating);
  }
}
