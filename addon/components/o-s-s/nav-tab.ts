import { assert } from '@ember/debug';
import Component from '@glimmer/component';
import { action } from '@ember/object';

interface OSSNavTabArgs {
  onSelection(selectedTab: TabDefinition): void;
  tabArray: TabDefinition[];
}

export interface TabDefinition {
  icon?: string;
  label?: string;
  infoCircle?: boolean;
  notificationDot?: boolean;
  selected: boolean;
  disabled: boolean;
}

export default class OSSNavTab extends Component<OSSNavTabArgs> {
  constructor(owner: unknown, args: OSSNavTabArgs) {
    super(owner, args);

    assert(
      '[component][OSS::NavTab] The parameter @onSelection of type function is mandatory',
      typeof args.onSelection === 'function'
    );

    assert(
      '[component][OSS::NavTab] The parameter @tabArray is mandatory',
      args.tabArray instanceof Array && args.tabArray.length > 0
    );

    assert(
      '[component][OSS::NavTab] The @label or @icon parameter is mandatory for each element in @tabArray',
      !args.tabArray.some((element: TabDefinition) => !element.label && !element.icon)
    );
  }

  @action
  onSelectTab(selectedTab: TabDefinition): void {
    this.args.onSelection(selectedTab);
  }
}
