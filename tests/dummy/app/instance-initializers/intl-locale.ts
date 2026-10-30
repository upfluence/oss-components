import type ApplicationInstance from '@ember/application/instance';
import type { IntlService } from 'ember-intl';

export function initialize(appInstance: ApplicationInstance): void {
  // Services can't set tracked state while first instantiated from a template render, which is how Storybook renders
  (appInstance.lookup('service:intl') as IntlService).setLocale('en-us');
}

export default { initialize };
