import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { assert } from '@ember/debug';

interface OSSAttributeRevealableEmailSignature {
  Args: {
    tooltip?: string;
    lockTooltip?: string;
    onRevealEmail(): Promise<unknown>;
  };
  Element: HTMLElement;
}

export default class OSSAttributeRevealableEmailComponent extends Component<OSSAttributeRevealableEmailSignature> {
  @service declare intl: any;
  @tracked loading: boolean = false;

  constructor(owner: unknown, args: OSSAttributeRevealableEmailSignature['Args']) {
    super(owner, args);
    assert(
      '[component][OSS::Attribute::RevealableEmail] @onRevealEmail method is required',
      typeof args.onRevealEmail === 'function'
    );
  }

  get lockTooltip(): string {
    return this.args.lockTooltip ?? this.intl.t('oss-components.attribute.email.lock_tooltip');
  }

  @action
  onRevealEmail(): void {
    this.loading = true;
    this.args.onRevealEmail().finally(() => (this.loading = false));
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'OSS::Attribute::RevealableEmail': typeof OSSAttributeRevealableEmailComponent;
    'o-s-s/attribute/revealable-email': typeof OSSAttributeRevealableEmailComponent;
  }
}
