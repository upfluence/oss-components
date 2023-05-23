import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import BaseModal from './private/base-modal';

interface OSSSplitModalArgs {
  close(): void;
}

export default class OSSSplitModal extends (BaseModal as typeof Component)<OSSSplitModalArgs> {
  constructor(owner: unknown, args: OSSSplitModalArgs) {
    // eslint-disable-next-line constructor-super
    super(owner, args);

    assert('[component][OSS::SplitModal] The close function is mandatory', args.close);
  }
}
