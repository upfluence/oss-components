/* global require module */
/* jshint node: true */
'use strict';

const mergeTrees = require('broccoli-merge-trees');
const Funnel = require('broccoli-funnel');

/*
---
name: Get Started
category: Introduction
---

OSS is a design system built to help Upfluence's developers and designers quickly create
the best experience for our clients. At Upfluence, we love to create harmonious experiences
for our users, solving challenging interactions once then applying the solutions consistently
across our products — making sure users only have to learn them once.

### Installing
--------------

There are two options for installing and implementing/using our components:
**[Ember JS](https://www.emberjs.com/)** or **[LESS](http://lesscss.org)**.

#### Ember JS

The best way to use the components is through our Ember JS addon,
 **[oss-components](https://github.com/upfluence/oss-components)**. You can install it
via `Yarn` or `npm`:

```
yarn add upfluence-oss-components
```

#### LESS CSS

If you don't want to use Ember JS or if you are working on a standalone project that only
requires OSS's CSS, you can build it from our **[LESS repository](https://github.com/upfluence/oss)**
*/
module.exports = {
  name: 'oss-components',

  isDevelopingAddon: function() {
    return true;
  },

  included: function(app) {
    this._super.included(app);

    app.import('bower_components/bootstrap/dist/js/bootstrap.min.js');
    app.import('bower_components/summernote/dist/summernote.min.js');
    app.import('bower_components/summernote/dist/summernote.css');
    app.import('bower_components/summernote/dist/font/summernote.ttf', { destDir: 'assets/font' });
    app.import('bower_components/summernote/dist/font/summernote.eot', { destDir: 'assets/font' });
    app.import('bower_components/summernote/dist/font/summernote.woff', { destDir: 'assets/font' });
    app.import('bower_components/money-formatter/dist/money-formatter.min.js');
    app.import('bower_components/countdown.js/lib/countdown.js');
  },

  treeForPublic() {
    let publicTree = this._super.treeForPublic.apply(this, arguments);
    let trees = [];

    if (publicTree) {
      trees.push(publicTree);
    }

    let publicAssets = ['images', 'fonts', 'upf-icons'];
    publicAssets.forEach((assetType) => {
      trees.push(
        new Funnel(
          `${this.app.bowerDirectory}/upfluence-oss/${assetType}/`,
          {
            srcDir: '/',
            destDir: `assets/${assetType}`
          }
        )
      );
    });

    return mergeTrees(trees);
  }
};
