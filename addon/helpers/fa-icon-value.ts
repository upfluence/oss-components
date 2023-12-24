import Helper from '@ember/component/helper';
import { assert } from '@ember/debug';
import { getIconValue } from '../utils/icon-details';

type PositionalArgs = string[];
interface FaIconValueHelperSignature {
  Args: {
    Positional: PositionalArgs;
  };
  Return: string;
}

export default class FaIconValueHelper extends Helper<FaIconValueHelperSignature> {
  compute(args: any[]) {
    const faIconString = args[0];

    assert('[helper][OSS::fa-icon-value] faIconString argument is mandatory', typeof faIconString === 'string');

    return getIconValue(faIconString);
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'fa-icon-value': typeof FaIconValueHelper;
  }
}
