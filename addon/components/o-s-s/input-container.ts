import { action } from '@ember/object';
import Component from '@glimmer/component';

interface OSSInputContainerSignature {
  Args: {
    value?: string | null;
    disabled?: boolean;
    errorMessage?: string | null;
    placeholder?: string;
    onChange?(value: string): void;
  };
  Blocks: {
    input: [];
    prefix: [];
    suffix: [];
  };
  Element: HTMLDivElement;
}

export default class OSSInputContainerComponent extends Component<OSSInputContainerSignature> {
  @action
  _onChange(value: string): void {
    if (this.args.onChange) {
      this.args.onChange(value);
    }
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'OSS::InputContainer': typeof OSSInputContainerComponent;
    'o-s-s/input-container': typeof OSSInputContainerComponent;
  }
}
