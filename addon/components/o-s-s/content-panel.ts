import Component from '@glimmer/component';

interface OSSContentPanelSignature {
  Args: {};
  Blocks: {
    default: [];
  };
  Element: HTMLDivElement;
}

export default class OSSContentPanelComponent extends Component<OSSContentPanelSignature> {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'OSS::ContentPanel': typeof OSSContentPanelComponent;
    'o-s-s/content-panel': typeof OSSContentPanelComponent;
  }
}
