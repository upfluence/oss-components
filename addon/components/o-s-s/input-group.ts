import Component from '@glimmer/component';
import { assert } from '@ember/debug';

interface OSSInputGroupArgs {
  value?: string;
  disabled?: boolean;
  errorMessage?: string;
  placeholder?: string;
  prefix?: string;
  suffix?: string;
  type?: string;
  onChange?(value: string): void;
}

export default class OSSInputGroup extends Component<OSSInputGroupArgs> {
  constructor(owner: unknown, args: OSSInputGroupArgs) {
    super(owner, args);

    assert(
      '[component][OSS::InputGroup] No @prefix or @suffix parameter were passed. If you are not going to use any, you should use an OSS::InputContainer.',
      args.prefix || args.suffix
    );
  }
}
