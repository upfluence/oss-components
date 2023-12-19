import { assert } from '@ember/debug';
import Component from '@glimmer/component';
import BaseModal, { BaseModalArgs } from './private/base-modal';
import { tracked } from '@glimmer/tracking';

export interface OSSModalDialogArgs extends BaseModalArgs {
  title: string;
  subtitle?: string;
  size?: 'sm' | 'md';
  enqueue?: boolean;
}

export default class OSSModalDialog extends (BaseModal as typeof Component)<OSSModalDialogArgs> {
  @tracked displayModal: boolean = true;

  constructor(owner: unknown, args: OSSModalDialogArgs) {
    // eslint-disable-next-line constructor-super
    super(owner, args);

    assert('[component][OSS::ModalDialog] The close function is mandatory', args.close);
    assert('[component][OSS::ModalDialog] The title parameter is mandatory', typeof args.title === 'string');

    if (args.enqueue) {
      this.displayModal = false;
      this.modalQueueCheck();
    }
  }

  get modalSize(): string {
    if (this.args.size) {
      return `oss-modal-dialog-${this.args.size}`;
    }
    return 'oss-modal-dialog-sm';
  }

  private modalQueueCheck(): void {
    const preRenderedModalDialog = document.querySelector('.oss-modal-dialog');
    if (preRenderedModalDialog) {
      setTimeout(() => {
        this.modalQueueCheck();
      }, 1000);
      return;
    }
    this.displayModal = true;
  }
}
