import { assert } from '@ember/debug';
import Component from '@glimmer/component';

interface OSSAttributeRatingArgs {
  label: string;
  rating?: number;
}

export default class OSSAttributeRating extends Component<OSSAttributeRatingArgs> {
  constructor(owner: unknown, args: OSSAttributeRatingArgs) {
    super(owner, args);
    assert('[component][OSS::Attribute::Rating] @label is required', typeof args.label === 'string');
  }
}
