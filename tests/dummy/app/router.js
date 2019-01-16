import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('typography');
  this.route('icons');
  this.route('inputs');
  this.route('buttons');
  this.route('text-editor');
  this.route('data-table');
  this.route('patterns', function() {
    this.route('stats');
  });
});

export default Router;
