import Component from '@glimmer/component';

interface OSSLinkArgs {
  icon: string;
  label: string;
}

export default class OSSLink extends Component<OSSLinkArgs> {
  constructor(owner: unknown, args: OSSLinkArgs) {
    super(owner, args);

    if (!args.label && !args.icon) {
      throw new Error('[component][OSS::Link] You must pass either a @label or an @icon argument.')
    }
  }
}
