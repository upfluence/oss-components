import Component from '@glimmer/component';

interface OssSidePanelHeaderArgs {
  onClose(): void;
  onReturn?(): void;
  title: string;
}

// eslint-disable-next-line ember/no-empty-glimmer-component-classes
export default class OssSidePanelHeader extends Component<OssSidePanelHeaderArgs> {}
