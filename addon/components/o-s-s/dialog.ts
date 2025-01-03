import BaseModal, { type BaseModalArgs } from './private/base-modal';
import { action } from '@ember/object';
import { assert } from '@ember/debug';

type Skin = 'alert' | 'primary' | 'error';

export type ButtonDefinition = { label: string; action: () => unknown; loading?: boolean; icon?: string };

export interface OSSDialogArgs extends BaseModalArgs {
  title: string;
  subtitle?: string;
  skin?: Skin;
  icon?: string;
  mainAction: ButtonDefinition;
  secondaryAction: ButtonDefinition;
}

const BTN_STYLE_MATCHER: Record<Skin, string> = {
  alert: 'alert',
  primary: 'primary',
  error: 'destructive'
};

export default class OSSDialog extends BaseModal<OSSDialogArgs> {
  constructor(owner: unknown, args: OSSDialogArgs) {
    super(owner, args);

    assert(
      '[component][OSS::Dialog] The title parameter is mandatory',
      typeof args.title === 'string' || this.isSafeString(args.title)
    );
    assert('[component][OSS::Dialog] The mainAction parameter is mandatory', typeof args.mainAction === 'object');
    assert(
      '[component][OSS::Dialog] The secondaryAction parameter is mandatory',
      typeof args.secondaryAction === 'object'
    );
  }

  get skin(): Skin {
    return this.args.skin ?? 'alert';
  }

  get icon(): string {
    return this.args.icon ?? 'fa-warning';
  }

  get skinBtn(): string {
    return BTN_STYLE_MATCHER[this.skin];
  }

  @action
  onInit(elem: HTMLElement): void {
    this.initialize(elem, false);
  }

  private isSafeString(data: any): boolean {
    return data?.constructor?.name === 'SafeString';
  }
}
