import Component from '@glimmer/component';
import { assert } from '@ember/debug';

interface OSSInputGroupSignature {
  Args: {
    value?: string;
    disabled?: boolean;
    errorMessage?: string;
    placeholder?: string;
    prefix?: string;
    suffix?: string;
    onChange?(value: string): void;
  };
  Element: HTMLDivElement;
}

export default class OSSInputGroupComponent extends Component<OSSInputGroupSignature> {
  constructor(owner: unknown, args: OSSInputGroupSignature['Args']) {
    super(owner, args);

    assert(
      '[component][OSS::InputGroup] No @prefix or @suffix parameter were passed. If you are not going to use any, you should use an OSS::InputContainer.',
      args.prefix || args.suffix
    );
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'OSS::InputGroup': typeof OSSInputGroupComponent;
    'o-s-s/input-group': typeof OSSInputGroupComponent;
  }
}
