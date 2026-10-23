import { assert } from '@ember/debug';
import { action } from '@ember/object';
import type Owner from '@ember/owner';
import type RouterService from '@ember/routing/router-service';
import { service } from '@ember/service';
import Component from '@glimmer/component';

export type LinkType = {
  href: string;
  target: '_self' | '_blank' | '_parent' | '_top';
};

interface OSSLinkArgs {
  icon: string;
  label: string;
  link?: LinkType;
  transitionTo?: string;
}

export default class OSSLink extends Component<OSSLinkArgs> {
  @service declare router: RouterService;

  constructor(owner: Owner, args: OSSLinkArgs) {
    super(owner, args);

    assert('[component][OSS::Link] You must pass either a @label or an @icon argument.', args.label || args.icon);
  }

  @action
  goTo() {
    if (this.args.link) {
      window.open(this.args.link.href, this.args.link.target)?.focus();
    }
    if (this.args.transitionTo) {
      this.router.transitionTo(this.args.transitionTo);
    }
  }
}
