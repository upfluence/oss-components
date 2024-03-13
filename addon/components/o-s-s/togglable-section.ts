import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { action } from '@ember/object';

interface CampaignTogglableSectionArgs {
  title: string;
  toggled: boolean;
  iconUrl?: string;
  icon?: string;
  badgeIcon?: string;
  subtitle?: string;
  size?: 'sm' | 'md';
  disabled?: boolean;
  onChange(value: boolean): void;
}

export default class CampaignTogglableSection extends Component<CampaignTogglableSectionArgs> {
  constructor(owner: unknown, args: CampaignTogglableSectionArgs) {
    super(owner, args);

    assert('[OSS::TogglableSection] The @title parameter is mandatory', typeof args.title === 'string');
    assert('[OSS::TogglableSection] The @toggled parameter is mandatory', typeof args.toggled === 'boolean');
    assert('[OSS::TogglableSection] The @onChange function is mandatory', args.onChange);
  }

  get paddingClass(): 'padding-px-12' | 'padding-px-18' {
    return this.args.size === 'sm' ? 'padding-px-12' : 'padding-px-18';
  }

  @action
  onHeaderClick(): void {
    if (this.args.disabled) return;
    this.args.onChange(!this.args.toggled);
  }

  @action
  noop(): void {}
}
