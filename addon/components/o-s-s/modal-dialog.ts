import { assert } from '@ember/debug';
import Component from '@glimmer/component';
import BaseModal, { BaseModalArgs } from './private/base-modal';

export interface OSSModalDialogArgs extends BaseModalArgs {
  title: string;
  subtitle?: string;
  size?: 'sm' | 'md';
}

export default class OSSModalDialog extends (BaseModal as typeof Component)<OSSModalDialogArgs> {
  constructor(owner: unknown, args: OSSModalDialogArgs) {
    // eslint-disable-next-line constructor-super
    super(owner, args);

    assert('[component][OSS::ModalDialog] The close function is mandatory', args.close);
    assert('[component][OSS::ModalDialog] The title parameter is mandatory', typeof args.title === 'string');
  }

  get modalSize(): string {
    if (this.args.size) {
      return `oss-modal-dialog-${this.args.size}`;
    }
    return 'oss-modal-dialog-sm';
  }
}
