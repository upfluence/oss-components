const { NoBareHTMLButton } = require('./rules');

module.exports = {
  name: 'u-template-lint',

  rules: {
    'u-template-lint/no-bare-button': NoBareHTMLButton
  }
};
