import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import RouterService from '@ember/routing/router-service';

interface OSSAnchorArgs {
  link: string;
  routePrefix?: string;
  noopener?: boolean;
  noreferrer?: boolean;
  disableAutoActive?: boolean;
}

export default class OSSAnchor extends Component<OSSAnchorArgs> {
  @service declare router: RouterService;

  get noopener(): boolean {
    return this.args.noopener ?? true;
  }

  get noreferrer(): boolean {
    return this.args.noreferrer ?? true;
  }

  get currentWhen(): boolean | undefined {
    if (this.args.disableAutoActive !== undefined) {
      return !this.args.disableAutoActive;
    }

    return undefined;
  }

  get rel(): string {
    const relations: string[] = [];

    if (this.noopener) {
      relations.push('noopener');
    }

    if (this.noreferrer) {
      relations.push('noreferrer');
    }

    return relations.join(' ');
  }

  get isInternalRoute(): boolean {
    const route = this.args.routePrefix ? this.args.routePrefix + '.' + this.args.link : this.args.link;
    try {
      return Boolean(this.router.urlFor(route));
    } catch (error) {
      return false;
    }
  }
}
