import templateOnlyComponent from '@ember/component/template-only';

interface OSSPanelRowSignature {
  Args: {
    icon: unknown;
    label: unknown;
  };
  Element: HTMLDivElement;
}

const OSSPanelRowComponent =
  templateOnlyComponent<OSSPanelRowSignature>();

export default OSSPanelRowComponent;

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'OSS::Panel::Row': typeof OSSPanelRowComponent;
    'o-s-s/panel/row': typeof OSSPanelRowComponent;
  }
}
