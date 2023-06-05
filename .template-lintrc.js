'use strict';

module.exports = {
  extends: 'recommended',

  plugins: ['./linters/handlebars'],

  rules: {
    'u-template-lint/no-bare-button': 'error'
  }
};
