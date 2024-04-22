import { assert } from '@ember/debug';

import BaseModal from './private/base-modal';

interface OSSSplitModalArgs {
  close(): void;
}

export default class OSSSplitModal extends BaseModal<OSSSplitModalArgs> {
  constructor(owner: unknown, args: OSSSplitModalArgs) {
    super(owner, args);

    assert('[component][OSS::SplitModal] The close function is mandatory', args.close);
  }
}
