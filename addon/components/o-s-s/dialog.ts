import BaseModal, { type BaseModalArgs } from './private/base-modal';
import { action } from '@ember/object';
import { assert } from '@ember/debug';

export interface OSSDialogArgs extends BaseModalArgs {
  title: string;
  mainAction: { label: string; action: () => unknown };
  secondaryAction: { label: string; action: () => unknown };
}

export default class OSSDialog extends BaseModal<OSSDialogArgs> {
  constructor(owner: unknown, args: OSSDialogArgs) {
    super(owner, args);

    assert('[component][OSS::Dialog] The title parameter is mandatory', typeof args.title === 'string');
    assert('[component][OSS::Dialog] The mainAction parameter is mandatory', typeof args.mainAction === 'object');
    assert(
      '[component][OSS::Dialog] The secondaryAction parameter is mandatory',
      typeof args.secondaryAction === 'object'
    );
  }

  @action
  onInit(elem: HTMLElement): void {
    this.initialize(elem, false);
  }
}
