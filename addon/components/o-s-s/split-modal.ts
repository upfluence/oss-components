import { assert } from '@ember/debug';

import BaseModal, { type BaseModalArgs } from './private/base-modal';
import type Owner from '@ember/owner';

interface OSSSplitModalArgs extends BaseModalArgs {}

export default class OSSSplitModal extends BaseModal<OSSSplitModalArgs> {
  constructor(owner: Owner, args: OSSSplitModalArgs) {
    super(owner, args);

    assert('[component][OSS::SplitModal] The close function is mandatory', args.close);
  }
}
