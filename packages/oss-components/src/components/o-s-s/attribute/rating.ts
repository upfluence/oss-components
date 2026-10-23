import { assert } from '@ember/debug';
import type Owner from '@ember/owner';
import Component from '@glimmer/component';

interface OSSAttributeRatingArgs {
  label: string;
  rating?: number;
}

export default class OSSAttributeRating extends Component<OSSAttributeRatingArgs> {
  constructor(owner: Owner, args: OSSAttributeRatingArgs) {
    super(owner, args);
    assert('[component][OSS::Attribute::Rating] @label is required', typeof args.label === 'string');
  }
}
