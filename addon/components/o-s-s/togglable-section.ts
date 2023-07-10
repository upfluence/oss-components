import Component from '@glimmer/component';
import { assert } from '@ember/debug';

interface CampaignTogglableSectionArgs {
  title: string;
  toggled: boolean;
  iconUrl?: string;
  icon?: string;
  subtitle?: string;
  plain?: boolean;
  onChange(value: boolean): void;
}

export default class CampaignTogglableSection extends Component<CampaignTogglableSectionArgs> {
  constructor(owner: unknown, args: CampaignTogglableSectionArgs) {
    super(owner, args);

    assert('[OSS::TogglableSection] The @title parameter is mandatory', typeof args.title === 'string');
    assert('[OSS::TogglableSection] The @toggled parameter is mandatory', typeof args.toggled === 'boolean');
    assert('[OSS::TogglableSection] The @onChange function is mandatory', args.onChange);
  }
}
