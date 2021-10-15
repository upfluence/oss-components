const { Rule } = require('ember-template-lint');

class NoBareHTMLButton extends Rule {
  visitor() {
    return {
      ElementNode(node) {
        console.log(node)
        if (['button', 'LoadingButton'].includes(node.tag)) {
          this.log({
            node,
            message: 'Prefer OSS::Button component to bare HTML buttons',
            line: node.loc.start.line
          });
        }
      },

      MustacheStatement(node, visitorPath) {
        console.log(node, visitorPath);
      }
    };
  }
}

module.exports = NoBareHTMLButton;
