import { action } from '@ember/object';
import Component from '@glimmer/component';

interface OSSPanelRowArgs {
  label: string;
  icon: string;
}

export default class OSSPanelRow extends Component<OSSPanelRowArgs> {
  get label(): string {
    return this.args.label;
  }
  get icon(): string {
    return this.args.icon;
  }
  @action
  onClick(): void {
    console.log('clicked');
  }
}
