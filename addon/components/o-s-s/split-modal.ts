import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import BaseModal from './private/base-modal';

interface OSSSplitModalSignature {
  Args: {
    close(): void;
  };
}

export default class OSSSplitModalComponent extends (BaseModal as typeof Component)<OSSSplitModalSignature> {
  constructor(owner: unknown, args: OSSSplitModalSignature['Args']) {
    super(owner, args);
    assert('[component][OSS::SplitModal] The close function is mandatory', args.close);
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'OSS::SplitModal': typeof OSSSplitModalComponent;
    'o-s-s/split-modal': typeof OSSSplitModalComponent;
  }
}
