// Types for compiled templates
declare module '@upfluence/oss-components/templates/*' {
  import { TemplateFactory } from 'ember-cli-htmlbars';

  const tmpl: TemplateFactory;
  export default tmpl;
}

declare module 'ember-intl/test-support' {
  function setupIntl(...args: unknown[]): unknown;
}
