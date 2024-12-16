const { NoBareHTMLButton } = require('./rules');

module.exports = {
  name: 'u-template-lint',

  rules: {
    'u-template-lint/no-bare-button': NoBareHTMLButton
  },

  configurations: {
    recommended: {
      extends: 'recommended',
      rules: {
        'require-valid-alt-text': false,
        'simple-unless': false,
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
