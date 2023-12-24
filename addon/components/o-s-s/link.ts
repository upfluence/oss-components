import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import RouterService from '@ember/routing/router-service';
import { assert } from '@ember/debug';

export type LinkType = {
  href: string;
  target: '_self' | '_blank' | '_parent' | '_top';
};

interface OSSLinkSignature {
  Args: {
    icon: string;
    label: string;
    link?: LinkType;
    transitionTo?: string;
  };
  Element: HTMLDivElement;
}

export default class OSSLinkComponent extends Component<OSSLinkSignature> {
  @service declare router: RouterService;

  constructor(owner: unknown, args: OSSLinkSignature['Args']) {
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

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'OSS::Link': typeof OSSLinkComponent;
    'o-s-s/link': typeof OSSLinkComponent;
  }
}
