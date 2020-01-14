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

Requirements:

* Ember JS: ^3.x
* ember-cli-less

The best way to use the components is through our Ember JS addon,
 **[oss-components](https://github.com/upfluence/oss-components)**. You can install it
via `Yarn` or `npm`:

```
yarn add upfluence-oss-components
```

In your project's `ember-cli-build.js`;
```
module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    lessOptions: {
      paths: [
        'node_modules/upfluence-oss-components/app/styles'
        ...
      ]
    }
  }
};
```

Finally, add the following line into your project's `app/styles/app.less` in
order to import the OSS in your project:
```
@import 'oss-components';
```

NOTE: The package include Bootstrap (^3.3.7) and Font-Awesome (^4.7.0), so you
may need to remove them from your project if you are using the same versions. If
not, you are already good to go.

#### Standalone package (with LESS preprocessor)

If you don't want to use Ember JS or if you are working on a standalone project that only
requires OSS's CSS, you can build it from our **[LESS repository](https://github.com/upfluence/oss)**.

Required:

* Install the LESS preprocessor using `npm install -g less`

Steps to build OSS:
1. Clone the repository using `git clone git@github.com:upfluence/oss.git`;
2. Move to the repository's folder (`cd oss`);
3. Install the dependencies by running `yarn`;
4. Move to the `less` folder (`cd less`);
5. `lessc upfluence-oss.less -x --include-path=../node_modules/bootstrap/less > upfluence-oss.css`
6. The `upfluence-oss.css` file now contains all of OSS along with its dependencies. Hooray!

*/
module.exports = {
  name: 'oss-components',

  isDevelopingAddon: function() {
    return true;
  },

  _registerLessDependencies(app) {
    let lessOptions = app.options.lessOptions || {};

    if (!lessOptions.paths) {
      lessOptions.paths = [];
    }

    lessOptions.paths.push(
      'node_modules/font-awesome/less',
      'node_modules/bootstrap/less',
      'node_modules/upfluence-oss/less'
    );

    app.options.lessOptions = lessOptions;
  },

  included: function(app) {
    this._super.included(app);

    this._registerLessDependencies(app);

    this.import('node_modules/bootstrap/dist/js/bootstrap.min.js');
    this.import('node_modules/countdown.js/lib/countdown.js');
    this.import('node_modules/ion-rangeslider/js/ion.rangeSlider.min.js');
    this.import('node_modules/ion-rangeslider/css/ion.rangeSlider.min.css');

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
          `node_modules/upfluence-oss/${assetType}/`,
          {
            srcDir: '/',
            destDir: `assets/${assetType}`
          }
        )
      );
    });

    trees.push(
      new Funnel('node_modules/font-awesome/fonts/', {
        srcDir: '/',
        include: ['**/*.woff', '**/*.woff2'],
        destDir: 'fonts'
      })
    );

    return mergeTrees(trees);
  }
};
