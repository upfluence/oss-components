import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class Application extends Route {
  @service intl;

  beforeModel() {
    this.intl.setLocale('en-us');
  }
}
