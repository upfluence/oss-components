import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import RouterService from '@ember/routing/router-service';

interface OSSAnchorArgs {
  link: string;
  engine?: string;
  noopener?: boolean;
  noreferrer?: boolean;
}

export default class OSSAnchor extends Component<OSSAnchorArgs> {
  @service declare router: RouterService;

  get noopener(): boolean {
    return this.args.noopener ?? true;
  }

  get noreferrer(): boolean {
    return this.args.noreferrer ?? true;
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
    try {
      return Boolean(
        this.args.engine
          ? this.router.urlFor(this.args.engine + '.' + this.args.link)
          : this.router.urlFor(this.args.link)
      );
    } catch (error) {
      return false;
    }
  }
}
