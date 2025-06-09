import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('input');
  this.route('visual');
  this.route('data');
  this.route('overlay');
  this.route('extra');
  this.route('wizard');
  this.route('smart');
});
