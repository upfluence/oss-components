import Component from '@glimmer/component';

interface OssSidePanelHeaderArgs {
  onClose(): void;
  onReturn?(): void;
  title: string;
}

export default class OssSidePanelHeader extends Component<OssSidePanelHeaderArgs> {}
