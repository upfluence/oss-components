import { assert } from '@ember/debug';
import { tracked } from '@glimmer/tracking';
import Component from '@glimmer/component';
import BaseModal, { type OSSPrivateBaseModalSignature } from './private/base-modal';

export interface OSSModalDialogSignature extends OSSPrivateBaseModalSignature {
  Args: OSSPrivateBaseModalSignature['Args'] & {
    title: string;
    subtitle?: string;
    size?: 'sm' | 'md';
    enqueue?: boolean;
  };
}

export default class OSSModalDialog extends (BaseModal as typeof Component)<OSSModalDialogSignature> {
  @tracked displayModal: boolean = true;

  constructor(owner: unknown, args: OSSModalDialogSignature['Args']) {
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

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'OSS::ModalDialog': typeof OSSModalDialog;
    'o-s-s/modal-dialog': typeof OSSModalDialog;
  }
}
