/* global require module */
const { Rule } = require('ember-template-lint');

class NoBareHTMLButton extends Rule {
  visitor() {
    return {
      ElementNode(node) {
        if (this._hasUnrecommendedNode(node)) {
          this._logError(node);
        }
      },

      MustacheStatement(node) {
        if (this._hasUnrecommendedNode(node)) {
          this._logError(node);
        }
      },

      BlockStatement(node) {
        if (this._hasUnrecommendedNode(node)) {
          this._logError(node);
        }
      }
    };
  }

  _hasUnrecommendedNode(node) {
    const buttonInvokationExpr = ['MustacheStatement', 'BlockStatement'].includes(node.type)
      ? node.path.original
      : node.tag;
    return ['button'].includes(buttonInvokationExpr);
  }

  _logError(node) {
    this.log({
      node,
      message: 'Prefer OSS::Button component when using buttons',
      line: node.loc.start.line
    });
  }
}

module.exports = NoBareHTMLButton;
