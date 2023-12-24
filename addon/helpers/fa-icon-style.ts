import Helper from '@ember/component/helper';
import { assert } from '@ember/debug';
import { getIconStyle, type IconStyle } from '../utils/icon-details';

type PositionalArgs = Array<string>;

export interface FaIconStyleSignature {
  Args: {
    Positional: PositionalArgs;
  };
  Return: IconStyle;
}

export default class FaIconStyleHelper extends Helper<FaIconStyleSignature> {
  compute(args: PositionalArgs): IconStyle {
    const faIconString = args[0];

    assert('[helper][OSS::fa-icon-style] faIconString argument is mandatory', typeof faIconString === 'string');

    return getIconStyle(faIconString);
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'fa-icon-style': typeof FaIconStyleHelper;
  }
}
