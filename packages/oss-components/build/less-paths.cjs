'use strict';

const path = require('node:path');

/**
 * LESS `paths` that let an app compile `styles/oss-components.less`: the folder that holds this package's `bootstrap`.
 *
 * pnpm keeps a package's dependencies next to it (`.pnpm/<package>/node_modules/`), not inside it, so bootstrap is
 * resolved from this file's location rather than from `<package>/node_modules`.
 *
 * @returns {string[]}
 */
function ossLessPaths() {
  return [path.dirname(path.dirname(require.resolve('bootstrap/package.json')))];
}

module.exports = { ossLessPaths };
