import { assert } from '@ember/debug';
import Component from '@glimmer/component';

interface OSSAttributeRatingSignature {
  Args: {
    label: string;
    rating?: number;
  };
  Element: HTMLElement;
}

export default class OSSAttributeRatingComponent extends Component<OSSAttributeRatingSignature> {
  constructor(owner: unknown, args: OSSAttributeRatingSignature['Args']) {
    super(owner, args);
    assert('[component][OSS::Attribute::Rating] @label is required', typeof args.label === 'string');
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'OSS::Attribute::Rating': typeof OSSAttributeRatingComponent;
    'o-s-s/attribute/rating': typeof OSSAttributeRatingComponent;
  }
}
