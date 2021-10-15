'use strict';

module.exports = {
  extends: 'octane',

  plugins: ['./linters/handlebars'],

  rules: {
    'u-template-lint/no-bare-button': ['error']
  }
};
