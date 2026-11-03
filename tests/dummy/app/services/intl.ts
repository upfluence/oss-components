import IntlService from 'ember-intl/services/intl';

export default class DummyIntlService extends IntlService {
  constructor(...args: ConstructorParameters<typeof IntlService>) {
    super(...args);
    this.setLocale('en-us');
  }
}
