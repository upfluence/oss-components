import { assert } from '@ember/debug';
import Component from '@glimmer/component';
import type Owner from '@ember/owner';

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
