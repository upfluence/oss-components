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

  included() {
    this._super.included.apply(this, arguments);

    this.import('vendor/bootstrap/bootstrap.min.js');
    this.import('vendor/ion-rangeslider/js/ion.rangeSlider.min.js');
    this.import('vendor/ion-rangeslider/css/ion.rangeSlider.min.css');
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

    trees.push(
      new Funnel(this._resolvePackagePath('bootstrap/dist/js'), { destDir: 'bootstrap' }),
      new Funnel(this._resolvePackagePath('ion-rangeslider'), { destDir: 'ion-rangeslider' })
    );

    return mergeTrees(trees, { overwrite: true });
  },

  cacheKeyForTree(treeType) {
    return cacheKeyForTree(treeType, this, this.pkg);
  },

  _resolvePackagePath(pkgPath) {
    let parts = pkgPath.split('/');
    let pkg = parts[0];
    let basedir = parentIsAddon(this.parent.pkg) ? this.root : this.project.root;
    let result = path.dirname(resolve.sync(`${pkg}/package.json`, { basedir }));

    // add sub folders to path
    if (parts.length > 1) {
      let args = parts.map((part, i) => (i === 0 ? result : part));
      result = path.join.apply(path, args);
    }
    return result;
  }
};

function parentIsAddon(parentPkg) {
  return parentPkg.keywords && parentPkg.keywords.includes('ember-addon');
}
