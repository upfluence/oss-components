import { htmlSafe, isHTMLSafe } from '@ember/template';
import type { SafeString } from '@ember/template/-private/handlebars';
import DOMPurify from 'dompurify';
import type { TOptions } from 'ember-intl/services/intl';

import { RICH_TEXT_SVG_CONFIG } from '@upfluence/oss-components/utils/sanitize-config';

const OVERRIDE_APPLIED_KEY = '__ossOverrideIntlApplied';

export function initialize(appInstance: any): void {
  const intl = appInstance.lookup('service:intl');

  if (intl[OVERRIDE_APPLIED_KEY]) {
    return;
  }

  const originalT = intl.t.bind(intl);

  intl.t = (key: string, options: TOptions & { htmlSafe: true }): string | SafeString => {
    let result = originalT(key, options);

    if (options && options.htmlSafe) {
      const stringToSanitize = isHTMLSafe(result) ? result.toString() : (result as string);
      const sanitized = DOMPurify.sanitize(stringToSanitize, RICH_TEXT_SVG_CONFIG);
      result = htmlSafe(sanitized);
    }

    return result;
  };

  intl[OVERRIDE_APPLIED_KEY] = true;
}

export default {
  initialize
};
