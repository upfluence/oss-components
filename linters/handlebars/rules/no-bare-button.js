const { Rule } = require('ember-template-lint');

class NoBareHTMLButton extends Rule {
  visitor() {
    return {
      ElementNode(node) {
        if (this._hasDiscouragedNode(node)) {
          this._logError(node);
        }
      },

      MustacheStatement(node, visitorPath) {
        if (this._hasDiscouragedNode(node)) {
          this._logError(node);
        }
      },

      BlockStatement(node) {
        if (this._hasDiscouragedNode(node)) {
          this._logError(node);
        }
      }
    };
  }

  _hasDiscouragedNode(node) {
    const buttonInvokationExpr = ['MustacheStatement', 'BlockStatement'].includes(node.type)
      ? node.path.original
      : node.tag;
    return ['LoadingButton', 'button', 'loading-button'].includes(buttonInvokationExpr);
  }

  _logError(node) {
    this.log({
      node,
      message: 'Prefer OSS::Button component to bare HTML buttons',
      line: node.loc.start.line
    });
  }
}

module.exports = NoBareHTMLButton;
