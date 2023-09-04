import Component from '@glimmer/component';
import { action } from '@ember/object';

interface OSSPanelArgs {
  logo: string;
  homeAction?(): void;
}

export default class OSSPanel extends Component<OSSPanelArgs> {
  @action
  onHomeAction(): void {
    return this.args.homeAction?.();
  }
}
