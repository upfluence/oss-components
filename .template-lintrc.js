'use strict';

module.exports = {
  extends: 'octane',

  plugins: ['./u-template-lint'],

  rules: {
    'u-template-lint/no-bare-button': ['error', { allow: [] }]
  }
};
