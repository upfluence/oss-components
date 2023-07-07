import Helper from '@ember/component/helper';
import { assert } from '@ember/debug';
import { getIconStyle } from '../utils/icon-details';

export default class extends Helper {
  compute(args: any[]) {
    const faIconString = args[0];

    assert('[helper][OSS::fa-icon-style] faIconString argument is mandatory', typeof faIconString === 'string');

    return getIconStyle(faIconString);
  }
}
