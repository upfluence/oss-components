<<<<<<< HEAD
# Upfluence OSS Components

This project hosts a bunch of branded (following the OSS framework)
components for usage in our projects.
=======
my-addon
==============================================================================

[Short description of the addon.]
>>>>>>> 66b3acc... message

Installation
------------------------------------------------------------------------------

<<<<<<< HEAD
As any NPM package, you can install it via:
 `npm install --save upfluence-oss-components`

## Running / Development

This addon's dummy app is actually a showcase of the frontend framework
and its custom components.

It's an Ember app, so we assume you have all set up as that's our
frontend stack anyway.

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Adding it to a project

Here are the steps to add OSS-Components to an Ember project:

* Install via `npm install --save upfluence-oss-components`
* Install the Bower package containing all the needed CSS with `bower
  install --save upfluence-oss`
* In your `ember-cli-build.js` file, add the following lines for enabling Asset Map file generation, and importing the Upfluence OSS framework:

```
// In the "fingerprint" configuration
fingerprint: {
  generateAssetMap: true,
  ...
}

// In the "lessOptions" configuration
lessOptions: {
  paths: [
    ...,
    'bower_components/upfluence-oss/less',
    ...
  ]
}
```
* Enable the `ember-cli-ifa`, in the `config/environment.js` file
 
```
module.exports = function(environment) {
  var ENV = {
    ...,    
    ifa: {
      enabled: true
    },
    ...
  };

  return ENV;
};
```

* And finally, import the OSS framework in your `app/styles/app.less` file
 
```
@import 'bootstrap';
@import 'upfluence-oss';
@import 'upf-utils';
...
```


### Deploying

A simple `ember deploy production --verbose` will do the trick.

PS: Do not forget to set the env variables accordingly (See
`config/deploy.js` for details about needed variables).
=======
```
ember install my-addon
```


Usage
------------------------------------------------------------------------------

[Longer description of how to use the addon in apps.]


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd my-addon`
* `npm install`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
>>>>>>> 66b3acc... message
