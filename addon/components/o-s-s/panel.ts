import templateOnlyComponent from '@ember/component/template-only';

interface OSSPanelSignature {
  Args: {};
  Blocks: {
    content: [];
    footer: [];
    header: [];
  };
}

const OSSPanelComponent =
  templateOnlyComponent<OSSPanelSignature>();

export default OSSPanelComponent;

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'OSS::Panel': typeof OSSPanelComponent;
    'o-s-s/panel': typeof OSSPanelComponent;
  }
}
