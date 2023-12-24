import templateOnlyComponent from '@ember/component/template-only';

interface OSSIconNameSignature {
  Args: {};
}

const OSSIconNameComponent =
  templateOnlyComponent<OSSIconNameSignature>();

export default OSSIconNameComponent;

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'OSS::IconName': typeof OSSIconNameComponent;
    'o-s-s/iconName': typeof OSSIconNameComponent;
  }
}
