const { Rule } = require('ember-template-lint');

class NoBareHTMLButton extends Rule {
  visitor() {
    return {
      ElementNode(node) {
        if (node.tag === 'button') {
          this.log({
            node,
            message: 'Prefer OSS::Button component to bare HTML buttons',
            line: node.loc.start.line
          });
        }
      }
    };
  }
}

module.exports = {
  name: 'u-template-lint',

  rules: {
    'u-template-lint/no-bare-button': NoBareHTMLButton
  }
};
