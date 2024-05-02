import { assert } from '@ember/debug';

import BaseModal, { type BaseModalArgs } from './private/base-modal';

interface OSSSplitModalArgs extends BaseModalArgs {}

export default class OSSSplitModal extends BaseModal<OSSSplitModalArgs> {
  constructor(owner: unknown, args: OSSSplitModalArgs) {
    super(owner, args);

    assert('[component][OSS::SplitModal] The close function is mandatory', args.close);
  }
}
