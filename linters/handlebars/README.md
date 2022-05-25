# Handlebars Rules

For additional linting, this project defines a set of custom linting rules that allow us to enforce our Design System
better.

## Installation

In your project's `.template-lintrc.js` configuration, you can add this plugin and enable its rules:

```javascript
'use strict';

module.exports = {
  extends: 'octane',

  plugins: ['@upfluence/oss-components/linters/handlebars'],

  rules: {
    'u-template-lint/no-bare-button': 'error'
  }
};
```

## Rules list

<!--RULES_TABLE_START-->

| Name                                                                                                      | Description |
| :-------------------------------------------------------------------------------------------------------- | :-- | 
| no-bare-button                                           | Warns against usage of raw `button` element and legacy `loading-button` component

<!--RULES_TABLE_END-->
