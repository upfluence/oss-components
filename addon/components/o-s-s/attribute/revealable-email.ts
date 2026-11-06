import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { assert } from '@ember/debug';
import type IntlService from 'ember-intl/services/intl';
import type Owner from '@ember/owner';

interface OSSAttributeRevealableEmailArgs {
  tooltip?: string;
  lockTooltip?: string;
  onRevealEmail(): Promise<unknown>;
}

export default class OSSAttributeRevealableEmail extends Component<OSSAttributeRevealableEmailArgs> {
  @service declare intl: IntlService;
  @tracked loading: boolean = false;

  constructor(owner: Owner, args: OSSAttributeRevealableEmailArgs) {
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
