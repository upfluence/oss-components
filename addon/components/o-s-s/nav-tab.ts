import { assert } from '@ember/debug';
import Component from '@glimmer/component';
import { action } from '@ember/object';

interface OSSNavTabArgs {
  onSelection(): void;
  tabArray: TabDefinition[];
}

interface TabDefinition {
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

    assert('[component][OSS::NavTab] The parameter @tabArray is mandatory', args.tabArray);

    let tabArrayValide = true;

    args.tabArray.forEach((element: TabDefinition) => {
      if (!element.label && !element.icon) {
        tabArrayValide = false;
      }
    });

    assert(
      '[component][OSS::NavTab] The @label or @icon parameter is mandatory for each element in @tabArray',
      tabArrayValide
    );
  }

  @action
  onSelectTab(): void {
    this.args.onSelection();
  }
}
