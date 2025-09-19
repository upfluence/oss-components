const { NoBareHTMLButton, RequireDataControlName } = require('./rules');

module.exports = {
  name: 'u-template-lint',

  rules: {
    'u-template-lint/no-bare-button': NoBareHTMLButton,
    'u-template-lint/require-data-control-name': RequireDataControlName
  },

  configurations: {
    recommended: {
      extends: 'recommended',
      plugins: ['@upfluence/oss-components/linters/handlebars'],
      rules: {
        'require-valid-alt-text': false,
        'simple-unless': false,
        'u-template-lint/require-data-control-name': true,
        'no-curly-component-invocation': false,
        'no-inline-styles': false,
        'require-iframe-title': false,
        'require-input-label': false,
        'no-down-event-binding': false,
        'no-invalid-interactive': false,
        'no-action': false,
        'no-nested-interactive': false,
        'no-yield-only': false,
        'no-bare-strings': false
      }
    }
  }
};
