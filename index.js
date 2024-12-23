/* jshint node: true */
'use strict';

const mergeTrees = require('broccoli-merge-trees');
const Funnel = require('broccoli-funnel');
const cacheKeyForTree = require('calculate-cache-key-for-tree');
const path = require('path');
const resolve = require('resolve');
const { name, version } = require('./package');

const faPath = path.dirname(require.resolve('@fortawesome/fontawesome-pro/package.json'));

module.exports = {
  name,
  version,

  isDevelopingAddon: function () {
    return true;
  },

  options: {
    autoImport: {
      exclude: ['@storybook/addon-actions']
    }
  },

  included(parent) {
    this._super.included.apply(this, arguments);

    if (parent.project.pkg.name === name) {
      this.options.babel.plugins.push(...require('ember-cli-code-coverage').buildBabelPlugin());
    }

    this.import('vendor/bootstrap/bootstrap.min.js');
  },

  treeForPublic() {
    const publicTree = this._super.treeForPublic.apply(this, arguments);
    const trees = [];

    if (publicTree) {
      trees.push(publicTree);
    }

    const publicAssets = ['images', 'fonts', 'upf-icons'];
    const srcAssetsPath =
      this.parent.pkg['name'] === '@upfluence/oss-components' ? '' : 'node_modules/@upfluence/oss-components/';
    publicAssets.forEach((assetType) => {
      trees.push(
        new Funnel(`${srcAssetsPath}public/assets/${assetType}`, {
          srcDir: '/',
          destDir: `assets/${assetType}`
        })
      );
    });

    trees.push(
      new Funnel(`${faPath}/webfonts/`, {
        srcDir: '/',
        include: ['**/*.woff', '**/*.woff2', '**/*.eot', '**/*.ttf', '**/*.svg'],
        destDir: '/webfonts'
      })
    );

    return mergeTrees(trees);
  },

  treeForVendor(tree) {
    const trees = [tree];

    trees.push(new Funnel(this._resolvePackagePath('bootstrap/dist/js'), { destDir: 'bootstrap' }));

    return mergeTrees(trees.filter(Boolean), { overwrite: true });
  },

  cacheKeyForTree(treeType) {
    return cacheKeyForTree(treeType, this, this.pkg);
  },

  _resolvePackagePath(pkgPath) {
    let parts = pkgPath.split('/');
    let pkg = parts[0];
    let basedir = parentIsAddon(this.parent.pkg) || pnpmCompatible(this.parent.pkg) ? this.root : this.project.root;
    let result = path.dirname(resolve.sync(`${pkg}/package.json`, { basedir }));

    // add sub folders to path
    if (parts.length > 1) {
      let args = parts.map((part, i) => (i === 0 ? result : part));
      result = path.join.apply(path, args);
    }
    return result;
  }
};

//TODO: will be deleted at the end for pnpm migration
function parentIsAddon(parentPkg) {
  return parentPkg.keywords && parentPkg.keywords.includes('ember-addon');
}

function pnpmCompatible(parentPkg) {
  return parentPkg.packageManager && parentPkg.packageManager.startsWith('pnpm');
}
