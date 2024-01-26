import { isBlank } from '@ember/utils';
import Component from '@glimmer/component';

interface OSSAttributeBaseSignature {
  Args: {
    value: string;
    copyable?: boolean;
  };
  Blocks: {
    label: [];
    value: [];
  };
  Element: HTMLDivElement;
}

export default class OSSAttributeBaseComponent extends Component<OSSAttributeBaseSignature> {
  get isCopyable(): boolean {
    return (this.args.copyable ?? true) && !isBlank(this.args.value) && this.args.value !== '-';
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'OSS::Attribute::Base': typeof OSSAttributeBaseComponent;
    'o-s-s/attribute/base': typeof OSSAttributeBaseComponent;
  }
}
