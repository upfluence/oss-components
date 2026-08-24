import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { action } from '@ember/object';
import { htmlSafe } from '@ember/template';
import { isSafeString } from '@upfluence/oss-components/utils';

interface TogglableSectionArgs {
  title: string | ReturnType<typeof htmlSafe>;
  toggled: boolean;
  switchable?: boolean;
  iconUrl?: string;
  icon?: string;
  badgeIcon?: string;
  subtitle?: string;
  size?: 'sm' | 'md';
  disabled?: boolean;
  onChange(value: boolean): void;
}

export default class extends Component<TogglableSectionArgs> {
  constructor(owner: unknown, args: TogglableSectionArgs) {
    super(owner, args);

    assert(
      '[OSS::TogglableSection] The @title parameter is mandatory',
      typeof args.title === 'string' || isSafeString(args.title)
    );
    assert('[OSS::TogglableSection] The @toggled parameter is mandatory', typeof args.toggled === 'boolean');
    assert('[OSS::TogglableSection] The @onChange function is mandatory', args.onChange);
  }

  get paddingClass(): 'padding-px-12' | 'padding-px-18' {
    return this.args.size === 'sm' ? 'padding-px-12' : 'padding-px-18';
  }

  get isSwitchable(): boolean {
    return this.args.switchable ?? true;
  }

  @action
  onHeaderClick(): void {
    if (this.args.disabled || !this.isSwitchable) return;
    this.args.onChange(!this.args.toggled);
  }

  @action
  noop(): void {}
}
