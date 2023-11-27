'use strict';

module.exports = {
  arrowParens: 'always',
  bracketSpacing: true,
  printWidth: 120,
  proseWrap: 'preserve',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'none',
  useTabs: false,
  overrides: [
    {
      files: '*.hbs',
      options: {
        singleQuote: false
      }
    }
  ]
};
