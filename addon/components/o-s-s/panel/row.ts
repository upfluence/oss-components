import { action } from '@ember/object';
import Component from '@glimmer/component';

interface OSSPanelRowArgs {
  label: string;
}

export default class OSSPanelRow extends Component<OSSPanelRowArgs> {
  get label(): string {
    return this.args.label;
  }
  @action
  onClick(): void {
    console.log('clicked');
  }
}
