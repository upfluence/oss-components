import Component from '@glimmer/component';

interface OSSPanelArgs {
  isVisible: boolean;
}

export default class OSSPanel extends Component<OSSPanelArgs> {
  get isVisible(): boolean {
    return this.args.isVisible;
  }
}
